class counter{
  counter(value){
    this.val = value;
  }
}

var clouler = 0;
let counterRowOne = new counter(0);
let counterRowTwo = new counter(0);
let counterRowThree = new counter(0);
let counterColumnOne = new counter(0);
let counterColumnTwo = new counter(0);
let counterColumnThree = new counter(0);
let counterDiagonalOne = new counter(0);
let counterDiagonalTwo = new counter(0);
let counterDud = new counter(0);

function performLogic(whatButton, whatTile, whatCounter, whatCounterTwo, whatCounterThree, whatCounterFour) {
  clouler = clouler + 1;
  $(whatButton).hide();
  if(clouler % 2 === 0) {
    $(whatTile).html("X");
    whatCounter.val = whatCounter.val + 1;
    whatCounterTwo.val = whatCounterTwo.val + 1;
    whatCounterThree.val = whatCounterThree.val + 1;
    whatCounterFour.val = whatCounterFour.val + 1;

  } else {
    $(whatTile).html("O");
    whatCounter.val = whatCounter.val + 4;
    whatCounterTwo.val = whatCounterTwo.val + 4;
    whatCounterThree.val = whatCounterThree.val + 4;
    whatCounterFour.val = whatCounterFour.val + 4;
  }
  
}

// function ifAlot() {
  //if(counterColumnOne === 3 || counterColumnTwo === 3 || counterColumnThree === 3 || counterRowOne === 3 || counterRowTwo === 3 || counterRowThree === 3 || counterDiagonalOne === 3 || counterDiagonalTwo === 3) {
 //   $("h3").text("X is the winner of your face!")
  //} else if (counterColumnOne === 12 || counterColumnTwo === 12 || counterColumnThree === 12 || counterRowOne === 12 || counterRowTwo === 12 || counterRowThree === 12 || counterDiagonalOne === 12 || counterDiagonalTwo === 12) {
  //  $("h3").text("O is the winner of your face!")
 // } else if
//}


$("#button1").click(function() {
    performLogic("#button1","#tile1", counterRowOne, counterColumnOne,counterDiagonalOne,counterDud);
    console.log(counterDud);
    
});

$("#button2").click(function() {
    performLogic("#button2","#tile2", counterRowOne, counterColumnTwo, counterDud, counterDud);
});

$("#button3").click(function() {
    performLogic("#button3","#tile3", counterRowOne, counterColumnThree,counterDiagonalTwo, counterDud);
});

$("#button4").click(function() {
    performLogic("#button4","#tile4", counterRowTwo, counterColumnOne,counterDud, counterDud);
});

$("#button5").click(function() {
    performLogic("#button5","#tile5", counterRowTwo, counterColumnTwo,counterDiagonalOne, counterDiagonalTwo);
});

$("#button6").click(function() {
    performLogic("#button6","#tile6", counterRowTwo, counterColumnThree, counterDud, counterDud);
});

$("#button7").click(function() {
    performLogic("#button7","#tile7", counterRowThree, counterColumnOne, counterDiagonalTwo, counterDud);
});

$("#button8").click(function() {
    performLogic("#button8","#tile8", counterRowThree, counterColumnTwo, counterDud,counterDud);
});

$("#button9").click(function() {
    performLogic("#button9","#tile9", counterRowThree, counterColumnThree, counterDud, counterDud);
    console.log(counterDud);
});

