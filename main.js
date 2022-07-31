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

var tlSkills = new TimelineMax();

tlSecondScroll
.fromTo(".trigger1", 4, {x:"-200%"}, {x:"0%"})
.fromTo(".intro", 4, {x:"-200%"}, {x:"0%"}, "-=5")

tlThirdScroll
.fromTo(".trigger2", 4, {y:"200%"}, {y:"0%"})
.fromTo(".aboutme", 4, {y:"200%"}, {y:"0%"}, "-=5")

tlFourthScroll
.fromTo(".trigger3", 12, {x:"200%"}, {x:"0%"}, "12")
.fromTo(".skillsHeader", 8, {x: "200%"}, {x: "0%"}, ">")
.fromTo([".skillLabel", ".skills", ".skillsBox .container"], 8, {x: "200%"}, {x: "0%"})
.fromTo(".certsHeader", 8, {x: "200%"}, {x: "0%"})
.fromTo(".certs", 8, {x: "1000%"}, {x: "0%"});

tlProjectsBase
.fromTo(".projectsHeader", 5, {y: "-50%"}, {y: "200%"});

tlProjects
.fromTo(".trigger6", 2, {y: "200%"}, {y: "0%"});


tlProjectsRow1
.fromTo(".trigger7", 1, {scale: 0.25, x: "200%", y:"-50%", rotation:"180", }, {ease: Bounce.easeOut, scale:0.80 , x: "0%", y:"0%", rotation:"360"}, "-=2")
.fromTo(".trigger8", 1, {scale: 0.25, x: "-200%", y:"-50%", rotation:"-180"}, {ease: Bounce.easeOut, scale: 0.80, x: "0%", y:"0%", rotation:"-360"}, "-=2")
.fromTo(".trigger9", 1.5,  {scale: 0.25, x: "200%", y:"-50%", rotation:"180"}, {scale: 0.70, x: "0%", y:"0%", rotation:"360"}, "0.75")
.fromTo(".trigger10", 1.5,  {scale: 0.25, x: "-200%", y:"-50%", rotation:"-180"}, {scale: 0.70, x: "0%", y:"0%", rotation:"-360"}, "0.75")
.fromTo(".trigger11", 2,  {scale: 0.25, x: "200%", y:"-150%"}, {scale: 0.80, x: "0%", y:"0%"}, "2.25")
.fromTo(".trigger12", 2, {scale: 0.25, x: "-200%", y:"-150%"}, {scale: 0.80, x: "0%", y:"0%"}, "2.25");


var scene2 = new ScrollMagic.Scene({
    triggerElement: ".SM",
    triggerHook: "onEnter",
    duration: "100%"
})
.setTween(tlSecondScroll)
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    triggerHook: "onCenter",
    duration: "100%"
})
.setTween(tlThirdScroll)
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    triggerHook: "onCenter",
    duration: "100%"
})
.setTween(tlFourthScroll)
.addTo(controller);

var scene5 = new ScrollMagic.Scene({
    triggerElement: ".projectsBase",
    triggerHook: "onEnter",
    duration: "100%"
})
.setTween(tlProjectsBase)
.addTo(controller);

var scene6 = new ScrollMagic.Scene({
    triggerElement: ".projectsBase",
    triggerHook: "onEnter",
    duration: "75%"
})
.setTween(tlProjects)
.setPin(".trigger6")
.addTo(controller);

var scene7 = new ScrollMagic.Scene({
    triggerElement: ".trigger6",
    triggerHook: "onLeave",
    duration: "300%"
})
.setTween(tlProjectsRow1)
.addTo(controller);

