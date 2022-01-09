var Items = document.querySelectorAll('.quantily');
var addItem = Items[1];
var subItem = Items[0];
var valueQuantily = document.querySelector('.num');

addItem.onclick = function() {
    valueQuantily.value++;
}

subItem.onclick = function() {
    if (valueQuantily.value > 0) valueQuantily.value--;
}

console.log(c);