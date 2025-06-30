const logos = document.querySelectorAll('.logo');

const descriptions = {
	"Next.js": "Next.js is a Node.js framework with : React, Router, Middleware, ... <a href='https://nextjs.org/'>Next.js Website</a>",
	"Python": "",
	"Java": "",
	"Bash": "",
	"Power Platform": "",
	"Powershell": "",
	"Azure": "",
	"Sharepoint": "",
	"Arduino": "",
};

function changeDescriptions(technoName) {
	console.log(technoName);
	if (technoName in descriptions) {
		const descriptionDiv = document.querySelector('#technology-description');
		console.log(technoName, descriptionDiv);
		descriptionDiv.innerHTML = descriptions[technoName];
	}
}

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
