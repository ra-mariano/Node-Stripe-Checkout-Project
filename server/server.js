require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())
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

        //console.log(req.body.items)
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
          cancel_url: 'https://example.com/cancel',
        })
        res.send({ urlz: session.url })
        // res.redirect(303, session.url); 
    }
    }

    catch (e) {
      res.status(500).json({ error: e.message })
    }  
  });
  
  app.listen(4242, () => console.log(`Listening on port ${4242}!`));
  
  
  
  
  
  
  
  
  
  
  
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