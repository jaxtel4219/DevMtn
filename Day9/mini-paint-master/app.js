$(document).ready(function(){
	var color = 'white'
	
	var colors = 'white green red blue yellow'
	
	
	$('.box').on('click', function() {
    	$(this).addClass(color);
  	})

	$('.box').on('dblclick', function() {
		$(this).removeClass(color);
	})
	
	$('#reset').on('click', function() {
		$('.box').removeClass('red blue green yellow white');
	})
	
	$('#red').on('click', function() {
		color = 'red';
	})
	
	$('#blue').on('click', function() {
		color = 'blue';
	})
	
	$('#green').on('click', function() {
		color = 'green';
	})
	
	$('#yellow').on('click', function() {
		color = 'yellow';
	})
	
	$('#white').on('click', function() {
		color = 'white';
	})
	
	
})