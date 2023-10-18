const header = document.querySelector('#header');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const dev = document.querySelector('#dev');
const from = document.querySelector('#from');
const contact = document.querySelector('#contact');

function callback(entries) {
  entries.forEach((entry) => {
    const adBox = entry.target;
    const inSec = entry.intersectionRatio;
    adBox.style.opacity = inSec*2.6666;
    console.log(adBox, adBox.id, inSec);
  })
    //about.style.opacity = (entries[0].intersectionRatio)*2;
}
var options = {
    root: null,
    threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75]
}
var io = new IntersectionObserver(callback, options);

io.observe(header);
io.observe(about);
io.observe(work);
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
let text_col = rootStyles.getPropertyValue('--txt-col');
let bg_col = rootStyles.getPropertyValue('--bg-col');
let font_size = rootStyles.getPropertyValue('--font-size');
let font_family = rootStyles.getPropertyValue('--font-family');
console.log('text colour: ', text_col);


root.style.setProperty('--font-size', '48px' );
root.style.setProperty('--font-family', 'Georgia' );

root.style.setProperty('--txt-col', 'black' );
// root.style.setProperty('--bg-col', 'white' );

//BUTTONS = FontSize, FontFamily, ColourScheme
const fsb1 = document.querySelector("#fsb1");
const fsb2 = document.querySelector("#fsb2");
const fsb3 = document.querySelector("#fsb3");

const ffb1 = document.querySelector("#ffb1");
const ffb2 = document.querySelector("#ffb2");
const ffb3 = document.querySelector("#ffb3");

const csb1 = document.querySelector("#csb1");
const csb2 = document.querySelector("#csb2");
const csb3 = document.querySelector("#csb3");

const btnArray = document.querySelectorAll(".asbtn");


btnArray.forEach(element => {
    element.addEventListener("click", function(e) {
      // console.log(e.target.id);
      if (e.target.id === "csb1") {
        console.log(e.target.id + "= csb1");
      } else if (e.target.id === "csb2") {
        console.log(e.target.id + "= csb2");
      } else if (e.target.id === "csb3") {
        console.log(e.target.id + "= csb3");
      }
    });
});

// csb1.addEventListener("click", function(e) {
//   console.log(e.target);
// });