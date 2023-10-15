gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const Animation = {
  valueSetter() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home .parent .child", { y: "100%" });
    gsap.set("#rocket", { x: -250 });
    gsap.set("#tech", { opacity: 0 });
  },

  revealToSpan() {
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
  },

  runLoaderAnimation() {
    tl.from("#loader .child span", {
      x: 100,
      stagger: 0.2,
      duration: 1.4,
      ease: Power3.easeInOut,
    })
      .to("#loader .parent .child", {
        y: "-110%",
        duration: 1,
        ease: Circ.easeInOut,
      })
      .to(
        "#loader",
        {
          height: 0,
          duration: 1,
          ease: Circ.easeInOut,
        },
        "-=1"
      )
      .to(
        "#green",
        {
          height: "100%",
          top: 0,
          duration: 1,
          delay: -0.8,
          ease: Circ.easeInOut,
        },
        "-=1"
      )
      .to(
        "#green",
        {
          height: "0%",
          duration: 1,
          delay: -0.5,
          ease: Circ.easeInOut,
          onComplete: Animation.animateHomePage,
        },
        "-=0.5"
      );
  },

  animateHomePage() {
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
      })
      .to("#tech", {
        opacity: 1,
        duration: 1,
        ease: Expo.easeInOut,
      })
      .to(
        "#rocket",
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: -0.5,
          ease: Expo.easeInOut,
        },
        "-=0.5"
      )
      .to(
        "#line_header",
        {
          opacity: 1,
          duration: 0.1,
          delay: -0.5,
          ease: Power3.easeInOut,
        },
        "-=0.5"
      );
  },

  cardHoverShow() {
    const containerCardsWorks = document.querySelectorAll(".cnt");
    containerCardsWorks.forEach((card) => {
      var showingImage;
      card.addEventListener("mousemove", (e) => {
        showingImage = e.target;
        document.querySelector("#cursor").children[
          showingImage.dataset.index
        ].style.opacity = 1;
        document.querySelector("#cursor").children[
          showingImage.dataset.index
        ].style.transform = `translate(${e.clientX - 35}px, ${
          e.clientY - 50
        }px)`;
        showingImage.style.filter = "grayscale(1)";
      });
      card.addEventListener("mouseleave", (e) => {
        document.querySelector("#cursor").children[
          showingImage.dataset.index
        ].style.opacity = 0;
        showingImage.style.filter = "grayscale(0)";
      });
    });
  },

  parallax() {
    tl.to("#home .row h2", {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 2,
      },
      yPercent: -150,
    });
    tl.to("#rocket", {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1.9,
      },
      xPercent: 250,
      yPercent: 220,
      scale: 2,
      rotate: 80,
    });
    tl.to("#about #about_left", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        scrub: 1.9,
      },
      yPercent: 40,
    });

    tl.to("#about #about_right #image1", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        scrub: 1.9,
      },
      xPercent: -50,
    });
    tl.to("#about #about_right #image2", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        scrub: 1.9,
      },
      yPercent: 50,
    });
    tl.to("#about #about_right #image3", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        scrub: 1,
      },
      xPercent: 50,
    });
    tl.to("#work", {
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        scrub: 1,
      },
      xPercent: 50,
    });
  },

  parallaxWorks() {
    tl.from(".cnt, .work_num", {
      y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: {
        trigger: "#works",
        start: "top bottom",
        scrub: 1.9,
      },
    });
    tl.from("cnt > img", {
      scale: 1.6,
      scrollTrigger: {
        trigger: "#works",
        start: "top bottom",
        scrub: 1.9,
      },
    });
  },

  init() {
    this.revealToSpan();
    this.valueSetter();
    this.runLoaderAnimation();
    this.animateHomePage();
    this.cardHoverShow();
    this.parallax();
    this.parallaxWorks();
  },
};

Animation.init();
