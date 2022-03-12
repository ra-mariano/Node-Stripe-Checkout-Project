require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, {priceInCents: 2500, name: "Test Product One"}],
  [2, {priceInCents: 1500, name: "Test Product Two"}]
])

app.post('/create-checkout-session', async (req, res) => {
  try {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.items.map(item=> {
      const storeItem = storeItems.get(item.id)
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: storeItem.name
          },
          unit_amount: storeItem.priceInCents
        },
        quantity: item.quantity 
      }
    }),
    mode: 'payment',
    success_url: "http://127.0.0.1:4242",
    cancel_url: 'https://example.com/cancel',
  })
  res.json({ url: session.url })
  }
  catch (e) {
    res.status(500).json({ error: e.message })
  }
  
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));