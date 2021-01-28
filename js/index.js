// Your code goes here

// hover over title changes font size and color
let h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '80px';
    event.target.style.color = 'blue';
})
h1.addEventListener('mouseout', function(event) {
  event.target.style.fontSize = '50px';
  event.target.style.color = 'grey';
})
// Press up arrow on Body to change title and style
let body = document.querySelector('body');
body.addEventListener('keydown', function(event){
    if (event.code = 'ArrowUp') {
        h1.innerHTML = 'Funky Bus';
        h1.style.fontSize = '50px';
        h1.style.border = '1px solid red';
    }
})
// Mouse wheel on body changes text to blue 
let container = document.querySelectorAll('.container.home')
body.addEventListener('wheel', function() {
    container[0].style.color = 'blue';
})
// console displays "page loaded" when page loads
window.addEventListener('load', () => {
    console.log('page loaded');
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


  // change text align and background when mouse enters element

  const firstParagraph = document.querySelector("p");
  firstParagraph.style.cursor = "pointer";
 
  firstParagraph.addEventListener("pointerover", () => {
    firstParagraph.style.textAlign = "left";
    firstParagraph.style.backgroundColor = "lightblue";
  });

// change text align and background when mouse leaves element
firstParagraph.addEventListener("pointerout", () => {
    firstParagraph.style.textAlign = "center";
    firstParagraph.style.backgroundColor = "white";
  });

// console.log when network connection is lost/established

  window.addEventListener("online", () => {
    console.log("Connected to the network");
  });

  window.addEventListener("offline", () => {
    console.log("Connection lost");
  });
