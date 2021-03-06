// admin-logout-code.js
// click handler for the admin's logout button
$('#admin-logout').click(function() {
	// send ajax POST request to admin-logout.php to kill the current admin session
	$.ajax({
		type: "POST",
		data: {
			logout: true
		},
		dataType: "JSON",
		url: "./php/admin-logout.php",
		success: function(json) {
			if (json.status) {
			// if logout in php script was successful display modal saying so then redirect admin back to login screen
				displayModal(json.success, json.message, "./js/modal-dismiss-code.js");
				setTimeout(function(){window.location = "./admin";}, 1000);
			} else if (!json.status) {
			// else display a modal saying there was an error logging out
				displayModal(json.error, json.message, "./js/modal-dismiss-code.js");
			}
		}
	});
});