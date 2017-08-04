$(document).ready(function(){
	console.log("User JS");
});

$('.editable').each(function(){
	this.contentEditable = true;
});

// функция вывода кода to textarea
$(document).ready(function() {
	$('select').change(function() {
	var currentVal = $('textarea').val();
	$('textarea').val(currentVal + $(this).val()); 
	$('textarea').autoResize(
		function AutoResize(){      
 	console.log('autoresize.jquery.js work');
 	});
	$('textarea').resizable();
	});
});

