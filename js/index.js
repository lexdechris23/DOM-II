// Your code goes here

// click title to change color to blue
let h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function(event) {
    event.target.style.color = 'blue';
})
// Press B on Body to change title
let body = document.querySelector('body');
body.addEventListener('keydown', function(event){
    if (event.keyCode == 66) {
        h1.innerHTML = 'Funky Bus';
    }
})
// Mouse wheel on body to turn change color to cornsilk 
let container = document.querySelectorAll('.container.home')
body.addEventListener('wheel', function() {
    container[0].style.background = 'cornsilk';
})
// "ready to rock" in console when page loads
window.addEventListener('load', () => {
    console.log('ready to rock');
})
// when window is resized the area of the window is calculated
window.addEventListener('resize', () => {
    console.log(window.innerWidth + window.innerHeight)
})
// console.log scroll count
window.addEventListener("scroll", () => {
    console.log('scroll count')
})


// log keys
document.addEventListener("keydown", (key) => {
    console.log("You pressed: ", key.key);
  });


  // center text on first paragraph when clicked

  const firstParagraph = document.querySelector("p");
  firstParagraph.style.cursor = "pointer";
 
  firstParagraph.addEventListener("pointerover", () => {
    firstParagraph.style.textAlign = "center";
  });

// align text left when paragraph is unclicked
firstParagraph.addEventListener("pointerout", () => {
    firstParagraph.style.textAlign = "left";
  });

// console.log when network connection is lost/established

  window.addEventListener("online", () => {
    console.log("Connected to the network");
  });

  window.addEventListener("offline", () => {
    console.log("Connection lost");
  });
