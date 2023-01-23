import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

const revealBox = document.querySelector(".reveal-box");
const revealContainer = document.querySelector(".reveal-container");
const revealContent = document.querySelector(".content-reveal");
const revealImage = document.querySelector(".image img");

gsap.registerPlugin(CustomEase);
CustomEase.create('custom', '1,0,0,1')

const animateReveal = (el) => {
  gsap.fromTo(el, { y: "20%" }, { y: "0%", duration: 1.5, ease: 'power4.out' });
  gsap.fromTo(el, { height: "0" }, { height: "50vh", duration: 1.5, ease: 'power4.out', delay: 0.3 });
  gsap.fromTo(el, { opacity: "0" }, { opacity: "1", duration: 1.5, ease: 'power4.out', delay: 0.3 });
};

const animateContainer = (el) => {
  gsap.fromTo(el, { y: "5%" }, { y: "0%", duration: 1.5, delay: 0.2, ease: 'power4.out'})
};

const animateScaleImage = (el) => {
  gsap.fromTo(el, { scale: "1" }, { scale: "1.3", duration: 3, ease: 'power4.out'})
};

const animateContent = (el) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.8, ease: 'power4.out'})
};

animateReveal(revealBox);
animateContainer(revealContainer);
animateScaleImage(revealImage);
animateContent(revealContent);