var words = [
  "I'm John Albert Ladera",
  "I'm a Student in CVSU",
  "I'm a BSIT Student",
  "I'm a Sophomore"
];

var index = 0;
var typewriterText = "Initial text to be replaced";
var charIndex = 0;
var wordToChangeElement = document.getElementById("wordToChange");

function typeWriterEffect() {
  if (charIndex < typewriterText.length) {
    wordToChangeElement.textContent += typewriterText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriterEffect, 150);
  }
}

function changeWord() {
  charIndex = 0;
  wordToChangeElement.textContent = "";
  typewriterText = words[index];
  index = (index + 1) % words.length;
  typeWriterEffect();
}

setInterval(changeWord, 5000);



function changeBackground() {
  const homeElement = document.getElementById('home');
  
  setTimeout(() => {
    homeElement.style.backgroundImage = "url('assets/images/bg2.jpg')";
  }, 14000); 
  setTimeout(() => {
    homeElement.style.backgroundImage = "url('assets/images/bg3.jpg')";
  }, 28000); 
  setTimeout(() => {
    homeElement.style.backgroundImage = "url('assets/images/bg1.jpg')";
    changeBackground(); 
  }, 52000);
}

changeBackground();


