$(document).ready(function (){
	$('div#login-modal').on('submit', $('form'), function(e){
		e.preventDefault();
		console.log("Clicked Login Form");

		// had to separate the 2 forms
		formData = $(this).find('form').serialize();
		console.log(formData);

		$.ajax({
			url:'/login',
			method: 'POST',
			data: formData,
			success: function(data){
				console.log(data);
			},
			error: function(err){
				console.log(err);
			}
		});
	});

	$('div#signup-modal').on('submit', $('form'), function(e){
		e.preventDefault();
		console.log("Clicked Signup Form");

		
	});

});