var timer = 30;
var score = 0;
var hitrn;

function makeBubble() {
  var critic = "";
  for (var i = 1; i <= 92; i++) {
    var rn = Math.floor(Math.random() * 10);
    critic += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".bubble").innerHTML = critic;
}
function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = hitrn;
}

function runTimmer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeInt").textContent = timer;
    } else {
      document.querySelector(".pBody").innerHTML = `<h1>GAME OVER</h1>`;
      clearInterval(timerInt);
    }
  }, 1000);
}
function incScore() {
  score += 10;
  document.querySelector("#scoree").innerHTML = score;
}
document.querySelector(".pBody").addEventListener("click", function (ran) {
  var clickedNum = Number(ran.target.textContent);
  if (clickedNum === hitrn) {
    makeBubble();
    incScore();
    newHit();
  } else {
  }
});

runTimmer();
makeBubble();

newHit();
