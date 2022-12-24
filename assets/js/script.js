//Header Banner Gallery

    var btnPrev = document.getElementById("btnPrev");
    var btnNxt = document.getElementById("btnNxt");
    var bgthumb = document.getElementsByClassName("bgthumb");
    var hero = document.getElementById("hero");

    var backgroundImg = new Array(
        "assets/images/bg1.jpg",
        "assets/images/bg2.jpg",
        "assets/images/bg3.jpg",
        "assets/images/bg4.jpg",
        "assets/images/bg5.jpg",
    );
    let i = 0;
    btnNxt.onclick = function(){

        if(i < 4){
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        bgthumb[i+1].classList.add("active");
        bgthumb[i].classList.remove("active");
        i++;
    }
}
    btnPrev.onclick = function(){

    if(i > 0){
    hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
    bgthumb[i-1].classList.add("active");
    bgthumb[i].classList.remove("active");
    i--;
    }
}

//Callback Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});