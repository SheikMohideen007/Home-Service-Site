var search = document.getElementById("searchbar");
var viewplumb = document.getElementById("viewAllPlumb");
var viewelect = document.getElementById("viewAllElect");
var viewcarp = document.getElementById("viewAllCarp");
var viewro = document.getElementById("viewAllRo");
var viewpaint = document.getElementById("viewAllPaint");
var count = 1;
var viewPlumbc = 1,
  viewElect = 1,
  viewCarp = 1,
  viewRo = 1,
  viewPaint = 1;
function expand() {
  if (count % 2 != 0) {
    search.style.transform = "scale(1.2)";
    search.style.transition = "0.5s";
    count++;
  } else {
    search.style.transform = "";
    search.style.transition = "0.5s";
    count++;
  }
}
function shrinkPlumb() {
  if (viewPlumbc % 2 != 0) {
    viewplumb.style.transform = "scale(0.7)";
    viewPlumbc++;
  } else {
    viewplumb.style.transform = "";
    viewPlumbc++;
  }
}
function shrinkElect() {
  if (viewElect % 2 != 0) {
    viewelect.style.transform = "scale(0.7)";
    viewElect++;
  } else {
    viewelect.style.transform = "";
    viewElect++;
  }
}
function shrinkCarp() {
  if (viewCarp % 2 != 0) {
    viewcarp.style.transform = "scale(0.7)";
    viewCarp++;
  } else {
    viewcarp.style.transform = "";
    viewCarp++;
  }
}
function shrinkRo() {
  if (viewRo % 2 != 0) {
    viewro.style.transform = "scale(0.7)";
    viewRo++;
  } else {
    viewro.style.transform = "";
    viewRo++;
  }
}
function shrinkPaint() {
  if (viewPaint % 2 != 0) {
    viewpaint.style.transform = "scale(0.7)";
    viewPaint++;
  } else {
    viewpaint.style.transform = "";
    viewPaint++;
  }
}
var slide = document.getElementById("slide");
var forwardarrow = document.getElementById("forwardarrow");
var backwardarrow = document.getElementById("backwardarrow");

let x = 0;
forwardarrow.onclick = function () {
  if (x > "-900") {
    x = x - 520;
    slide.style.left = x + "px";
  }
};

backwardarrow.onclick = function () {
  if (x < 0) {
    x = x + 520;
    slide.style.left = x + "px";
  }
};
