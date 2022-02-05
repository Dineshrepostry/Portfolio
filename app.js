const flightPath = {
    curviness : 1.25,
    autoRotate : true,
    values : [
        { x:200, y:-100},
        {x:400, y: -50},
        { x:600, y:-100},
        {x: 800, y: -50},
        {x: 1000, y: -100},
        {x :900 , y: -300},
        {x: 800, y:-100},
        {x: 1000 , y:-50},
        {x: 1200, y:-100},
        {x: 1500, y: -250},
        {x:window.innerWidth+100, y:-200}
        // { x:300, y:10},
        // { x:500, y: 100}
    ]
};

var tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

var tween2 = new TimelineLite();

var residence = document.querySelector(".residence");
var schooling = document.querySelector(".schooling");
var hobbies = document.querySelector(".hobbies");
var college = document.querySelector(".college");

tween2.to(residence,0.9, {opacity : 1, scale:1.5}, '1');
tween2.to(schooling, 0.9, {opacity : 1, scale: 1.5});
tween2.to(hobbies, 1.8, {opacity : 1, scale: 1.5});
tween2.to(college,1.8, {opacity : 1, scale: 1.5});

var tween3 = new TimelineLite();

var first= document.querySelector("#first");
var second = document.querySelector("#second");
var third = document.querySelector("#third");
var back = document.querySelector("header");
var bag = document.querySelector("#bag");
var lap = document.querySelector("#lap");
var head = document.querySelector("#head");
var eng = document.querySelector("#eng");
var tea = document.querySelector("#tea");

tween3.to(first,1,{opacity:0});
tween3.to(back,1,{backgroundColor: "#FF69B4", color: "white"});
tween3.to(second,0.5,{opacity:1},"-=1");
tween3.to(back,1,{backgroundColor: "black", color: "white"});
tween3.to(second,0.5,{opacity:0},"-=1");
tween3.to(third,1,{opacity : 1});
tween3.to(bag,2, {x : 550},"-=2");
tween3.to(eng,2, {x : 750},"-=2");
tween3.to(lap,2,{x : "-136%"},"-=2");
//tween3.to(tea,2, {x : -750},"-=2");
tween3.to(head,2,{ x: -600 },"-=2");


// Footer animations
var tween4 = new TimelineLite();
var line = document.querySelector(".line");
var insta = document.querySelector(".insta");
var mail = document.querySelector(".mail")

tween4.to(line,1,{width:"50%"});
tween4.to(insta,2,{opacity:1, x:-30}, "-=1");
tween4.to(mail, 2, {opacity: 1, x:30},"-=2");



const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement : ".animation",
    duration: 6000,
    triggerHook: 0
})
.setTween(tween)
.setPin(".animation")
//.addIndicators() 
.addTo(controller);

let scene2 = new ScrollMagic.Scene({
    triggerElement : ".animation",
    duration: 6000,
    triggerHook: 0
})
.setTween(tween2)
// .setPin(".animation")
//.addIndicators() 
.addTo(controller);

let scene3 = new ScrollMagic.Scene({
    triggerElement : "header",
    duration: 6000,
    triggerHook: 0
})
.setTween(tween3)
.setPin("header")
//.addIndicators() 
.addTo(controller);

let scene4 = new ScrollMagic.Scene({
    triggerElement : "footer",
    duration: 6000,
    triggerHook: 0
})
.setTween(tween4)
.setPin("footer")
//.addIndicators()
.addTo(controller);

function getYPosition(){
    var top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
  }

// const obj = document.querySelector(".residence");
// document.body.addEventListener("scroll", function(e){
//     if(e.scrollPos >= 560){
//         var el = document.querySelector(".residence");
//         el.display="flex";
//     }
// });

// document.addEventListener("scroll", function(){
//     if(getYPosition() >= 2162 && getYPosition() <2262 ){
//         var el = document.querySelector(".residence");
//         el.src="residence.png"
//     }
//     else if(getYPosition() < 2162){
//         var res=this.createElement()
//         var el = document.querySelector(".residence");
//         el.src="";
//     }
// });


	// // build tween
	// var tween1 = TweenMax.to(".residence", 0.5, {scale: 1.5/*, repeat: 5 */});

	// // build scene and set duration to window height
	// let scene1 = new ScrollMagic.Scene({triggerElement: ".animation", duration: "100%", reverse:true ,triggerHook: 0})
	// 				.setTween(tween1)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
                    
	// // build tween
	// var tween2 = TweenMax.to(".schooling", 0.5, {scale: 1.5/*, repeat: 5 */});

	// // build scene and set duration to window height
	// let scene2 = new ScrollMagic.Scene({triggerElement: ".animation", duration: "100%", reverse:true ,triggerHook: 0})
	// 				.setTween(tween2)
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);


    // let scene2 = new ScrollMagic.Scene({
    //     triggerElement : ".r",
    //     duration: 50,
    //     triggerHook: 0.2
    // })
    // //.setPin(".r")
    // .addIndicators() 
    // .addTo(controller);