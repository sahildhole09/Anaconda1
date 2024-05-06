var menubutton = document.querySelector('.Sahil');
var Nav2 = document.querySelector('.nav2');


menubutton.addEventListener("click", function() {
    Nav2.classList.toggle('dropdown');
})


var t1 = gsap.timeline();

t1.from('.nav1 h3',{
    y:-100,
    opacity:0,
    duration:.3
})
t1.from('.nav2 a',{
    y:-100,
    opacity:0,
    stagger:.1
})

t1.from('.nav3 button',{
    scale:0
})

t1.from('.main-content',{
    scale:0,
    opacity:0,
    duration:0.5,
    delay:0.2
})

t1.from('.sahil',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.lower-main-left-content',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})


t1.from('.Repos',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.Repos',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})


t1.from('.left-conda-div',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.left-conda-div',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})

t1.from('.right-conda-div',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.right-conda-div',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})

t1.from('.right-class-div',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.right-class-div',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})

t1.from('.left-class-div',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.left-class-div',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})

t1.from('.left-cloud-div',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.left-cloud-div',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})

t1.from('.right-cloud-div',{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.right-cloud-div',
        scroller:'body',
        end:"0 50%",
        scrub:2
    }
})

t1.from('.package1 h1',{
    scale:0,
    opacity:0,
    scrub:1
})

t1.from('.package-card',{
    y:-300,
    stagger:0.8,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.package-card',
        scroller:'body',
        start:"700px 600px",
        end:"400px 50px",
        scrub:2
    }
})

t1.from('.first h1',{
    scale:0,
    opacity:0,
    scrub:1
})

t1.from('.left-second',{
    x:-300,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.left-second',
        scroller:'body',
        end:"0 45%",
        scrub:1
    }
})

t1.from('.right-second',{
    x:300,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.right-second',
        scroller:'body',
        start:"0 85%",
        end:"0 55%",
        scrub:1
    }
})

t1.from('.ana2 a',{
    y:-100,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:'.ana2 a',
        scroller:'body',
        end:"0 20%",
        scrub:1
    }
})

t1.from('.anaconda2 h3',{
    y:-100,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:'.anaconda2 h3',
        scroller:'body',
        scrub:1
    }
})

t1.from('.footer h3',{
    y:-100,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:'.footer h3',
        scroller:'body',
        end:"0 50%",
        scrub:1
    }
})
