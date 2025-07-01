const logos = document.querySelectorAll('.logo');

const descriptions = {
	"Next.js": "<p>Next.js is a Node.js (based on JavaScript) framework with : React, Router, Middleware, ... </p><p><a href='https://nextjs.org/'>Next.js Website</a></p>",
	"Python": "<p>Python is a interpreted language with flexible syntax for develop extermely speedly scritps, projects, ... </p><p><a href='https://www.python.org/'>Python website</a></p>",
	"Java": "<p>OOP Language can be transportable on other OS (Windows, Linux, MacOS, Android). It's used on a lot of popular projects </p><p><a href='https://www.java.com'>Java website</a></p>",
	"Bash": "<p>Terminal language for linux, really popular on developer community. </p><p><a href='https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html'>BASH manual</a></p>",
	"Power Platform": "<p>Low Code develop by Microsoft, Could create interface and flow with less code and more.</p><p><a href='https://www.microsoft.com/power-platform'>Power Platform website</a></p>",
	"PowerShell": "<p>Terminal language for Microsoft and replace the legacy command line.  </p><p><a href='https://learn.microsoft.com/powershell/scripting/overview?view=powershell-7.5'>PowerShell presentation</a></p>",
	"Azure": "<p>Platform who groups a lot of Microsoft services : Administration Panels, Function Apps, Synapse, ... </p><p><a href='https://azure.microsoft.com'>Azure website</a></p>",
	"SharePoint": "<p>Use for entreprise for sharing documents, forms, news, ... </p><p><a href='https://www.microsoft.com/microsoft-365/sharepoint/collaboration'>SharePoint website</a></p>",
	"Arduino": "<p>Framework in C use for embedded system like Arduino Uno, ESP32, Raspberry Pico, ... </p><p><a href='https://www.arduino.cc/'>Arduino website</a></p>",
};

/**
 * Change the description content
 */
function changeDescriptions(technoName) {
	console.log(technoName);
	if (technoName in descriptions) {
		const descriptionDiv = document.querySelector('#technology-description');
		console.log(technoName, descriptionDiv);
		descriptionDiv.innerHTML = descriptions[technoName];
	}
}

/**
 * Action when the mouse go over the div
 */
function logoOnOver(eventLogo) {
	let altName = "";
	const localName = eventLogo.target.localName;
	const className = eventLogo.target.className;
	if (localName == "img") {
		altName = eventLogo.target.alt;
	} else if (localName == "div" && className == "logo") {
		altName = eventLogo.target.firstElementChild.alt;
	}
	changeDescriptions(altName);
}

logos.forEach((logo) => {
	logo.addEventListener("mouseover", logoOnOver);
});
