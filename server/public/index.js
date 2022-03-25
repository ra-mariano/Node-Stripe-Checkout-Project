
document.getElementById("onebutton").addEventListener("click", oneButton);
document.getElementById("clearone").addEventListener("click", clearOne);
document.getElementById("twobutton").addEventListener("click", twoButton);
document.getElementById("cleartwo").addEventListener("click", clearTwo);
document.getElementById("threebutton").addEventListener("click", threeButton);
document.getElementById("clearthree").addEventListener("click", clearThree);
// document.getElementById("threebutton").addEventListener("click", logSubChoice);

let items = []


function oneButton() {
  let productoneuserquantity = document.getElementById("inputone").value
  let productonedisplayedquantity =  document.getElementById("onequantity") //The quantity row
  let productone = document.getElementById("productonebox")
  let producttwodisplayedquantity =  document.getElementById("twoquantity")
  let producttwo = document.getElementById("producttwobox")
  let productthreedisplayedquantity =  document.getElementById("threequantity")
  let productfourdisplayedquantity =  document.getElementById("fourquantity")
  let total =   document.getElementById("total")
  
  
  //console.log(document.getElementById("onequantity").getAttribute("value"))
  // console.log(document.getElementById("inputone").value)
  // console.log(productquantity)
  console.log(productonedisplayedquantity.getAttribute("value"))
  
  productonedisplayedquantity.innerHTML = parseInt(productoneuserquantity) + parseInt(productonedisplayedquantity.getAttribute("value")) // number
  productonedisplayedquantity.setAttribute("value", parseInt(productonedisplayedquantity.innerHTML)) 
  
  document.getElementById("inputone").value=0
  
  //productonedisplayedquantity.setAttribute("value", productoneuserquantity) // string
  
  if (productthreedisplayedquantity.innerHTML== 0 && productfourdisplayedquantity.innerHTML== 0) {
    total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
    }
    else if (productthreedisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+12+".00")
    }
    else if (productfourdisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+19+".00")
    }
  //total.innerHTML = "$" + parseInt(productone.dataset.price*productonedisplayedquantity) + (producttwo.dataset.price*producttwodisplayedquantity) +".00"
  
  
  
} 

function clearOne() {
  document.getElementById("onequantity").innerHTML = 0
  document.getElementById("onequantity").setAttribute("value", 0)
  
  let productone = document.getElementById("productonebox")
  let producttwo = document.getElementById("producttwobox")
  let productonedisplayedquantity = document.getElementById("onequantity")
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let productthreedisplayedquantity =  document.getElementById("threequantity")
  let productfourdisplayedquantity =  document.getElementById("fourquantity")
  let total =   document.getElementById("total")
  
  if (productthreedisplayedquantity.innerHTML== 0 && productfourdisplayedquantity.innerHTML== 0) {
    total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
    }
    else if (productthreedisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+12+".00")
    }
    else if (productfourdisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+19+".00")
    }
}

function twoButton() {
  let productonedisplayedquantity =  document.getElementById("onequantity") //The quantity row
  let productone = document.getElementById("productonebox")
  let producttwouserquantity = document.getElementById("inputtwo").value
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let producttwo = document.getElementById("producttwobox")
  let productthreedisplayedquantity =  document.getElementById("threequantity")
  let productfourdisplayedquantity =  document.getElementById("fourquantity")
  let total =   document.getElementById("total")
  

  producttwodisplayedquantity.innerHTML = parseInt(producttwouserquantity) + parseInt(producttwodisplayedquantity.getAttribute("value")) // number
  producttwodisplayedquantity.setAttribute("value", parseInt(producttwodisplayedquantity.innerHTML)) 
  
  document.getElementById("inputtwo").value=0
  
  //producttwodisplayedquantity.setAttribute("value", producttwouserquantity) // string
  if (productthreedisplayedquantity.innerHTML== 0 && productfourdisplayedquantity.innerHTML== 0) {
  total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
  }
  else if (productthreedisplayedquantity.innerHTML== 1) {
    total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+12+".00")
  }
  else if (productfourdisplayedquantity.innerHTML== 1) {
    total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+19+".00")
  }
} 

function clearTwo() {
  document.getElementById("twoquantity").innerHTML = 0
  document.getElementById("twoquantity").setAttribute("value", 0)
  
  let productone = document.getElementById("productonebox")
  let producttwo = document.getElementById("producttwobox")
  let productonedisplayedquantity = document.getElementById("onequantity")
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let productthreedisplayedquantity =  document.getElementById("threequantity")
  let productfourdisplayedquantity =  document.getElementById("fourquantity")
  let total =   document.getElementById("total")
  
  // producttwodisplayedquantity.innerHTML = parseInt(producttwouserquantity) + parseInt(producttwodisplayedquantity.getAttribute("value")) // number
  // producttwodisplayedquantity.setAttribute("value", parseInt(producttwodisplayedquantity.innerHTML)) 
  
  if (productthreedisplayedquantity.innerHTML== 0 && productfourdisplayedquantity.innerHTML== 0) {
    total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
    }
    else if (productthreedisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+12+".00")
    }
    else if (productfourdisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+19+".00")
    }
}

function threeButton() {

  let productonedisplayedquantity =  document.getElementById("onequantity") //The quantity row
  let productone = document.getElementById("productonebox")
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let producttwo = document.getElementById("producttwobox")
  let productthreedisplayedquantity =  document.getElementById("threequantity")
  let productfourdisplayedquantity =  document.getElementById("fourquantity") //The quantity row
  let total =   document.getElementById("total")

  if (document.getElementById("dropdown").value=="Basic Package") {
  //let productthreeuserquantity = document.getElementById("inputthree").value

  productthreedisplayedquantity.innerHTML= 1
  productthreedisplayedquantity.setAttribute("value", 1)

  productfourdisplayedquantity.innerHTML= 0
  productfourdisplayedquantity.setAttribute("value", 0)

   
  total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+12+".00")
  
} 
else if (document.getElementById("dropdown").value=="Premium Package") {
  //let productthreeuserquantity = document.getElementById("inputthree").value
  let productfourdisplayedquantity =  document.getElementById("fourquantity") //The quantity row
  let total =   document.getElementById("total")

  productfourdisplayedquantity.innerHTML= 1
  productfourdisplayedquantity.setAttribute("value", 1)

  productthreedisplayedquantity.innerHTML= 0
  productthreedisplayedquantity.setAttribute("value", 0)
   
  total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+19+".00")
}

}

function clearThree() {
  document.getElementById("threequantity").innerHTML = 0
  document.getElementById("threequantity").setAttribute("value", 0)
  document.getElementById("fourquantity").innerHTML = 0
  document.getElementById("fourquantity").setAttribute("value", 0)
  
  let productone = document.getElementById("productonebox")
  let producttwo = document.getElementById("producttwobox")
  let productonedisplayedquantity = document.getElementById("onequantity")
  let producttwodisplayedquantity =  document.getElementById("twoquantity") //The quantity row
  let productthreedisplayedquantity =  document.getElementById("threequantity")
  let productfourdisplayedquantity =  document.getElementById("fourquantity")
  let total =   document.getElementById("total")
  
  // producttwodisplayedquantity.innerHTML = parseInt(producttwouserquantity) + parseInt(producttwodisplayedquantity.getAttribute("value")) // number
  // producttwodisplayedquantity.setAttribute("value", parseInt(producttwodisplayedquantity.innerHTML)) 
  
  if (productthreedisplayedquantity.innerHTML== 0 && productfourdisplayedquantity.innerHTML== 0) {
    total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+".00")
    }
    else if (productthreedisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+12+".00")
    }
    else if (productfourdisplayedquantity.innerHTML== 1) {
      total.innerHTML = "$".concat(parseInt(productone.dataset.price)*parseInt(productonedisplayedquantity.getAttribute("value")) + (parseInt(producttwo.dataset.price)*parseInt(producttwodisplayedquantity.getAttribute("value")))+19+".00")
    }
}



const checkoutbutton = document.getElementById("checkoutbutton")
checkoutbutton.addEventListener("click", () => {

  let productthreedisplayedquantity =  document.getElementById("threequantity")
  let productfourdisplayedquantity =  document.getElementById("fourquantity")
  
  if(parseInt(document.getElementById("onequantity").getAttribute("value"))>0) {
    items.push({ id: 1, quantity: parseInt(document.getElementById("onequantity").getAttribute("value")) })
  }
  if(parseInt(document.getElementById("twoquantity").getAttribute("value"))>0) {
    items.push( { id: 2, quantity: parseInt(document.getElementById("twoquantity").getAttribute("value")) })
  }
  if(productthreedisplayedquantity.getAttribute("value")==1) {
    items.push({ id: 3, quantity: 1 })
  }
  if(productfourdisplayedquantity.getAttribute("value")==1) {
    items.push({ id: 4, quantity: 1 })
  }
  
  document.getElementById("twoquantity").setAttribute("value",0)
  
  fetch("/checkout-page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      items
    }),
  })
  .then(response => {
    if (response.ok) 
    {
      
      return response.json()}
    else {
      return response.json().then(json =>Promise.reject(json))
    }
  })
  .then(({urlz}) => {
    window.location = urlz
  })
  .catch(e => {       //Remember, catch is the same as .then(null, failureCallback)
    //console.error(e.error)  the original
    //console.log("oh my!")   this works but doesn't indicate error
    //console.error(e)        outputs same as console.log(e), unsure when to use which exactly
    console.log(e)  
    
    
  });
  
    
})

// // function logSubChoice() {
// //   console.log("working?")
// //   console.log(document.getElementById("dropdown").value)
  
// };

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    console.log('Page was loaded from cache.');
    
//     document.getElementById("twoquantity").innerHTML = 0
//   document.getElementById("twoquantity").setAttribute("value", 0)
//   document.getElementById("onequantity").innerHTML = 0
// document.getElementById("onequantity").setAttribute("value",0)
// total.innerHTML = "$0.00"
window.location.reload()
  }
});