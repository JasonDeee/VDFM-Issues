const Button = document.querySelector(".return_button");
console.log("loaded");

var lastScrollTop = 0;

window.addEventListener("scroll", (e) => {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // downscroll code
    Button.style.top = `calc(-6vw - 50px)`;
    console.log("up");
  } else {
    // upscroll code
    Button.style = ``;
    console.log("dw");
  }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
