const left = document.querySelector("#h-left");
const right = document.querySelector("#h-right");
const slider = document.querySelector("#h-slider");

const rightNodes = document.querySelectorAll("#h-right>.slider-item");
const leftNodes = document.querySelectorAll("#h-left>.slider-item");

const sliderHeight = slider.offsetHeight;
const rightHeight = right.offsetHeight;
const leftHeight = left.offsetHeight;
const nodeHeightRight = Math.floor(rightHeight / rightNodes.length) + 1;
const nodeHeightLeft = Math.floor(leftHeight / leftNodes.length) + 1;

let rihtup = rightHeight - sliderHeight;
let leftup = 0;
let isRightUp = false;
let isLeftUp = true;

right.style.transform = `translateY(-${rihtup}px)`;

const rightHandler = () => {
  if (rihtup >= 0 && !isRightUp) {
    rihtup = rihtup - nodeHeightRight;
  } else if (rihtup < rightHeight - sliderHeight && isRightUp) {
    rihtup = rihtup + nodeHeightRight;
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
  if (leftup <= leftHeight - sliderHeight && isLeftUp) {
    leftup = leftup + nodeHeightLeft;
  } else if (leftup >= 0 && !isLeftUp) {
    leftup = leftup - nodeHeightLeft;
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

  console.log(nodeHeightRight, nodeHeightLeft);
}, 2000);
