// magic.js
$(document).ready(function() {

	$('.existing-member_tab').click(function(){
		$(this).addClass('widget--tab_active');
		$('.existing-member').addClass('form_active');
		$('.new-member').removeClass('form_active');
		$('.new-member_tab').removeClass('widget--tab_active');
	});

	$('.new-member_tab').click(function(){
		$(this).addClass('widget--tab_active');
		$('.new-member').addClass('form_active');
		$('.existing-member').removeClass('form_active');
		$('.existing-member_tab').removeClass('widget--tab_active');
	});

	var newMember = $('#newMember');
	var existingMember = $('#existingMember');
	var url = "https://response-test.titan.analogfolk.com";

	newMember.submit(function (e) {
			$.ajax({
					type: "POST",
					url: url,
					data: newMember.serialize(),
					success: function (data) {
						console.log(data);
						console.log('newMember form submitted');
						formThanks();
					},
					complete: function() {
						$('form')[0].reset();
						formDisable();
					}
			});

			e.preventDefault();
	});

	existingMember.submit(function (e) {
			$.ajax({
					type: "POST",
					url: url,
					data: existingMember.serialize(),
					success: function (data) {
						console.log(data);
						console.log('existingMember submitted');
						console.log(existingMember.serialize());
						formThanks();
					},
					complete: function() {
						formDisable();
					}
			});

			e.preventDefault();
	});

	function formThanks() {
		$('.existing-member').removeClass('form_active');
		$('.new-member').removeClass('form_active');
		$('.thanks-message').addClass('form_active');
	};

	function formDisable() {
		$('form')[0].reset();
		$('.existing-member_tab').addClass('tab-inactive').unbind('click');
		$('.new-member_tab').addClass('tab-inactive').unbind('click');
	};

});
