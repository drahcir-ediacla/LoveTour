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

// JS for Sticky Header  

    // When the user scrolls down 80px from the top of the document, slide down the navbar
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("sticky-header").style.top = "0";
        document.getElementById("sticky-header").style.opacity = "1";
        document.getElementById("scroll-top").style.top = "90%";
      } else {
        document.getElementById("sticky-header").style.top = "-100px";        
        document.getElementById("sticky-header").style.opacity = "0";
        document.getElementById("scroll-top").style.top = "-10%"; 
      }
    }

//  JS for Sticky Header End 
// JS for Mobile Menu 

var coll = document.getElementsByClassName("collapsible");
var z;

for (z = 0; z < coll.length; z++) {
  coll[z].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


var menuBkgrnd = document.getElementById("menuBkgrnd");
var mobileMenu = document.getElementById("mobileMenu");
var tourSubmenu = document.getElementById("tourSubmenu");

mobileMenu.style.right = "-300px";
menuBkgrnd.style.right = "-100%";
burgerBtn.onclick = function(){
    if(mobileMenu.style.right == "-300px"){
      mobileMenu.style.right = "0";
    }
    if(menuBkgrnd.style.right == "-100%"){
       menuBkgrnd.style.right = "0";
    }
    else{
        mobileMenu.style.right = "-100%";
    }
}
mobileMenu.style.right = "-300px";
menuBkgrnd.style.right = "-100%";
closeBtn.onclick = function(){
    if(mobileMenu.style.right == "0"){
      mobileMenu.style.right = "-300px";
    }
    if(menuBkgrnd.style.right == "0"){
       menuBkgrnd.style.right = "-100%";
    }
    else{
        mobileMenu.style.right = "-300px";
        menuBkgrnd.style.right = "-100%";
    }
}
tourSubmenu.style.right = "-300px";
tourArrow.onclick = function(){
    if(tourSubmenu.style.right == "-300px"){
      tourSubmenu.style.right = "0";
    }
    else{
      tourSubmenu.style.right = "-300px";
    }
}
mobileMenu.style.right = "-300px";
tourSubmenu.style.right = "-300px";
menuBkgrnd.style.right = "-100%";
tourClosebtn.onclick = function(){
    if(tourSubmenu.style.right == "-300px"){
      tourSubmenu.style.right = "0";
    }
    if(mobileMenu.style.right == "-300px"){
      mobileMenu.style.right = "0";
    }
    if(menuBkgrnd.style.right == "-100%"){
      menuBkgrnd.style.right = "0";
   }
    else{
        tourSubmenu.style.right = "-300px";
        mobileMenu.style.right = "-300px";
        menuBkgrnd.style.right = "-100%";
    }
}
tourSubmenu.style.right = "-300px";
tourBackbtn.onclick = function(){
    if(tourSubmenu.style.right == "-300px"){
      tourSubmenu.style.right = "0";
    }
    else{
        tourSubmenu.style.right = "-300px";
    }
}

hotelSubmenu.style.right = "-300px";
hotelArrow.onclick = function(){
    if(hotelSubmenu.style.right == "-300px"){
      hotelSubmenu.style.right = "0";
    }
    else{
      hotelSubmenu.style.right = "-300px";
    }
}
mobileMenu.style.right = "-300px";
hotelSubmenu.style.right = "-300px";
menuBkgrnd.style.right = "-100%";
hotelClosebtn.onclick = function(){
    if(hotelSubmenu.style.right == "-300px"){
      hotelSubmenu.style.right = "0";
    }
    if(mobileMenu.style.right == "-300px"){
      mobileMenu.style.right = "0";
    }
    if(menuBkgrnd.style.right == "-100%"){
      menuBkgrnd.style.right = "0";
   }
    else{
        hotelSubmenu.style.right = "-300px";
        mobileMenu.style.right = "-300px";
        menuBkgrnd.style.right = "-100%";
    }
}
hotelSubmenu.style.right = "-300px";
hotelBackbtn.onclick = function(){
    if(hotelSubmenu.style.right == "-300px"){
      hotelSubmenu.style.right = "0";
    }
    else{
      hotelSubmenu.style.right = "-300px";
    }
}

pagesSubmenu.style.right = "-300px";
pagesArrow.onclick = function(){
    if(pagesSubmenu.style.right == "-300px"){
      pagesSubmenu.style.right = "0";
    }
    else{
      pagesSubmenu.style.right = "-300px";
    }
}
mobileMenu.style.right = "-300px";
pagesSubmenu.style.right = "-300px";
menuBkgrnd.style.right = "-100%";
pagesClosebtn.onclick = function(){
    if(pagesSubmenu.style.right == "-300px"){
      pagesSubmenu.style.right = "0";
    }
    if(mobileMenu.style.right == "-300px"){
      mobileMenu.style.right = "0";
    }
    if(menuBkgrnd.style.right == "-100%"){
      menuBkgrnd.style.right = "0";
   }
    else{
        pagesSubmenu.style.right = "-300px";
        mobileMenu.style.right = "-300px";
        menuBkgrnd.style.right = "-100%";
    }
}
pagesSubmenu.style.right = "-300px";
pagesBackbtn.onclick = function(){
    if(pagesSubmenu.style.right == "-300px"){
      pagesSubmenu.style.right = "0";
    }
    else{
      pagesSubmenu.style.right = "-300px";
    }
}

//JS for Mobile Menu End