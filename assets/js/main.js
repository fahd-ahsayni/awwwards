function revealToSpan() {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    const parent = document.createElement("span");
    const child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = element.innerHTML;
    parent.appendChild(child);

    element.innerHTML = "";
    element.appendChild(parent);
  });
}

// Loader Animation
function runLoaderAnimation() {
  const tl = gsap.timeline();

  tl.from(".child span", {
    x: 100,
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  });
  tl.to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
    });
}

revealToSpan();
runLoaderAnimation();
