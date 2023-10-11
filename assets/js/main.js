function valueSette() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });
  gsap.set("#tech", { opacity: 0 });
}

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

  tl.from("#loader .child span", {
    x: 100,
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  });
  tl.to("#loader .parent .child", {
    y: "-110%",
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
      onComplete: () => {
        animateHomePage();
      },
    });
}

function animateHomePage() {
  const tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 1,
      ease: Expo.easeInOut,
      onComplete: () => {
        tl.to("#tech", {
          opacity: 1,
          duration: 1,
          ease: Expo.easeInOut,
        })
      }
    })
    .to("#home .row img", {
      opacity: 1,
      duration: 0.5,
      delay: -0.5,
      ease: Expo.easeInOut,
    });
}

revealToSpan();
runLoaderAnimation();
valueSette();
