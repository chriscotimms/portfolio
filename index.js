const header = document.querySelector('#header');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const odvar = document.querySelector('#odvar');
const website = document.querySelector('#website');
const pong = document.querySelector('#pong');
const moviedata = document.querySelector('#moviedata');
const memorygame = document.querySelector('#memorygame');
const freelance = document.querySelector('#freelance');
const freelance2 = document.querySelector('#freelance2');
const dev = document.querySelector('#dev');
const from = document.querySelector('#from');
const contact = document.querySelector('#contact');

function callback(entries) {
  entries.forEach((entry) => {
    const adBox = entry.target;
    const inSec = entry.intersectionRatio;
    adBox.style.opacity = inSec*10;
    console.log(adBox, inSec*10);
  })
    //about.style.opacity = (entries[0].intersectionRatio)*2;
}
var options = {
    root: null,
    threshold: [0, 0.05, 0.1]
}
var io = new IntersectionObserver(callback, options);

io.observe(header);
io.observe(about);
io.observe(odvar);
io.observe(website);
io.observe(pong);
io.observe(moviedata);
io.observe(memorygame);
io.observe(freelance);
io.observe(freelance2);
io.observe(dev);
io.observe(from);
io.observe(contact);





// Access Settings
const modal = document.querySelector('.modal');
const open_Modal = document.querySelector('.access_settings');//
const close_Modal = document.querySelector('.close-modal');

open_Modal.addEventListener('click', () => {
  modal.showModal();
})

close_Modal.addEventListener('click', () => {
  modal.close();
})


//Fonts
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);
let font_size = rootStyles.getPropertyValue('--font-size');
let font_family = rootStyles.getPropertyValue('--font-family');
let bg_col = rootStyles.getPropertyValue('--bg-col');
let text_col = rootStyles.getPropertyValue('--txt-col');
let article_col = rootStyles.getPropertyValue("--article-col");
let section_bg  = rootStyles.getPropertyValue("--section-bg");
let button_activebg = rootStyles.getPropertyValue("--button-activebg");
let button_innerbg = rootStyles.getPropertyValue("--button-innerbg");



// root.style.setProperty('--font-size', '38px' );


// root.style.setProperty('--txt-col', 'black' );
// root.style.setProperty('--bg-col', 'white' );

//BUTTONS = FontSize, FontFamily, ColourScheme
const fsb1 = document.querySelector("#fsb1");
const fsb2 = document.querySelector("#fsb2");
const fsb3 = document.querySelector("#fsb3");

const ffb1 = document.querySelector("#ffb1");
const ffb2 = document.querySelector("#ffb2");
const ffb3 = document.querySelector("#ffb3");
const ffb4 = document.querySelector("#ffb4");
const ffb5 = document.querySelector("#ffb5");
const ffb6 = document.querySelector("#ffb6");

const csb1 = document.querySelector("#csb1");
const csb2 = document.querySelector("#csb2");
const csb3 = document.querySelector("#csb3");

const btnArray = document.querySelectorAll(".asbtn");


btnArray.forEach(element => {
    element.addEventListener("click", function(e) {
      // console.log(e.target.id);
      if (e.target.id === "csb1") {
        root.style.setProperty('--txt-col', 'rgba(0,0,0,1)' );
        root.style.setProperty('--bg-col', 'rgba(233, 233, 233, 1)' );
        root.style.setProperty('--article-col', 'rgb(129, 255, 196)' );
        root.style.setProperty('--section-bg', 'rgb(252, 86, 255)' );
        root.style.setProperty('--button-activebg', 'rgb(246, 0, 250)' );
        root.style.setProperty('--button-innerbg', 'rgba(207, 189, 219, 0.747)' );

      } else if (e.target.id === "csb2") {
        root.style.setProperty('--txt-col', 'rgba(185, 185, 185, 1)' );
        root.style.setProperty('--bg-col', 'rgba(50,50,50,1)' );
        root.style.setProperty('--article-col', 'rgb(129, 255, 196)' );
        root.style.setProperty('--section-bg', 'rgb(252, 86, 255)' );
        root.style.setProperty('--button-activebg', 'rgb(246, 0, 250)' );
        root.style.setProperty('--button-innerbg', 'rgba(207, 189, 219, 0.747)' );

      } else if (e.target.id === "csb3") {
        root.style.setProperty('--txt-col', 'white' );
        root.style.setProperty('--bg-col', 'black' );

      } 
      else if (e.target.id === "ffb1") {
        root.style.setProperty('--font-family', 'Hanken Grotesk');
      } else if (e.target.id === "ffb2") {
        root.style.setProperty('--font-family', 'Castoro');
      } else if (e.target.id === "ffb3") {
        root.style.setProperty('--font-family', 'Carter One');
      } else if (e.target.id === "ffb4") {
        root.style.setProperty('--font-family', 'Gentium Book Plus');
      } else if (e.target.id === "ffb5") {
        root.style.setProperty('--font-family', 'Yatra One');
      } else if (e.target.id === "ffb6") {
        root.style.setProperty('--font-family', 'Roboto Slab');
      } else if (e.target.id === "fsb1") {
        root.style.setProperty('--font-size', '24px');
      } else if (e.target.id === "fsb2") {
        root.style.setProperty('--font-size', '30px');
      } else if (e.target.id === "fsb3") {
        root.style.setProperty('--font-size', '38px');
      }
    });
});



//cursor follow

// let circle = document.getElementById('circle');
// const onMouseMove = (e) =>{
//   circle.style.left = e.pageX + 'px';
//   circle.style.top = e.pageY + 'px';
// }
// document.addEventListener('mousemove', onMouseMove);