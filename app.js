function myFunction() {
    let element = document.body;
    let divEl = document.div;
    element.classList.toggle("dark-theme");
    divEl.classList.toggle("dark-mode");
};


const switchEl = document.querySelector(".modeSwitcher");

switchEl.addEventListener("click", ()=> {
    switchEl.setAttribute("src", "./Pictures/mode-switcher-on.svg");
});



// const theme = document.getElementById("toggleBtn");

// theme.onclickn = function() {
//     document.body.classList.toggle("dark-theme");
// };