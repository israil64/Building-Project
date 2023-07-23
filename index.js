var tl = gsap.timeline();

tl.from("#nav", {
  opacity: 0,
  delay: 0.3,
});
tl.from("#nav h1,#nav a", {
  y: -80,
  duration: 0.8,
  stagger: 0.4,
});
tl.from("#nav .modern-button", {
  x: -20,
  duration: 1,
  delay: 0.4,
  stagger: 0.3,
});
tl.from(".left h3", {
  x: -200,
  opacity: 0,
  duration: 0.3,
  stagger: 0.4,
});
tl.from(".right img", {
  scale: 2,
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
});

tl.from("#page2 .box", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
  delay: 0.8,
  // scrollTrigger: {
  //   trigger: "#page2 .box",
  //   scroll: "body",
  //   start: "top 240px",
  // },
});

tl.from("#middle-page .card", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  // scrollTrigger: {
  //   trigger: "#middle-part .card",
  //   scroll: "body",
  //   start: "top 60%",
  // },
});
