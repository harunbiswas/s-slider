const left = document.querySelector("#h-left");
const right = document.querySelector("#h-right");
const slider = document.querySelector("#h-slider");

const rightNodes = document.querySelectorAll("#h-right>.slider-item");
const leftNodes = document.querySelectorAll("#h-left>.slider-item");

const sliderHeight = slider.offsetHeight;
const rightHeight = right.offsetHeight;
const leftHeight = left.offsetHeight;
const nodeHeight = Math.floor(rightHeight / rightNodes.length) + 1;

console.log(Math.floor(nodeHeight));

let rihtup = rightHeight - sliderHeight;
let leftup = 0;
let isRightUp = false;
let isLeftUp = true;

right.style.transform = `translateY(-${rihtup}px)`;

const rightHandler = () => {
  if (rihtup >= 0 && !isRightUp) {
    rihtup = rihtup - nodeHeight;
  } else if (rihtup < rightHeight - sliderHeight && isRightUp) {
    rihtup = rihtup + nodeHeight;
  }

  if (rihtup <= 0) {
    isRightUp = true;
  } else if (rihtup >= rightHeight - sliderHeight) {
    isRightUp = false;
  }

  if (rihtup < 0) {
    right.style.transform = `translateY(0px)`;
  } else {
    right.style.transform = `translateY(-${rihtup}px)`;
  }
};

const leftHandler = () => {
  if (leftup < leftHeight - sliderHeight && isLeftUp) {
    leftup = leftup + nodeHeight;
  } else if (leftup > 0 && !isLeftUp) {
    leftup = leftup - nodeHeight;
  }

  if (leftup >= leftHeight - sliderHeight) {
    isLeftUp = false;
  } else if (leftup <= 0) {
    isLeftUp = true;
  }

  left.style.transform = `translateY(-${leftup}px)`;
};

setInterval(() => {
  rightHandler();
  leftHandler();
}, 2000);
