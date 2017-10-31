var numSquares= 6;
var colors =[];
var pickedColor;
var sq=document.querySelectorAll(".square");
var disp=document.getElementById("display");
var msg=document.getElementById("msg");
var h1=document.querySelector("h1");
var resetbut=document.querySelector("#reset");
var modebtn = document.querySelectorAll(".mode");

init();

function init() {
  for (var i = 0; i < modebtn.length; i++) {
    modebtn[i].addEventListener("click",function () {
      modebtn[0].classList.remove("selected");
      modebtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
  for (var i = 0; i < sq.length; i++) {
    sq[i].addEventListener("click",function () {
      //compare color to picked color
      var click=this.style.background;
      if(click === pickedColor){
        msg.textContent="Correct !!"
        change(pickedColor);
        h1.style.background = click;
        resetbut.textContent ="Play Again ?"
      }

      else {
        this.style.background ="#232323";
        msg.textContent="Try Again";
      }
    });
  }
  reset();
}

for (var i = 0; i < modebtn.length; i++) {
  modebtn[i].addEventListener("click",function () {
    modebtn[0].classList.remove("selected");
    modebtn[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
  })
  reset();
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  disp.textContent = pickedColor;
  msg.textContent = "";
  resetbut.textContent = "New colors";
  for (var i = 0; i < sq.length; i++) {
    if(colors[i]){
      sq[i].style.display = "block";
      sq[i].style.background =colors[i];
    }
    else {
      sq[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}



resetbut.addEventListener("click",function () {
  reset();
})


function change(color) {
  for (var i = 0; i < sq.length; i++) {
    sq[i].style.background= color;
  }
}
function pickColor() {
  var random=Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
var arr=[];
  for (var i = 0; i < num; i++) {
      //get randomColor
      arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+ r +", "+ g +", "+ b +")";
}
