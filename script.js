const logos = document.querySelectorAll('.logo');

console.log(logos);

function logoOnOver(eventLogo) {
	let altName = eventLogo.relatedTarget.alt;
	if (!altName) {
		altName = eventLogo.firstElementChild;
		if (!altName) {
			console.log(eventLogo);
			altName = "No name";
		}
	}
	console.log(altName);
}

logos.forEach((logo) => {
	logo.addEventListener("mouseover", logoOnOver);
});
