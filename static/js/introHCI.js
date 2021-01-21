'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Loading...");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
		$(".jumbotron p").fadeOut();
	});
function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color","green");
	var containingProject = $(this).closest(".project");
	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
}
$("a.thumbnail").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
