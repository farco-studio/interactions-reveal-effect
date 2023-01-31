import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

const revealBox = document.querySelector(".reveal-box");
const revealContainer = document.querySelector(".reveal-container");
const revealContent = document.querySelector(".content-reveal");
const revealImage = document.querySelector(".image img");

gsap.registerPlugin(CustomEase);
CustomEase.create('custom', '1,0,0,1')

const animateReveal = (el) => {
  gsap.timeline()
    .fromTo(el, { y: "100%" }, { y: "0%", duration: 2, ease: 'custom' })
    .fromTo(el, { height: "100vh" }, { height: "50vh", duration: 2, ease: 'power4.out' });
};

const animateContainer = (el) => {
  gsap.fromTo(el, { opacity: "0" }, { opacity: "1", duration: 2, delay: 1, ease: 'power4.out'})
  gsap.fromTo(el, { y: "20%" }, { y: "0%", duration: 2, delay: 0.7, ease: 'power4.out'})
};

const animateScaleImage = (el) => {
  gsap.fromTo(el, { scale: "1" }, { scale: "1.3", duration: 3, delay: 0.8, ease: 'power4.out'})
};

const animateContent = (el) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.8, ease: 'power4.out'})
};

animateReveal(revealBox);
animateContainer(revealContainer);
animateScaleImage(revealImage);
animateContent(revealContent);