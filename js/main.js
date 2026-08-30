gsap.registerPlugin(ScrollTrigger);

/* HERO
-------------------------------------------------- */

gsap.to(".hero-image", {
  scale: 1.2,
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

/* HERO TEXT
-------------------------------------------------- */

gsap.to(".hero-content", {
  y: -150,
  opacity: 0,
  ease: "none",

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "60% top",
    scrub: true,
  },
});

/* HERO TRANSITION
-------------------------------------------------- */

const transitionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-transition",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

transitionTimeline
  .from(".transition-label", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".transition-title span:first-child",
    {
      x: -150,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    },
    "-=0.4",
  )
  .from(
    ".transition-title span:nth-child(2)",
    {
      x: 150,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    },
    "-=0.9",
  )
  .from(
    ".transition-bottom p",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.6",
  )
  .to(
    ".transition-line span",
    {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.out",
    },
    "-=0.4",
  )
  .from(
    ".transition-side",
    {
      opacity: 0,
      duration: 1,
    },
    "-=0.8",
  );

/* ARRIVAL
-------------------------------------------------- */

const arrivalContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".arrival",
    start: "top 80%",
    end: "top 30%",
    scrub: false,
  },
});

arrivalContent
  .from(".arrival-content .section-number", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    ".arrival-content h2",
    {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.6",
  )
  .from(
    ".arrival-content .section-text",
    {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.6",
  );

/* THE VIEW
-------------------------------------------------- */

const viewContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".view",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

viewContent
  .from(".view-label", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".view h2",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.4",
  )
  .from(
    ".view-text",
    {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5",
  )
  .from(
    ".view-detail",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5",
  );

/* STAY
-------------------------------------------------- */

const stayContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".stay",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

/* STEP 02 */

stayContent.from(".stay-intro .section-number", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
});

/* STAY */

stayContent.from(
  ".stay-intro h2",
  {
    y: 120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  },
  "-=0.4",
);

/* Rooms */

stayContent.from(
  ".room",
  {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
  },
  "-=0.4",
);

/* EXPERIENCE
-------------------------------------------------- */

gsap.utils.toArray(".experience-item").forEach((item) => {
  const image = item.querySelector(".experience-image");
  const content = item.querySelector(".experience-content");

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  timeline
    .from(image, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(
      content,
      {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7",
    );
});

/* SUNSET
-------------------------------------------------- */

const sunsetContent = gsap.timeline({
  scrollTrigger: {
    trigger: ".sunset",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

sunsetContent
  .from(".sunset h2 span", {
    x: -150,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.25,
  })
  .from(
    ".sunset .cta p",
    {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.3",
  );

/* STAR CTA
-------------------------------------------------- */

const starCta = gsap.timeline({
  scrollTrigger: {
    trigger: ".star-cta",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

starCta
  .from(".star-cta .cta-button", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".social-link",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.12,
    },
    "-=0.3",
  );

document.querySelectorAll(".cta-button, .social-link").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    alert(
      "Thank you for your interest!\n\nThis is a concept website created for portfolio purposes.",
    );
  });
});

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
