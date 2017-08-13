function hendler() {
	var hamburger = document.querySelector('.hamburger');
	console.log(hamburger);

	function openMenu(){
		var menu = hamburger.nextElementSibling;
		console.log(menu);
		menu.classList.toggle('open');
	}
	hamburger.addEventListener('click',openMenu);
}
document.addEventListener('DOMContentLoaded',hendler);