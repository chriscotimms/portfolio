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


