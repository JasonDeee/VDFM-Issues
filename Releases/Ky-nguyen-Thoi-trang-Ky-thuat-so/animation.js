//
//
// Hi There, Have a good day

// Grab All the Elements - DOM Elements
const body = document.body;
const main = document.getElementById("main_scroll");
const return_button = document.querySelector(".return_button");

// Section 1
const main_pic = document.querySelector(".main_pic"); // Secondary Title - i Guessssss :)
// const main_picH1 = document.querySelector(".main_pic h1"); // Secondary Title - i Guessssss :)

const title = document.querySelector("#title");

const side_pic = document.querySelectorAll(".side_pic");
const side_picH2 = document.querySelectorAll(".side_pic h2");

const side_picCircle = document.querySelectorAll(".side_pic #circle");

// Section 2
const sec2 = document.querySelector("#sec2");
const sec2_5 = document.querySelector("#sec2_5");
const main_block = document.querySelector("#sec2 .main_block");

const BottomBlockL = document.querySelector("#sec2 .BottomBlock .leftBlock");
const BottomBlockR = document.querySelector("#sec2 .BottomBlock .question");

// Section 2_5
const sec2_5_Content = document.querySelector("#sec2_5 h2");

// Section 3

const sec3 = document.querySelector("#sec3");
const sec3LeftSide = document.querySelector("#sec3 #left_col");
const TitleContent_L = document.querySelector("#sec3 #left_col .contents");
const TitleContent_R = document.querySelector("#sec3 .Sec3_Title");

const Anh4_Layout = document.querySelector("#sec3 .Anh4_Layout");
const layer3 = document.querySelector("#sec3 .Anh4_Layout .layer3");
const layer2 = document.querySelector("#sec3 .Anh4_Layout .layer2");
const layer1 = document.querySelector("#sec3 .Anh4_Layout .layer1");
const group1 = document.querySelector("#sec3 .Anh4_Layout .group1");
layer3.style.transform = `translateY(${-window.innerHeight / 10}px)`;

// Sec 4
const sec4 = document.querySelector("#sec4");
const sec4LeftSide = document.querySelector("#sec4 #left_col");
const BlurImage = document.querySelector("#sec4 #Blured");
const OriginImage = document.querySelector("#sec4 #Origin");
const Sec4TitleR = document.querySelector("#sec4 .Sec4_title");
const Sec4TitleL = document.querySelector("#sec4 .Main_Title");
const AltCursor = document.querySelector(".Free_Circle_Cursor");

function TitleAnimateSec4() {
  var Sec4Time = setTimeout(() => {
    // Trigger On 75% Windows Height
    if (
      Sec4TitleR.getBoundingClientRect().top +
        Sec4TitleR.getBoundingClientRect().height <
      0
    ) {
      BlurImage.style.filter = `blur(1vw) saturate(0)  brightness(60%)`;
      Sec4TitleL.classList.add("Main_Title_Active");
    } else {
      BlurImage.style = ``;
      Sec4TitleL.classList.remove("Main_Title_Active");
    }

    clearTimeout(Sec4Time);
  }, 700);
}

sec4LeftSide.addEventListener("mouseenter", sec4MouseEnter);
function sec4MouseEnter() {
  AltCursor.style.opacity = `1`;
  OriginImage.style.transition = `all 0.8s cubic-bezier(0.25, 0, 0, 1), clip-path 0s linear`;
  OriginImage.style.opacity = `1`;
}
sec4LeftSide.addEventListener("mouseleave", sec4MouseLeave);
function sec4MouseLeave() {
  AltCursor.style.opacity = `0`;
  OriginImage.style = ``;
}
sec4LeftSide.addEventListener("mousemove", sec4MouseMove);
function sec4MouseMove(e) {
  // Origin Image
  OriginImage.style.clipPath = `circle(10vw at ${e.pageX}px ${
    e.pageY - window.scrollY - sec4LeftSide.getBoundingClientRect().top
  }px)`;

  // Cursor
  AltCursor.style.left = `${
    e.pageX - AltCursor.getBoundingClientRect().width / 2
  }px`;
  AltCursor.style.top = `${
    e.pageY - AltCursor.getBoundingClientRect().height / 2 - window.scrollY
  }px`;
}
//

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions And Force (Percentage 70% Recommended)
  dy = sy,
  Force = 80;

// Onpage Load And Refresh Events

body.style.height = main.clientHeight + "px";

ResetPage();

window.addEventListener("beforeunload", (e) => {
  ResetPage();
});

function ResetPage() {
  window.scrollTo(0, 0);

  body.scrollTo(0, 0);
  main.style = ``;
}

// Title OnAnimate Out - Section 1
const titleArray = title.innerText.split("");
title.innerHTML = ``;

for (let index = 0; index < titleArray.length; index++) {
  if (titleArray[index] == " ") {
    titleArray[index] = "&nbsp;";
  }
  title.innerHTML += `<span class="pending" style="transition: all 0.8s ${
    index * 0.025
  }s cubic-bezier(0.25, 0, 0, 1);">${titleArray[index]}</span>`;

  if (index == titleArray.length - 1) {
    break;
  }
}

const TitleSpan = document.querySelectorAll("#title span");
const Titleline = document.querySelector(".header_contents .line");

function TitleAnimate() {
  var TitleAnimateWait = setTimeout(() => {
    if (
      title.getBoundingClientRect().top +
        title.getBoundingClientRect().height * 1.2 -
        window.innerHeight <
      0
    ) {
      Titleline.style = ``;
      Titleline.style.width = `90px`;
      TitleSpan.forEach((Element) => {
        Element.classList.remove("pending");
        // Element.style -= `transition:none`;
      });
    } else if (
      title.getBoundingClientRect().top -
        title.getBoundingClientRect().height * 0.05 -
        window.innerHeight >
      0
    ) {
      Titleline.style.transition = `none`;
      Titleline.style.width = `0`;
      TitleSpan.forEach((Element) => {
        Element.classList.add("pending");
        // Element.style += `transition:none`;
      });
    }
    clearTimeout(TitleAnimateWait);
  }, 700);
}

//

// Title OnAnimate Out - Section 2_5
const Sec2titleArray = sec2_5_Content.innerText.split("");
sec2_5_Content.innerHTML = ``;

for (let index = 0; index < Sec2titleArray.length; index++) {
  if (Sec2titleArray[index] == " ") {
    Sec2titleArray[index] = "&nbsp;";
  }
  sec2_5_Content.innerHTML += `<span class="sec2_pending" style="transition: all 0.8s ${
    index * 0.025
  }s cubic-bezier(0.25, 0, 0, 1);">${Sec2titleArray[index]}</span>`;

  if (index == Sec2titleArray.length - 1) {
    break;
  }
}

const Sec2TitleSpan = document.querySelectorAll("#sec2_5 h2 span");

function Sec2TitleAnimate() {
  var TitleAnimateWait2 = setTimeout(() => {
    if (
      sec2_5_Content.getBoundingClientRect().top +
        sec2_5_Content.getBoundingClientRect().height * 2.2 -
        window.innerHeight <
      0
    ) {
      Sec2TitleSpan.forEach((Element) => {
        Element.classList.remove("sec2_pending");
        // Element.style -= `transition:none`;
      });
    } else if (
      sec2_5_Content.getBoundingClientRect().top -
        sec2_5_Content.getBoundingClientRect().height * 0.05 -
        window.innerHeight >
      0
    ) {
      Sec2TitleSpan.forEach((Element) => {
        Element.classList.add("sec2_pending");
        // Element.style += `transition:none`;
      });
    }
    clearTimeout(TitleAnimateWait2);
  }, 700);
}

window.addEventListener("resize", (e) => {
  var resizetime = setTimeout(() => {
    let bodyHeight = main.getBoundingClientRect().height;
    body.style.height = `${bodyHeight}px`;
    easeScroll();

    clearTimeout(resizetime);
  }, 1200);
});

//// SceneTitle Animate In - Sec 2

function SceneAnimate() {
  var Sec2Time = setTimeout(() => {
    // Trigger On 75% Windows Height
    if (
      main_block.getBoundingClientRect().top - window.innerHeight * 0.65 <
      0
    ) {
      main_block.style.transform = `skewY(-15deg)`;

      BottomBlockL.style.transform = `none`;
      BottomBlockR.style.transform = `none`;
    } else {
      main_block.style = ``;

      BottomBlockL.style = ``;
      BottomBlockR.style = ``;
    }

    clearTimeout(Sec2Time);
  }, 700);
}
//

// Title Animation In sec3

function TitleAnimateSec3() {
  var Sec3Time = setTimeout(() => {
    // Trigger On 75% Windows Height
    if (
      TitleContent_R.getBoundingClientRect().top +
        TitleContent_R.getBoundingClientRect().height <
      0
    ) {
      TitleContent_L.style.opacity = `1`;
    } else {
      TitleContent_L.style = ``;
    }

    clearTimeout(Sec3Time);
  }, 700);
}
//

// Title Animation In sec4

// Momentum Scrolling

// Scroll Functions
window.addEventListener("scroll", (e) => {
  easeScroll(); // Momentium
  ReturnButton(); // Return Button OnPopUp

  TitleAnimate(); // Title Animate In - Sec 1

  SceneAnimate(); // SceneTitle Animate In - Sec 2

  Sec2TitleAnimate(); // Title Animate Sec2_5

  TitleAnimateSec3(); // Title Animation In sec3

  TitleAnimateSec4(); // Title Animation In sec4
});

var lastScrollTop = 0;
function ReturnButton() {
  if (window.scrollY === 0) {
    return_button.style.boxShadow = `0 0 1vw #00000000`;
  } else if (window.scrollY > 0) {
    return_button.style.boxShadow = `0 0 1vw #00000080`;
  }
  // Check the Scroll Directions
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // downscroll code
    return_button.style.top = `-5vw`;
  } else {
    // upscroll code
    return_button.style.top = `2vw`;
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

function easeScroll() {
  // sx = window.pageXOffset;
  sy = window.pageYOffset;
  // console.log(sy);
}

window.requestAnimationFrame(render);

function render() {
  //We calculate our container position by linear interpolation method
  // dx = li(dx, sx, Force / 1000);
  dy = li(dy, sy, Force / 1000);

  // dx = Math.floor(dx * 100) / 100;
  dy = Math.round(dy * 100) / 100;

  // if (Math.abs(sy - dy) < 0.1) {
  //   dy = sy;
  // }

  main.style.transform = `translateY(-${dy}px)`; // Main Momentium Scroll
  //

  //
  // // // Header Scroll Events
  if (
    side_pic[0].getBoundingClientRect().top +
      side_pic[0].getBoundingClientRect().height >
    0
  ) {
    // Main/Center Picture
    main_pic.style.backgroundPositionY = `${
      -10 + (150 * dy) / side_pic[0].getBoundingClientRect().height
    }%`;
    // main_picH1.style.transform = `translateY(${dy / 50}px)`;

    //
    // Side Picture
    side_picCircle[0].style.marginBottom = `${dy / 6}px`;
    side_picCircle[1].style.marginBottom = `${dy / 6}px`;

    side_pic[0].style.backgroundPositionY = `${
      -10 + (120 * dy) / side_pic[0].getBoundingClientRect().height
    }%`;
    side_pic[1].style.backgroundPositionY = `${
      -10 + (120 * dy) / side_pic[0].getBoundingClientRect().height
    }%`;
    side_picH2[0].style.letterSpacing = `${
      4 + (10 * dy) / side_pic[0].getBoundingClientRect().height
    }px`;
    side_picH2[1].style.letterSpacing = `${
      4 + (10 * dy) / side_pic[0].getBoundingClientRect().height
    }px`;
  }

  //sec 2
  if (
    sec2_5.getBoundingClientRect().top - window.innerHeight <= 0 &&
    sec2_5.getBoundingClientRect().top >= 0
  ) {
    sec2.style.transition = `none`;
    sec2.style.transform = `translateY(${
      (-sec2_5.getBoundingClientRect().top + window.innerHeight) / 2
    }px)`;
  } else if (sec2_5.getBoundingClientRect().top - window.innerHeight > 0) {
    sec2.style = ``;
  }

  // sec 3
  if (
    sec3.getBoundingClientRect().top <= 0 &&
    sec3.getBoundingClientRect().top +
      sec3.getBoundingClientRect().height -
      window.innerHeight >
      0
  ) {
    sec3LeftSide.style.transition = `none`;
    sec3LeftSide.style.transform = `translateY(${-sec3.getBoundingClientRect()
      .top}px)`;
  } else if (sec3.getBoundingClientRect().top > 0) {
    sec3LeftSide.style = ``;
  } else if (
    sec3.getBoundingClientRect().top +
      sec3.getBoundingClientRect().height -
      window.innerHeight <
    0
  ) {
    sec3LeftSide.style.transform = `translateY(${
      sec3.getBoundingClientRect().height - window.innerHeight
    }px)`;
  }

  // sec 4
  if (
    sec4.getBoundingClientRect().top <= 0 &&
    sec4.getBoundingClientRect().top +
      sec4.getBoundingClientRect().height -
      window.innerHeight >
      0
  ) {
    sec4LeftSide.style.transition = `none`;
    sec4LeftSide.style.transform = `translateY(${-sec4.getBoundingClientRect()
      .top}px)`;
  } else if (sec4.getBoundingClientRect().top > 0) {
    sec4LeftSide.style = ``;
  } else if (
    sec4.getBoundingClientRect().top +
      sec4.getBoundingClientRect().height -
      window.innerHeight <
    0
  ) {
    sec4LeftSide.style.transform = `translateY(${
      sec4.getBoundingClientRect().height - window.innerHeight
    }px)`;
  }

  // Sec3 Countỏur 2020
  if (
    Anh4_Layout.getBoundingClientRect().top <= window.innerHeight &&
    Anh4_Layout.getBoundingClientRect().top +
      Anh4_Layout.getBoundingClientRect().height >=
      0
  ) {
    group1.style.transform = `translateY(${
      Anh4_Layout.getBoundingClientRect().top / 5
    }px)`;
    layer1.style.transform = `translateY(${
      Anh4_Layout.getBoundingClientRect().top / 5
    }px)`;
    layer2.style.transform = `translateY(${
      Anh4_Layout.getBoundingClientRect().top / 16
    }px)`;
    layer3.style.transform = `translateY(${
      -Anh4_Layout.getBoundingClientRect().top / 10
    }px)`;
  }

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
