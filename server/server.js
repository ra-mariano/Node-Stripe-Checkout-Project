require("dotenv").config()

let mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const express = require("express")
const app = express()

//app.use(express.json())
app.use(express.json({verify: (req,res,buf) => { req.rawBody = buf }}));
app.use(express.static("public"))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

// document.getElementById("threebutton").addEventListener("click", logSubChoice);

// function logSubChoice() {
//   console.log("working?")
// console.log(document.getElementById("dropdown").value)
// };




const storeItems = new Map([
  [1, {priceID: "price_1KbpENHBuM9OaL8xPeeVFAa8", name: "Test Product One", }],
  [2, {priceID: "price_1KbpExHBuM9OaL8xjgRtxqGY", name: "Test Product Two"}],
  [3, {priceID: "price_1KcxKXHBuM9OaL8x5NeHNFws", name: "Test Sub Basic Package"}],
  [4, {priceID: "price_1KcxKXHBuM9OaL8x4Ljaewie", name: "Test Sub Premium Package"}]
  
])

// app.post('/checkout-page-sub', async (req, res) => {
  
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {price: "price_1JktlkHBuM9OaL8xrMMEnF62", quantity: 1}],
//       mode: 'subscription',
//       success_url: "https://google.com",
//       cancel_url: 'https://example.com/cancel',
//     });
    
//     res.redirect(303, session.url);
    
//   });
  
  app.post('/checkout-page', async (req, res) => {
    try {
      
        // let arr = [{id:1, quantity: 2}, {id:2, quantity: 3}]
        // let idcheck = arr.map(x => x.id)
        // console.log(idcheck)
        // if (idcheck.includes(3)) {
        // }

       let itemsIDs = req.body.items.map(x=>x.id)

if (itemsIDs.includes(3)||itemsIDs.includes(4)) {


  var personSchema = new mongoose.Schema({
    email: String,
  });
  
  /** 3) Create and Save a Person */
  var Person = mongoose.model('Person', personSchema);
  
  var createAndSavePerson = function(done) {
    var janeHonda = new Person({email: "testemail"});
  
    janeHonda.save(function(err, data) {
      if (err) return console.error(err);
      done(null, data)
    });
  };
  
  createAndSavePerson

     
      console.log(req.body.items)
      const session = await stripe.checkout.sessions.create({ 
        line_items: req.body.items.map(item=> {
          const storeItem = storeItems.get(item.id)
          return {
            price: storeItem.priceID,
            quantity: item.quantity
          }
        }),
        mode: 'subscription',
        success_url: "https://google.com",
        cancel_url: 'https://example.com/cancel',
      })
      res.send({ urlz: session.url })
      // res.redirect(303, session.url)  not working for some reason
    }
    else {

 
       
      console.log(req.body.items)
      const session = await stripe.checkout.sessions.create({ 
          line_items: req.body.items.map(item=> {
            const storeItem = storeItems.get(item.id)
            return {
              price: storeItem.priceID,
              quantity: item.quantity
            }
          }),
          mode: 'payment',
          success_url: "https://google.com",
          cancel_url: 'https://example.com/cancel'
          
        })
        
        res.send({ urlz: session.url })
        // res.redirect(303, session.url); 
    }
    }

    catch (e) {
      res.status(500).json({ error: e.message })
    }  
  });

  
const endpointSecret= 'whsec_juZKKIzVbCEneH4CaWM1mO5ggowp7N43'

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.rawBody, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook ERROR: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.created':
      const paymentIntent = event.data.object;
      // Then define and call a function to handle the event payment_intent.created
      console.log('YAYYYY PI CREATED');
      console.log(paymentIntent.id)
      break;

      case 'checkout.session.completed':
      const session = event.data.object;
      console.log("checkout sesshed")

var personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
}); 

var Person = mongoose.model('Person', personSchema, 'test 17');

var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save()


 //Following 4 lines are from tutorial, but it looks like just using janeFonda.save() works here 
/* janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  }); 
}; */

}
createAndSavePerson() 

      // Then define and call a function to handle the event checkout.session.completed
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  
  // Return a 200 response to acknowledge receipt of the event
  response.send();
});



  
  app.listen(3000, () => console.log(`Listening on port ${3000}!`));
  
  
  
  
  
  
  
  
  
  
  
  // const storeItems = new Map([
    //   [1, {priceInCents: 2500, name: "Test Product One", }],
    //   [2, {priceInCents: 1500, name: "Test Product Two"}]
    // ])

    // return {
      //   price_data: {
        //     currency: "usd",
        //     product_data: {
          //       name: storeItem.name
          //     },
          //     unit_amount: storeItem.priceInCents
          //   },
          //   quantity: item.quantity 
          // }