// contains all code necessary for generating a universal header
// put no code here NOT necessary for the header; make new file instead
"use strict"; // makes better errors
(function() { // avoid global declaration
	
	const navLinks = [
		["Home", "/index.html"],
		["Press", "/videos.html"],
		["Forms", "/forms.html"],
		["Logos", "/logos/index.html"],
		["FAQ","/faq.html"],
		["About", "/about.html"]
	];
	
	// 	STRUCTURE OF HEADER:
	//	body
	//	 header
	//	  logo
	//	  navBar
	//	   div
	//	    a (link)
	//	   div
	//	    a (link)
	//	   ...
	
	// encapsulated setup
	(function() {
		let header = document.querySelector("header");
		
		// logo
		let logo = document.createElement("img");
		logo.id = "logo";
		logo.alt = "Valhallabots - Team 3268";
		logo.src = window.location.origin + "/logos/Logo_Text.png";
		header.appendChild(logo);
		
		// navigation bar
		let navBar = document.createElement("div");
		navBar.id = "navBar";
		header.appendChild(navBar);
		// links in navigation bar
		for (let i = 0; i < navLinks.length; i++) {
			let navLinkDiv = document.createElement("div");
			let navLink = document.createElement("a");
			navLink.innerHTML = navLinks[i][0];
			navLink.href = navLinks[i][1];
			navBar.appendChild(navLink);
			navLinkDiv.appendChild(navLink);
			navBar.appendChild(navLinkDiv);
		}
		
	})();
	
})();