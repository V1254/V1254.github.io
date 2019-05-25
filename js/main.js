// TO change color of navbar when page is scrolled
var navBar = document.getElementById("myNav");
window.addEventListener("scroll", function(event) {
  event.preventDefault;
  if (window.scrollY >= 190) {
    console.log("Scrolled weee");
    navBar.classList.add("colored-nav");
    navBar.classList.remove("transparent-nav");
  } else {
    navBar.classList.add("transparent-nav");
    navBar.classList.remove("colored-nav");
  }
});
