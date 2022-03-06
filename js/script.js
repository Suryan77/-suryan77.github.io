function Time(){
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    var sess = "AM"

    if(h == 0) {
        h = 12;
    }
    if(h > 12){
        h = h + 1 - 1;
        sess = "pm";
    }

    h = (h < 10) ? "0" + h : h;
    
    m = (m < 10) ? "0" + m : m;
    
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" +  m + ":" +  s + " " + sess;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    document.getElementById("myClock").style.color = "white";

setTimeout(Time, 1000);
}
Time();
function toggle(){
    var trainer = document.querySelector(".vac");
    trainer.classList.toggle("active");

}
AOS.init();

var img = 1;
function next(){
    img++;
    if(img > 3) {
        img = 1;

    }
    document.getElementById("poxel").src = "img/" + img + ".jpg";

}
function prev() {
    img--
    if(img < 1) {
        img = 3;
    }
    document.getElementById("poxel").src = "img/" + img + ".jpg";
}
function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
   }
