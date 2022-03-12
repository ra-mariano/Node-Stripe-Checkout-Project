
document.getElementById("onebutton").addEventListener("click", oneButton);
document.getElementById("clearone").addEventListener("click", clearOne);
document.getElementById("twobutton").addEventListener("click", twoButton);
document.getElementById("cleartwo").addEventListener("click", clearTwo);

function oneButton() {
  let productoneuserquantity = document.getElementById("inputone").value
  let productonedisplayedquantity =  document.getElementById("onequantity") //The quantity row
  let productone = document.getElementById("productonebox")
  let producttwodisplayedquantity =  document.getElementById("twoquantity")
  let producttwo = document.getElementById("producttwobox")
  let total =   document.getElementById("total")


//console.log(document.getElementById("onequantity").getAttribute("value"))
  // console.log(document.getElementById("inputone").value)
  // console.log(productquantity)
  console.log(productonedisplayedquantity.getAttribute("value"))
  
 productonedisplayedquantity.innerHTML = parseInt(productoneuserquantity) + parseInt(productonedisplayedquantity.getAttribute("value")) // number
 productonedisplayedquantity.setAttribute("value", parseInt(productonedisplayedquantity.innerHTML)) 

 document.getElementById("inputone").value=0
 
 //productonedisplayedquantity.setAttribute("value", productoneuserquantity) // string

 total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
//total.innerHTML = "$" + parseInt(productone.dataset.price*productonedisplayedquantity) + (producttwo.dataset.price*producttwodisplayedquantity) +".00"

} 

function clearOne() {
  document.getElementById("onequantity").innerHTML = 0
  document.getElementById("onequantity").setAttribute("value", 0)

  let productone = document.getElementById("productonebox")
  let producttwo = document.getElementById("producttwobox")
  let productonedisplayedquantity = document.getElementById("onequantity")
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let total =   document.getElementById("total")

  total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
}

function twoButton() {
  let productonedisplayedquantity =  document.getElementById("onequantity") //The quantity row
  let productone = document.getElementById("productonebox")
  let producttwouserquantity = document.getElementById("inputtwo").value
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let producttwo = document.getElementById("producttwobox")
  let total =   document.getElementById("total")


//console.log(document.getElementById("twoquantity").getAttribute("value"))
  // console.log(document.getElementById("inputtwo").value)
  // console.log(productquantity)
  console.log(producttwodisplayedquantity.getAttribute("value"))
  
 producttwodisplayedquantity.innerHTML = parseInt(producttwouserquantity) + parseInt(producttwodisplayedquantity.getAttribute("value")) // number
 producttwodisplayedquantity.setAttribute("value", parseInt(producttwodisplayedquantity.innerHTML)) 

 document.getElementById("inputtwo").value=0
 
 //producttwodisplayedquantity.setAttribute("value", producttwouserquantity) // string

 total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")


} 

function clearTwo() {
  document.getElementById("twoquantity").innerHTML = 0
  document.getElementById("twoquantity").setAttribute("value", 0)

  let productone = document.getElementById("productonebox")
  let producttwo = document.getElementById("producttwobox")
  let productonedisplayedquantity = document.getElementById("onequantity")
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let total =   document.getElementById("total")

// producttwodisplayedquantity.innerHTML = parseInt(producttwouserquantity) + parseInt(producttwodisplayedquantity.getAttribute("value")) // number
// producttwodisplayedquantity.setAttribute("value", parseInt(producttwodisplayedquantity.innerHTML)) 


  total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
}

const button = document.getElementById("checkoutbutton")
button.addEventListener("click", () => {
  console.log("working")
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: parseInt(document.getElementById("onequantity").getAttribute("value")) },
        { id: 2, quantity: parseInt(document.getElementById("twoquantity").getAttribute("value")) },
      ],
    }),
  })
  .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json =>Promise.reject(json))
  })
  .then(({ url}) => {
    window.location = url
  }).catch(e => {
    console.error(e.error)
  })
})