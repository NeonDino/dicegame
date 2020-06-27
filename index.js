var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random()*6) + 1
var randomImage2 = "dice" + randomNumber2 + ".png";
document.querySelector("img").setAttribute("src" , "images/" + randomImage1);
document.querySelector(".img2").setAttribute("src" , "images/" + randomImage2);
if (randomNumber1 > randomNumber2)
  {
  document.querySelector("h1").innerText = "Player 1 Wins";
  }
else if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerText = "Its a draw";
  }
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 Wins";
}
