const logos = document.querySelectorAll('.logo');
const buttonProjects = document.querySelectorAll('.projects-list-item');
const buttonProjectstTitles = document.querySelectorAll('.projects-list-item h4');

const descriptionProjects = {
	"project-word": {
		"descriptionEn": `<p>This project have goal to detect alls Word editable fields of Users documents, edit type of fields and content, generate Word and track the document completion on Docusign.</p>
		<p>The application work with Power Apps for the client side, Power Automate and Azure Function Apps (PowerShell) for the server side</p>`,
		"technos": ["Power Platform", "Azure", "PowerShell", "Docusign"]
	},
	"project-sharepoint": {
		"descriptionEn": `<p>Creation or integration of multiple interfaces and integration on SharePoint with SPFx (Framework for develop SharePoint widgets, menu, ...).</p>
		<p> Settings interface for admin is develop on Power Apps and Power Automate</p>`,
		"technos": ["React", "SharePoint", "Azure"]
	},
	"project-registration": {
		"descriptionEn": `<p>Conception and creation of Registration website with profil picture, payment with HelloAsso API, administration for users admission and event stats.</p>
		<p>The application use Next.js for the client/server side and Mongo DB for the database</p>`,
		"technos": ["Next.js", "Prisma", "Mongo DB"]
	},
	"project-basic-explorer": {
		"descriptionEn": `<p>Search with SQL Rocket Universe Driver the connection between files and dependencies on existing files for show correlation beetween BASIC Scripts and showing all on graph and possiblity to show dependencies and call of each script.</p>
		<p>The application use JSF with PrimeFaces component and D3.js for the representation of file graph and CodeMirror for viewing the content of file</p>`,
		"technos": ["PrimeFaces", "jsf", "D3.js"]
	},
};

const descriptionsTechnos = {
	"Next.js": "<p>Next.js is a Node.js (based on JavaScript) framework with : React, Router, Middleware, ... </p><p><a href='https://nextjs.org/'>Next.js website</a></p>",
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
 * @param {string} technoName : technology name
*/
function changeDescriptions(technoName) {
	console.log(technoName);
	if (technoName in descriptionsTechnos) {
		const descriptionDiv = document.querySelector('#technology-description');
		console.log(technoName, descriptionDiv);
		descriptionDiv.innerHTML = descriptionsTechnos[technoName];
	}
}

/**
 * Créer les images pour y mettre le logo
 * @param {string} technoName 
 */
function createLogoDiv(technosName) {
	let listLogos = "";
	technosName.forEach(technoName => {
		const logoURL = technoName.replaceAll(' ', '_').toLowerCase() + ".svg";
		listLogos += `<div class="logo"><img src="public/logo/${logoURL}" alt="${technoName}"></div>\n`;
	});		
	return listLogos;
}

/**
 * Change the information on project info part
 * @param {string} projectID 
 */
function changeProjectInformation(projectID) {
	const projectInfo = descriptionProjects[projectID];
	const descriptionDiv = document.querySelector('#project-description');
	descriptionDiv.innerHTML = projectInfo.descriptionEn;
	const technoDiv = document.querySelector('#project-techno');
	technoDiv.innerHTML = createLogoDiv(projectInfo.technos);
}

/**
 * FIXME : Does not work anymore
 * Action when the mouse go over the div
 */
function logoOnClick(eventLogo) {
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

/**
 * Manage when user click on div button project
 * @param {event onClick} eventButtonProject 
 */
function projectOnClick(eventButtonProject) {
	const projectID = eventButtonProject.target.id;
	if (!!projectID && projectID !== "") {
		changeProjectInformation(eventButtonProject.target.id);
	}
}

/**
 * Manage when user click on text project
 * @param {event onClick} eventTextProject 
 */
function projectTextOnClick(eventTextProject) {
	const projectID = eventTextProject.target.parentNode.id;
	if (!!projectID && projectID !== "") {
		changeProjectInformation(projectID);
	}
}

// Add all click listener
logos.forEach((logo) => {
	logo.addEventListener("click", logoOnClick);
});

buttonProjects.forEach((project) => {
	project.addEventListener("click", projectOnClick)
})

buttonProjectstTitles.forEach((project) => {
	project.addEventListener("click", projectTextOnClick)
})

// When the page loading, set the first elements of list
window.onload = function() {
	changeDescriptions(logos[0].firstElementChild.alt);
	changeProjectInformation(buttonProjects[0].id);
};
