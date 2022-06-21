var input = document.getElementById('name');
var btn = document.getElementById('btn');
var hello = document.getElementById('hello');
var b = false;
function sayHello() {
    hello.innerText = "Hello " + input.value + ", welcome to the bootcamp";
  }
btn.addEventListener('click', sayHello);
