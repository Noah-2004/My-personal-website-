const display = document.getElementById("display");

function getValue(number) {
  display.value += number;
}

function operation(op) {
  display.value += op;
}

function solve() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearAll() {
  display.value = "";
}

function clearSingle() {
  display.value = display.value.slice(0, -1);
}

const body = document.getElementById("body");

 const blackBackground = document.getElementById("black-btn");

blackBackground.onclick = function () {
  body.style.background = "#15192af2";
};  

const whiteBackground = document.getElementById("white-btn");

whiteBackground.onclick = function () {
  body.style.background = "white";
};

const blueBackground = document.getElementById("blue-btn");

blueBackground.onclick = function () {
  body.style.background = "lightblue";
};

const greenBackground =  document.getElementById("green-btn");

greenBackground.onclick = function () {
  body.style.background = "lightgreen";
};

const grayBackground =  document.getElementById("gray-btn");

grayBackground.onclick = function () {
  body.style.background = "lightgray";
};


const moreButton = document.getElementById("more-btn");


 const brown = document.getElementById("brown");
 brown.onclick = function () {
     body.style.background = "brown"
 };
 
 const lightbox = document.getElementById("lightbox");

 
if(body.style.background = "brown") {
    
}else {
    lightbox.style.display = "flex"
};
