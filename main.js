//gsap.fromTo("#one",{y: 500}, {scrollTrigger:"#banner", y:0, delay: 1, duration: 1});
//gsap.fromTo(".SM", {x: "-100%"}, {scrollTrigger:"#one", x:0, rotation: 360, duration: 1});
//gsap.fromTo("#two",{y: 500}, {scrollTrigger:".SM", y:0, duration: 0.5});
//gsap.fromTo(".intro",{y: 500}, {scrollTrigger:"#two", y:0, duration: 1.0});
//gsap.fromTo(".aboutme",{y: 500}, {scrollTrigger:".intro", y:0, duration: 1.0});
//gsap.fromTo(".skillsBox",{y: 500}, {scrollTrigger:".aboutme", y:0, duration: 1.0});
//gsap.fromTo(".certifications",{y: 500}, {scrollTrigger:".aboutme", y:0, duration: 1.5});
////gsap.fromTo(".certifications",{y: 500}, {scrollTrigger:".certifications", y:0, duration: 0.5});	
//gsap.fromTo("#three",{y: "100%"}, {scrollTrigger:".certifications", y:0, duration: 0.5});
//gsap.fromTo(".projectsContent",{y: 500}, {scrollTrigger:"#three", y:0, duration: 1.5});

var controller = new ScrollMagic.Controller();
var tlSecondScroll = new TimelineMax();
var tlThirdScroll = new TimelineMax();
var tlFourthScroll = new TimelineMax();
var tlProjectsBase = new TimelineMax();
var tlProjects = new TimelineMax();
var tlProjectsRow1 = new TimelineMax();

tlSecondScroll
.fromTo('.intro', 2, {y:"200%"}, {y:"0%"});

tlThirdScroll
.fromTo('.aboutme', 1, {y:"200%"}, {y:"0%"});

tlFourthScroll
.fromTo(".skillsBox", 1, {y:"200%"}, {y:"0%"})
.fromTo(".certifications", 1, {y:"200%"}, {y:"0%"}, "-=1");

tlProjectsBase
.fromTo(".projectsHeader", 2, {y: "-80%"}, {y: "200%"});

tlProjects
.fromTo(".trigger6", 2, {y: "200%"}, {y: "0%"});

tlProjectsRow1
.fromTo(".trigger7", 3, {scale: 0.25, x: "200%", y:"-50%", rotation:"180"}, {scale:0.80 , x: "0%", y:"0%", rotation:"360"}, 0)
.fromTo(".trigger8", 3, {scale: 0.25, x: "-200%", y:"-50%", rotation:"-180"}, {scale: 0.80, x: "0%", y:"0%", rotation:"-360"}, 0)
.fromTo(".trigger9", 3,  {scale: 0.25, x: "200%", y:"-50%", rotation:"180"}, {scale: 0.70, x: "0%", y:"0%", rotation:"360"}, "4")
.fromTo(".trigger10", 3,  {scale: 0.25, x: "-200%", y:"-50%", rotation:"-180"}, {scale: 0.70, x: "0%", y:"0%", rotation:"-360"}, "4")
.fromTo(".trigger11", 3,  {scale: 0.25, x: "200%", y:"-150%", rotation:"180"}, {scale: 0.80, x: "0%", y:"0%", rotation:"360"}, "8")
.fromTo(".trigger12", 3, {scale: 0.25, x: "-200%", y:"-150%", rotation:"-180"}, {scale: 0.80, x: "0%", y:"0%", rotation:"-360"}, "8");


var scene1 = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    triggerHook: "onEnter",
    duration: "100%"
})
.setTween(tlSecondScroll)
.addIndicators()
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    triggerHook: "onEnter",
    duration: "100%"
})
.setTween(tlThirdScroll)
.addIndicators()
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger3",
    triggerHook: "onEnter",
    duration: "100%"
})
.setTween(tlFourthScroll)
.addIndicators()
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: ".projectsBase",
    triggerHook: "onEnter",
    duration: "100%"
})
.setTween(tlProjectsBase)
.addIndicators()
.addTo(controller);

var scene5 = new ScrollMagic.Scene({
    triggerElement: ".projectsBase",
    triggerHook: "onEnter",
    duration: "75%"
})
.setTween(tlProjects)
.setPin(".trigger6")
.addIndicators()
.addTo(controller);

var scene6 = new ScrollMagic.Scene({
    triggerElement: ".trigger6",
    triggerHook: "onLeave",
    duration: "300%"
})
.setTween(tlProjectsRow1)
.addIndicators()
.addTo(controller);

