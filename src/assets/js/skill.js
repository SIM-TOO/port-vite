import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function skill() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".skill__item");
     gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#skill",
            start: "top 56px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}