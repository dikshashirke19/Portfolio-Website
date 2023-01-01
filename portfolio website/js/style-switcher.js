/* ==================toggle style switcher ======================*/
const styleSwitchToggle = document.querySelector(".style-switcher-toggler") ;
styleSwitchToggle.addEventListener("click", () => 
{
    document.querySelector(".style-switcher").classList.toggle("open");
})