$(document).ready(function () {
	$('input[type="submit"]').on("click", function(event){
		event.preventDefault();
		
		var first_name = $('#first_name').val();

		$.get('find.html', {'first_name': first_name});
	});
});
