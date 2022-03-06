
function toggle(){
    var trainer = document.querySelector(".trailer");
    trainer.classList.toggle("active");

    var video = document.querySelector(".video");
    video.pause();
    video.currentTime = 0;
}

window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky',window.scrollY > 0);

});
function toggleMenu(){
 var menuToggle = document.querySelector(".toggle");
 var menu = document.querySelector(".menu");
 menuToggle.classList.toggle('active');
 menu.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });