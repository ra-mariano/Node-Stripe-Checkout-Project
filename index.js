
document.getElementById("onebutton").addEventListener("click", oneButton);

function oneButton() {
  let productoneuserquantity = document.getElementById("inputone").value
  let productonedisplayedquantity =  document.getElementById("onequantity") //The quantity row
  let productone = document.getElementById("productonebox")
  let total =   document.getElementById("total")


//console.log(document.getElementById("onequantity").getAttribute("value"))
  // console.log(document.getElementById("inputone").value)
  // console.log(productquantity)
  console.log(productonedisplayedquantity.getAttribute("value"))
  
 productonedisplayedquantity.innerHTML = parseInt(productoneuserquantity) + parseInt(productonedisplayedquantity.getAttribute("value")) // number
 productonedisplayedquantity.setAttribute("value", parseInt(productonedisplayedquantity.innerHTML)) 

 document.getElementById("inputone").value=0
 
 //productonedisplayedquantity.setAttribute("value", productoneuserquantity) // string

total.innerHTML = "$" + parseInt(productone.dataset.price*productoneuserquantity) + ".00"


} 