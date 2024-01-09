function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-theme");
};


const switchEl = document.querySelector(".modeSwitcher");

switchEl.addEventListener("click", ()=> {
    switchEl.setAttribute("src", "./Pictures/mode-switcher-on.svg");
});
