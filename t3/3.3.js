'use strict';
const names = ['John', 'Paul', 'Jones'];


var targetElement = document.getElementById("target");


targetElement.innerHTML = "";

for (var i = 0; i < names.length; i++) {
  targetElement.innerHTML += "<li>" + names[i] + "</li>";
}
