
$(document).ready(function (){
  $('#menu').click(function (){
    $('.side-bar').toggleClass('side-bar-shown');
  });
});


let menu = document.getElementById("menu");
let index = 0;

const changeImg = () => {
  index++;
  if(index % 2 == 1) {
    document.getElementById('menuicon').src = "img/cross.png";
    menu.style.transition = "0.6s";
}
  else {
    document.getElementById('menuicon').src = "img/toggel.jpg";
    menu.style.transition = "0.6s";
  }

}
