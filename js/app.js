$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }
        else{
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed=new Typed(".element",{
        strings: ['You can make your world','Your hero','Your story'],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });



//porgress bars



var p=document.querySelectorAll('.progress-bar');
var sectionelm=document.querySelector('.about');
window.addEventListener('scroll',()=>{
    if(window.scrollY >= sectionelm.offsetTop){
        p[0].setAttribute("style","width:100%;background-color:#d6706c;transition:1s all");
        p[1].setAttribute("style","width:95%;background-color:#d6706c;transition:1.5s all");
        p[2].setAttribute("style","width:80%;background-color:#d6706c;transition:1.5s all");
        p[3].setAttribute("style","width:20%;background-color:#d6706c;transition:1.5s all");
        p[4].setAttribute("style","width:50%;background-color:#d6706c;transition:2s all");
        p[5].setAttribute("style","width:60%;background-color:#d6706c;transition:2.5s all");


    }
    else{
        p[0].setAttribute("style","width:0%;background-color:#d6706c;transition:4s all");
        p[1].setAttribute("style","width:0%;background-color:#d6706c;transition:3s all");
        p[2].setAttribute("style","width:0%;background-color:#d6706c;transition:1.5s all");
        p[3].setAttribute("style","width:0%;background-color:#d6706c;transition:1.5s all");
        p[4].setAttribute("style","width:0%;background-color:#d6706c;transition:2s all");
        p[5].setAttribute("style","width:0%;background-color:#d6706c;transition:1s all");

    }
})

//Owl cCarousel

$(".owl-carousel").owlCarousel();



})


