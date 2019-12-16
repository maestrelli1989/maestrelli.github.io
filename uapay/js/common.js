/*
	Javascript code for the UaPay website project
	Version: 1.0
	Created: 30.11.2019
	Author: Serhii Tiutin
	Modified by: Serhii Tiutin
	Owner: UaPay
	Website: https://uapay.ua/
*/

$(() => {

	/*
		List of variables
	*/
	
	const primaryTags = $("html, body");

	const firstTrigger = $("#first-trigger");
	const firstBlock = $("#first-block");

	const secondTrigger = $("#second-trigger");
	const secondBlock = $("#second-block");

	const thirdTrigger = $("#third-trigger");
	const thirdBlock = $("#third-block");

	const fourthTrigger = $("#fourth-trigger");
	const fourthBlock = $("#fourth-block");

	const fifthTrigger = $("#fifth-trigger");
	const fifthBlock = $("#fifth-block");
	
	/*
		Smooth scroll effect
	*/

	$(firstTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(firstBlock).offset().top
		}, 700);
	});
	
	$(secondTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(secondBlock).offset().top
		}, 700);
	});

	$(thirdTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(thirdBlock).offset().top
		}, 700);
	});

	$(fourthTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(fourthBlock).offset().top
		}, 700);
	});

	$(fifthTrigger).click(() => {
		$(primaryTags).animate({
			scrollTop: $(fifthBlock).offset().top
		}, 700);
	});

});