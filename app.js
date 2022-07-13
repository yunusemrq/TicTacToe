const blocks = document.querySelectorAll(".block");
const playerText = document.querySelector(".player");
const errorText = document.querySelector("#error");
let player = "X";
startGame();

function startGame() {
  playerText.textContent = `${player}'s Turn`;
  blocks.forEach((block) =>
    block.addEventListener("click", () => chooseArea(block))
  );
}
function chooseArea(block) {
  if (block.textContent == "") {
    block.textContent = player;
    turnPlayer();
  } else {
    block.style.border = "2px solid red";
    setTimeout(() => {
      block.style.border = "2px solid black";
    }, 1000);
  }
  checkWin();
}

function turnPlayer() {
  if (player === "X") {
    player = "O";
    playerText.textContent = `${player}'s Turn `;
    return;
  } else if (player === "O") {
    player = "X";
    playerText.textContent = `${player}'s Turn `;
  }
}

function checkWin() {
  checkDiagnals();
  checkRows();
  checkColumns();

  console.log(`${player} Won`);
}
function disableClicked() {
  playerText.style.color = "green";
  blocks.forEach((block) => (block.style.pointerEvents = "none"));
}

function checkRows() {
  row1 =
    blocks[0].textContent == blocks[1].textContent &&
    blocks[0].textContent == blocks[2].textContent;
  row2 =
    blocks[3].textContent == blocks[4].textContent &&
    blocks[3].textContent == blocks[5].textContent;
  row3 =
    blocks[6].textContent == blocks[7].textContent &&
    blocks[6].textContent == blocks[8].textContent;

  if (
    blocks[0].textContent !== "" ||
    blocks[1].textContent !== "" ||
    blocks[2].textContent !== ""
  ) {
    if (row1) {
      playerText.textContent = `${blocks[1].textContent} Won`;
      disableClicked();
    }
  }
  if (
    blocks[3].textContent !== "" ||
    blocks[4].textContent !== "" ||
    blocks[5].textContent !== ""
  ) {
    if (row2) {
      playerText.textContent = `${blocks[4].textContent} Won`;
      disableClicked();
    }
  }
  if (
    blocks[6].textContent !== "" ||
    blocks[7].textContent !== "" ||
    blocks[8].textContent !== ""
  ) {
    if (row3) {
      playerText.textContent = `${blocks[7].textContent} Won`;
      disableClicked();
    }
  }
}

function checkColumns() {
  column1 =
    blocks[0].textContent == blocks[3].textContent &&
    blocks[0].textContent == blocks[6].textContent;
  column2 =
    blocks[1].textContent == blocks[4].textContent &&
    blocks[1].textContent == blocks[7].textContent;
  column3 =
    blocks[2].textContent == blocks[5].textContent &&
    blocks[2].textContent == blocks[8].textContent;

  if (
    blocks[0].textContent !== "" ||
    blocks[3].textContent !== "" ||
    blocks[6].textContent !== ""
  ) {
    if (column1) {
      playerText.textContent = `${blocks[3].textContent} Won`;
      disableClicked();
    }
  }
  if (
    blocks[1].textContent !== "" ||
    blocks[4].textContent !== "" ||
    blocks[7].textContent !== ""
  ) {
    if (column2) {
      playerText.textContent = `${blocks[4].textContent} Won`;
      disableClicked();
    }
  }
  if (
    blocks[2].textContent !== "" ||
    blocks[5].textContent !== "" ||
    blocks[8].textContent !== ""
  ) {
    if (column3) {
      playerText.textContent = `${blocks[5].textContent} Won`;
      disableClicked();
    }
  }
}

function checkDiagnals() {
  diag1 =
    blocks[0].textContent == blocks[4].textContent &&
    blocks[0].textContent == blocks[8].textContent;
  diag2 =
    blocks[2].textContent == blocks[4].textContent &&
    blocks[2].textContent == blocks[6].textContent;

  if (blocks[4].textContent !== "") {
    if (diag1) {
      playerText.textContent = `${blocks[4].textContent} Won`;
      disableClicked();
    }
    if (diag2) {
      playerText.textContent = `${blocks[4].textContent} Won`;
      disableClicked();
    }
  }
  console.log(diag2);
}
