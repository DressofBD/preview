$('.counting-item-trigger').on('click', function(e) {
  $('.counting-item-content').toggleClass("h-auto");
  e.preventDefault();
});


$('.w-nav-button').on('click', function(e) {
  $('.w-nav-menu').toggleClass("d-block");
  e.preventDefault();
});

var slider = document.getElementById("houseVal");
var output = document.getElementById("houseValShow");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


// $('#incre').click(function() {
//   document.getElementById("houseVal").value = Number(document.getElementById("houseVal").value)+10000;
// });













//start_calculator
$(document).ready(function(){
$('#start_calculator').click(function(){
    alert('Sign new href executed.');
    $('#slide-1').removeClass('current-slide')
    $('#slide-2').addClass('current-slide')
});

$('a.selector medium go-next w-inline-block w--current').on('click', function(e){
    e.preventDefault();
    $('.feel-data-list li').removeClass('selected');
    $(this).parent().addClass('selected');
});

$('#slide_2_back').on('click', function(e){
    e.preventDefault();
    $('#slide-1').addClass('current-slide')
    $('#slide-2').removeClass('current-slide')
});

$('#slide_2_next').on('click', function(e){
    e.preventDefault();
    $('#slide-3').addClass('current-slide')
    $('#slide-2').removeClass('current-slide')
});

});

$('input[type="range"]').rangeslider({

// Feature detection the default is `true`.
// Set this to `false` if you want to use
// the polyfill also in Browsers which support
// the native <input type="range"> element.
polyfill: false,

// Default CSS classes
rangeClass: 'rangeslider',
disabledClass: 'rangeslider--disabled',
horizontalClass: 'rangeslider--horizontal',
verticalClass: 'rangeslider--vertical',
fillClass: 'rangeslider__fill',
handleClass: 'rangeslider__handle',

// Callback function
onInit: function() {},

// Callback function
onSlide: function(position, value) {},

// Callback function
onSlideEnd: function(position, value) {}
});























