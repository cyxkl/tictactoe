let player = "O";
let totalTurns = 0;
let gameEnd = false;

function performLogic(button, tile) {
  if (gameEnd === false) {
    $(button).hide();
    $(tile).html(player);
    checkVerticalWins();
    checkHorizontalWins();
    checkCrossWins();
    checkTie();
    playerChange();
  }
}

function playerChange() {
  totalTurns = totalTurns + 1;
  if (player === "X") {
    player = "O";
  } else if (player === "O") {
    player = "X";
  }
}

function win(tileId1,tileId2,tileId3) {
if ($(tileId1).html() === player && $(tileId2).html() == player && $(tileId3).html() == player) {
    $("h1").text(player + " wins")
    gameEnd = true;
  }  
}

function checkVerticalWins() {
  win("#tile1", "#tile4", "#tile7");
  win("#tile2", "#tile5", "#tile8");
  win("#tile3", "#tile6", "#tile9");
}

function checkHorizontalWins() {
  win("#tile1", "#tile2", "#tile3");
  win("#tile4", "#tile5", "#tile6");
  win("#tile7", "#tile8", "#tile9");
}

function checkCrossWins() {
  win("#tile1", "#tile5", "#tile9");
  win("#tile7", "#tile5", "#tile3");
}

function checkTie() {
  if(totalTurns === 8 && gameEnd === false) {
    $("h1").text("tie");
    gameEnd = true;
  }
}

$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});
