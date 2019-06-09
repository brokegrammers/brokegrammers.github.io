$(document).ready(function(){
  if(window.innerWidth < 768){
    $('#test').removeClass('ml-auto');
	
  }
});

$(window).resize(function(){
  if(window.innerWidth < 768){
    $('#test').removeClass('ml-auto');
  }else{
    $('#test').addClass('ml-auto');
  }
});


/*
document.getElementById('menu').onclick = function() {
var list = document.getElementById('list');
var newLI = document.createElement('a');
newLI.className = "dropdown-item";
newLI.innerHTML = 'A new item';
list.appendChild(newLI);
setTimeout(function() {
	newLI.className = newLI.className + " show";
}, 10);

	
}
*/
(function() {
  var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();