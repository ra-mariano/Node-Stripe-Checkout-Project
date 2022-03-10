console.log("working?")

document.getElementById("onebutton").addEventListener("click", oneButton);

function oneButton() {
  console.log(document.getElementById("inputone").value)
  console.log(document.getElementById("onequantity").value)
  document.getElementById("onequantity").innerHTML = document.getElementById("inputone").value
} 