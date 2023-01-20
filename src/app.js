import { gsap } from "gsap";

const revealBox = document.querySelector(".reveal-box");
const revealContainer = document.querySelector(".reveal-container");
const revealImage = document.querySelector(".image img");

const animateReveal = (el) => {
  gsap.fromTo(el, {  y: "20%" }, { y: "0%", duration: 1 });
  gsap.fromTo(el, { scale: "0" }, { scale: "1", duration: 1.5 });
  gsap.fromTo(el, { opacity: "0" }, { opacity: "1", duration: 1 });
};

const animateContainer = (el) => {
  gsap.fromTo(el, { y: "30%" }, { y: "0%", duration: 1.5, delay: 0.2 });
};

const animateScaleImage = (el) => {
  gsap.fromTo(el, { scale: "1" }, { scale: "1.3", duration: 5 });
};

animateReveal(revealBox);
animateContainer(revealContainer);
animateScaleImage(revealImage);