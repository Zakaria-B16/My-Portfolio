// Select DOM elements
const wrapper = document.getElementById("wrapper");
const topLayer = wrapper.querySelector(".top");
const handle = wrapper.querySelector(".handle");
const landing = wrapper.querySelector(".landing");
const about = document.querySelector(".about ");
const cursor = document.getElementById("cursor");
const navLinks = document.querySelectorAll(".nav-link");
const aList = document.querySelectorAll("a");
const buttonList = document.querySelectorAll("button");
const panels = document.querySelectorAll(".panel");

// Dect=lare Variables
let skew = 0;
let delta = 0;

// Change Landing Background
document.addEventListener("DOMContentLoaded", function () {
  if (wrapper.className.indexOf("skewed") != -1) {
    skew = 1000;
  }

  wrapper.addEventListener("mousemove", function (e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";
  });
});

// Move Cursor
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("grow");
    link.classList.add("hovered");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    link.classList.remove("hovered");
  });
});

aList.forEach((a) => {
  a.addEventListener("mouseover", () => {
    cursor.classList.add("grow");
  });
  a.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

buttonList.forEach((button) => {
  button.addEventListener("mouseover", () => {
    cursor.classList.add("grow");
  });
  button.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    panel.classList.add("open");
    panel.classList.add("open-active");
  });
  panel.addEventListener("mouseleave", () => {
    panel.classList.remove("open");
    panel.classList.remove("open-active");
  });
});

window.addEventListener("load", () => {
  document.querySelector("#loader").classList.add("remove");
  document.body.classList.remove("stop");
});

window.addEventListener("click", () => {
  let ripple = document.createElement("span");
  document.querySelector("#cursor").appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 500);
});

document.querySelector(".nav-btn").addEventListener("click", () => {
  document.querySelector(".navbar .container").classList.toggle("open");
  document.querySelector(".nav-btn").classList.toggle("clicked");
});
