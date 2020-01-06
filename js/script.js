$(".second-tile").hide();
$(".end").hide();
var counter = 0;
var draw = 0;
var array = [0,0,0,0,0,0,0,0,0,0];

function reveal() {
  $(".tile").hide();
  $(".second-tile").show();
  $(".second-tile").css("background-color", "#474747");
  $(".container").css("border", "groove 30px");
  $(".container").css('border-color', "rgb(60,60,60)")
}

function performLogic(whatTile, whatReplacement, indexNum, indexNumTwo, indexNumThree, indexNumFour) {
  draw += 1;
  counter += 1;
  $(whatTile).hide();
  if (counter % 2 === 0) {
    $(whatReplacement).html("X");
    array[indexNum] += 1;
    array[indexNumTwo] += 1;
    array[indexNumThree] += 1;
    array[indexNumFour] += 1;
  } else {
    $(whatReplacement).html("O");
    array[indexNum] += 4;
    array[indexNumTwo] += 4;
    array[indexNumThree] += 4;
    array[indexNumFour] += 4;
  }
  array[8] = 0;
  array[9] = 0;
  $(whatReplacement).css("background-color", "#474747");
  $(whatReplacement).show();
  array.forEach(function(element) {
    if (element === 3) {
      $(".Xwin").show();
      reveal();
    } else if (element === 12) {
      $(".Owin").show();
      reveal();
    }
  });
  if (draw === 9) {
    $(".None").show();
    reveal();
  }
  
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let fontArray = ["'Girassol', cursive", "'Roboto Mono', monospace", "'Permanent Marker', cursive", "'Special Elite', cursive", "'Bangers', cursive", "'Press Start 2P', cursive", "'Sigmar One', cursive", "'Marck Script', cursive", "'Nothing You Could Do', cursive"];
let colorsArray = ["deeppink", "orange", "magenta", "lightyellow", "lime", "aqua", "blue", "crimson", "gold"];

shuffle(fontArray);
shuffle(colorsArray);

function fontChange(whatTile, indexNum) {
  $(whatTile).css("font-family", fontArray[indexNum]);
  $(whatTile).css("color", colorsArray[indexNum]);
}

$("#tile1").click(function() {
    performLogic("#tile1", "#tile1-2", 0, 3, 6, 8);
    fontChange("#tile1-2", 0);
});

$("#tile2").click(function() {
    performLogic("#tile2", "#tile2-2", 0, 4, 8, 9);
    fontChange("#tile2-2", 1);
});

$("#tile3").click(function() {
    performLogic("#tile3", "#tile3-2", 0, 5, 7, 8);
    fontChange("#tile3-2", 2);
});

$("#tile4").click(function() {
    performLogic("#tile4", "#tile4-2", 1, 3, 8, 9);
    fontChange("#tile4-2", 3);
});

$("#tile5").click(function() {
    performLogic("#tile5", "#tile5-2", 1, 4, 6, 7);
    fontChange("#tile5-2", 4);
});

$("#tile6").click(function() {
    performLogic("#tile6", "#tile6-2", 1, 5, 8, 9);
    fontChange("#tile6-2", 5);
    console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]);
  console.log(array[4]);
  console.log(array[5]);
  console.log(array[6]);
  console.log(array[7]);
  console.log(array[8]);
  console.log(array[9]);
  console.log("hi");
});

$("#tile7").click(function() {
    performLogic("#tile7", "#tile7-2", 2, 3, 7, 8);
    fontChange("#tile7-2", 6);
});

$("#tile8").click(function() {
    performLogic("#tile8", "#tile8-2", 2, 4, 8, 9);
    fontChange("#tile8-2", 7);
});

$("#tile9").click(function() {
    performLogic("#tile9", "#tile9-2", 2, 5, 6, 8);
    fontChange("#tile9-2", 8);
});
