var naam = prompt("Enter your name");
var audio = new Audio("music.mp3");
document.body.addEventListener("mousemove", function () {
  audio.play();
});
document.querySelector(".name-container h1").textContent = "Hello, " + naam;
var chances = 3;
document.querySelector(".chances p").textContent = "Chance Left :" + chances;
function start() {
  var value = document.querySelector("input").value;
  document.querySelector(".btn-start").style.display = "none";
  setTimeout(function () {
    document.querySelector(".ring").style.display = "block";
  });
  setTimeout(function () {
    document.querySelector(".ring").style.display = "none";
    var random = Math.floor(Math.random() * 10) + 1;
    chances--;
    document.querySelector(".chances p").textContent =
      "Chance Left :" + chances;

    document.querySelector(".random").style.display = "flex";
    document.querySelector(".random h1").textContent = random;
    console.log(random, value);
    if (value == random) {
      document.querySelector(".name-container h1").textContent =
        "Congratulations " + naam;
      document.querySelector(".chances p").textContent = "Chance Left :" + 0;
      document.querySelector(".reset").textContent = "Reset Game";
      document.querySelector(".reset").addEventListener("click", function () {
        window.location.reload();
      });
    } else if (random == value + 1 || random == value - 1) {
      if (chances == 0) {
        document.querySelector(".name-container h1").textContent =
          "Sorry Better Luck Next Time !!";
        document.querySelector(".reset").textContent = "Reset Game";
        document.querySelector(".reset").addEventListener("click", function () {
          window.location.reload();
        });
      } else {
        document.querySelector(".name-container h1").textContent =
          "So Close !!";
      }
    } else {
      if (chances == 0) {
        document.querySelector(".name-container h1").textContent =
          "Sorry Better Luck Next Time !!";
        document.querySelector(".reset").textContent = "Reset Game";
        document.querySelector(".reset").addEventListener("click", function () {
          window.location.reload();
        });
      } else {
        document.querySelector(".name-container h1").textContent =
          "Oops try again !!";
      }
    }
  }, 3000);
}

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".random").style.display = "none";
  start();

 
});
