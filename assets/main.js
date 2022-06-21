var input = document.getElementById('name');
var btn = document.getElementById('btn');
var b = false;
function sayHello() {
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello " + input.value + ", welcome to the bootcamp";
    document.body.append(paragraph);
  }
btn.addEventListener('click', sayHello);

;