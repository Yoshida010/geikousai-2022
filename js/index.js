document.getElementById("hamburgerBtn").onclick = () => {
	console.log("ib");
	document.getElementById("hamburgerMenu").classList.toggle("hamburger-active");
	document
		.getElementById("hamburgerBtn")
		.classList.toggle("hamburger-btn-active");
};
