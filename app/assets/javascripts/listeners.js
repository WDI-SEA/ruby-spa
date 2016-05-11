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

				$('span.username').html(data.name);
				$('span.useremail').html(data.email);
				$('ul.no-login-links').toggleClass("hidden");
				$('ul.with-login-links').toggleClass("hidden");
				$('div#login-modal').modal('hide');
			},
			error: function(err){
				console.log(err);
			}
		});
	});

	$('div#signup-modal').on('submit', $('form'), function(e){
		e.preventDefault();
		console.log("Clicked Signup Form");

		// had to separate the 2 forms
		formData = $(this).find('form').serialize();
		console.log(formData);

		$.ajax({
			url:'/login',
			method: 'POST',
			data: formData,
			success: function(data){
				console.log(data);

				$('span.username').html(data.name);
				$('span.useremail').html(data.email);
				$('ul.no-login-links').toggleClass("hidden");
				$('ul.with-login-links').toggleClass("hidden");
				$('div#signup-modal').modal('hide');
			},
			error: function(err){
				console.log(err);
			}
		});
	});

	$('a.logout-button').on('click', function(e){
		e.preventDefault();
		console.log("Clicked Logout Button");

		$.ajax({
			url: '/logout',
			method: 'GET',
			success: function(){
				console.log("Logout Successful");

				$('span.username').html('');
				$('span.useremail').html('');
				$('ul.no-login-links').toggleClass("hidden");
				$('ul.with-login-links').toggleClass("hidden");
			},
			error: function(err){
				console.log(err);
			}
		});
	});
});