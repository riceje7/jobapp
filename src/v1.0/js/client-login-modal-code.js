// click handler for client login modal dialog

$('#modal-dismiss-button').click(function () {
	// remove modal and bg divs
	$('#modal-wrapper').remove();
	$('#modal-bg').remove();
	// clear input field values
	$('#login-username').val('');
	$('#login-password').val('');
});