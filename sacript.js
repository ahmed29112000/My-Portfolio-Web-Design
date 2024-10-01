console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=400%",
                pin: true,
                scrub: true,
                markers: true
            }
        })
        .to(".wimg", {
            rotate:60,
            scale: 4,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut",
        })
        .to(
            ".section.hero",{
                scale: 1.1,
                transformOrigin: "center center",
                ease: "power1.inOut"
            },
            "<"
        );
});
