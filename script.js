$(".circle_percent").each(function () {
  var $this = $(this),
      $dataV = $this.data("percent"),
      $dataDeg = $dataV * 3.6,
      $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  $this.append(
      '<div class="circle_inbox"><span class="percent_text"></span></div>'
  );
  $this.prop("Counter", 0).animate(
      { Counter: $dataV },
      {
          duration: 2000,
          easing: "swing",
          step: function (now) {
              $this.find(".percent_text").text(Math.ceil(now) + "%");
          }
      }
  );
  if ($dataV >= 51) {
      $round.css("transform", "rotate(" + 360 + "deg)");
      setTimeout(function () {
          $this.addClass("percent_more");
      }, 1000);
      setTimeout(function () {
          $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
      }, 1000);
  }
});

var mixer = mixitup('.portfolio-gallery');


let menuLi=document.querySelectorAll('header ul li a');
let section=document.querySelectorAll('Section');

function activeMenu(){
    let len=section.length;
    while(--len && window.scrollY +97<section[len].offsetTop){}
    menuLi.forEach(sec=> sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY >50)
})

let menuIcon=document.querySelector("#menu-icon");
let navlist =document.querySelector(".navlist");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};


window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
};


var typed=new typed("text",{
    Strings:["Frontend Developer", "YouTuber","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});