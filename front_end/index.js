$(function() {
	var socket = io();

	$("#name_submit").click(function() {
		var name = $("#enter_name").val();
		if(name) {
			$("#enter_name").hide();
			$("#m").show();
			$("#name").html(name);
		}
		else {
			$("#name").val("Enter a non empty name");
		}
		return false;
	});

	$('#form').submit(function() {
		console.log("Form submitted");
		var msg = {};
		msg.name = $("#name").text();
		msg.content = $("#m").val();
		$('#m').val('');
		socket.emit('chat message', msg);
		return false;
	});

	$('#send_button').click(function() {
		console.log("hey dude");
		return false;
	});

	socket.on('chat message', function(msg) {
		$("#messages").append($('<li>').text(msg.name + ":" + msg.content));
	});

});