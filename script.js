const logos = document.querySelectorAll('.logo');

function logoOnOver(eventLogo) {
	let altName = "";
	const localName = eventLogo.target.localName;
	const className = eventLogo.target.className;
	if (localName == "img") {
		altName = eventLogo.target.alt;
	} else if (localName == "div" && className == "logo") {
		altName = eventLogo.target.firstElementChild.alt;
	}
}

logos.forEach((logo) => {
	logo.addEventListener("mouseover", logoOnOver);
});
