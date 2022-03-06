
function toggle(){
    var trainer = document.querySelector(".trailer");
    trainer.classList.toggle("active");

    var video = document.querySelector(".video");
    video.pause();
    video.currentTime = 0;
}