// plik scripts.js
var buttonText = document.getElementsByClassName('button');
var j = (buttonText.length);
for (var k = 0; k < j; k++) {
  alert('warto�� buttonText.innerText to: ' + buttonText[k].innerText);
  console.log('warto�� k teraz to: ' + k + ' z '+ j);
  console.log('warto�� buttonText.innerText to: ' + buttonText[k].innerText);
  console.log(buttonText);
}