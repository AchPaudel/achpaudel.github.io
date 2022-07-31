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


var tlProjects = new TimelineMax();

tlSecondScroll
.fromTo('.intro', 2, {scale: 2, y:"200%"}, {scale: 1, y:"0%"});

tlThirdScroll
.fromTo('.aboutme', 2, {scale: 2, y:"200%"}, {scale:1, y:"0%"});

tlFourthScroll
.fromTo(".skillsBox", 2, {scale: 2, y:"200%"}, {scale:1, y:"0%"})
.fromTo(".certifications", 2, {scale: 2, y:"200%"}, {scale:1, y:"0%"});

tlProjects
.fromTo('#three', 2, {y: "200%"}, {y: "0%"});

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".SM",
    triggerHook: "onCenter",
    duration: "50%"
})
.setTween(tlSecondScroll)
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: "onCenter",
    duration: "50%"
})
.setTween(tlThirdScroll)
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".aboutme",
    triggerHook: "onCenter",
    duration: "75%"
})
.setTween(tlFourthScroll)
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: ".certifications",
    triggerHook: "onCenter",
    duration: "100%"
})
.setTween(tlProjects)
.addTo(controller)
