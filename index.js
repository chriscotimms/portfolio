////////////////////KEYS

// variable for currently focused element
let focusNow = null;

document.addEventListener('focusin', function() {
if (focusNow !== null) {
    //detransition from old focus

    console.log("old"+focusNow.id);
}
  focusNow = document.activeElement;
  // console log focus elements
  console.log(focusNow.id);
  //transition into new element to focus
}, true);

document.addEventListener('mouseenter', function(event) {
    if (focusNow !== null) {
        //detransition from old focus
        console.log("old"+focusNow.id);
    }
    focusNow = event.target;
    // console log focus elements
    console.log(focusNow.id);
  }, true);

// Enter key to activate focused element like mouseclick
window.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    focusNow.click();
  }
});

window.addEventListener("click", function(event) {
    console.log("click", event.target);
  });


//Esc Key to exit menus
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    // sidebar2.classList.remove('side_bigger');
    // sidebar1.classList.remove('side_bigger');
    // main.classList.remove('main_smaller');
    // setTimeout(displayAdd, 500, sidebar1);
    // setTimeout(displayAdd, 500, sidebar2);
  }
});