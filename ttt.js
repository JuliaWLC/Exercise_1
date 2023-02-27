let turn = 0;

const circle_score_box = document.querySelector(".circle-container");
const cross_score_box = document.querySelector(".cross-container");
const turn_mark = document.querySelector(".turn-mark");

const cross_icon = '<i class="fa-sharp fa-solid fa-xmark"></i>';
const circle_icon = '<i class="fa-regular fa-circle"></i>';

const boxes = document.querySelectorAll(".box");

function placeObj(event) {
  console.log("i'm clicked");
  turn++;
  if (turn % 2 != 0) {
    event.currentTarget.innerHTML = circle_icon;
    turn_mark.innerHTML = cross_icon;

    circle_score_box.classList.toggle("highlight");
    cross_score_box.classList.toggle("highlight");
  } else {
    event.currentTarget.innerHTML = cross_icon;
    turn_mark.innerHTML = circle_icon;

    circle_score_box.classList.toggle("highlight");
    cross_score_box.classList.toggle("highlight");
  }
  CheckIsWin();
}

function initGame() {
  turn = 0;

  for (let box of boxes) {
    box.innerHTML = "";
  }

  for (let box of boxes) {
    box.addEventListener("click", placeObj, { once: true });
  }

  circle_score_box.classList.add("highlight");
  cross_score_box.classList.remove("highlight");
}

initGame();

// Restart button
const restart = document.querySelector(".restart-text");

restart.addEventListener("click", () => {
  console.log("restart");
  initGame();
});

function CheckIsWin() {
  if (
    (boxes[0].innerHTML == cross_icon &&
      boxes[1].innerHTML == cross_icon &&
      boxes[2].innerHTML == cross_icon) ||
    (boxes[0].innerHTML == circle_icon &&
      boxes[1].innerHTML == circle_icon &&
      boxes[2].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  } else if (
    (boxes[3].innerHTML == cross_icon &&
      boxes[4].innerHTML == cross_icon &&
      boxes[5].innerHTML == cross_icon) ||
    (boxes[3].innerHTML == circle_icon &&
      boxes[4].innerHTML == circle_icon &&
      boxes[5].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  } else if (
    (boxes[6].innerHTML == cross_icon &&
      boxes[7].innerHTML == cross_icon &&
      boxes[8].innerHTML == cross_icon) ||
    (boxes[6].innerHTML == circle_icon &&
      boxes[7].innerHTML == circle_icon &&
      boxes[8].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  } else if (
    (boxes[0].innerHTML == cross_icon &&
      boxes[3].innerHTML == cross_icon &&
      boxes[6].innerHTML == cross_icon) ||
    (boxes[0].innerHTML == circle_icon &&
      boxes[3].innerHTML == circle_icon &&
      boxes[6].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  } else if (
    (boxes[1].innerHTML == cross_icon &&
      boxes[4].innerHTML == cross_icon &&
      boxes[7].innerHTML == cross_icon) ||
    (boxes[1].innerHTML == circle_icon &&
      boxes[4].innerHTML == circle_icon &&
      boxes[7].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  } else if (
    (boxes[2].innerHTML == cross_icon &&
      boxes[5].innerHTML == cross_icon &&
      boxes[8].innerHTML == cross_icon) ||
    (boxes[2].innerHTML == circle_icon &&
      boxes[5].innerHTML == circle_icon &&
      boxes[8].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  } else if (
    (boxes[0].innerHTML == cross_icon &&
      boxes[4].innerHTML == cross_icon &&
      boxes[8].innerHTML == cross_icon) ||
    (boxes[0].innerHTML == circle_icon &&
      boxes[4].innerHTML == circle_icon &&
      boxes[8].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  } else if (
    (boxes[2].innerHTML == cross_icon &&
      boxes[4].innerHTML == cross_icon &&
      boxes[6].innerHTML == cross_icon) ||
    (boxes[2].innerHTML == circle_icon &&
      boxes[4].innerHTML == circle_icon &&
      boxes[6].innerHTML == circle_icon)
  ) {
    alert("win");
    initGame();
  }
  for (let box in boxes) {
    if (boxes[box].innerHTML == "") return;
  }
  alert("=.=");
  initGame();
}

if (
  box[1].innerHTML == box[2].innerHTML &&
  box[2].innerHTML == box[3].innerHTML &&
  box[1].innerHTML != ""
) {
  console.log("win");
  winner = 1;
}
