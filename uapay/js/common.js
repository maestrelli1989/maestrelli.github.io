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
		List of global constants
	*/
	
	const primaryTags = $("html, body");

	// Header
	const businessMenuItemTrigger = $("#business-trigger");
	const businessSubMenu = $("#business-sub-menu");
	const userMenuItemTrigger = $("#user-trigger");
	const userSubMenu = $("#user-sub-menu");
	const companyMenuItemTrigger = $("#company-trigger");
	const companySubMenu = $("#company-sub-menu");
	const developersMenuItemTrigger = $("#developers-trigger");
	const developersSubMenu = $("#developers-sub-menu");

	// Scrolling block at the "Industry solutions" page
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
		Toggle effect at the Header sub menu
	*/

	$(businessMenuItemTrigger).click(() => {
		$(userSubMenu).slideUp(100);
		$(companySubMenu).slideUp(100);
		$(developersSubMenu).slideUp(100);
		$(businessSubMenu).slideToggle(500);
	});

	$(userMenuItemTrigger).click(() => {
		$(businessSubMenu).slideUp(100);
		$(companySubMenu).slideUp(100);
		$(developersSubMenu).slideUp(100);
		$(userSubMenu).slideToggle(500);
	});

	$(companyMenuItemTrigger).click(() => {
		$(businessSubMenu).slideUp(100);
		$(userSubMenu).slideUp(100);
		$(developersSubMenu).slideUp(100);
		$(companySubMenu).slideToggle(500);
	});
	
	$(developersMenuItemTrigger).click(() => {
		$(businessSubMenu).slideUp(100);
		$(userSubMenu).slideUp(100);
		$(companySubMenu).slideUp(100);
		$(developersSubMenu).slideToggle(500);
	});

	/*
		Smooth scroll effect at the "Industry solutions" page
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