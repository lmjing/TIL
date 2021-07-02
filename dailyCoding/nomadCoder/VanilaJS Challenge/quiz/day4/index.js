// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const element = document.querySelector("h2");

const superEventHandler = {
    mouseenter: function() {
        element.style.color = colors[0];
        element.innerText = "The mouse is here!";
    },
    mouseleave: function() {
        element.style.color = colors[1];
        element.innerText = "The mouse is gone!";
    },
    resize: function() {
        element.style.color = colors[2];
        element.innerText = "You just Resized!";
    },
    contextmenu: function() {
        element.style.color = colors[3];
        element.innerText = "That was a right click!";
    }
};

element.addEventListener("mouseenter", superEventHandler.mouseenter);
element.addEventListener("mouseleave", superEventHandler.mouseleave);
element.addEventListener("contextmenu", superEventHandler.contextmenu);
window.addEventListener("resize", superEventHandler.resize);