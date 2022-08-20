const navbar = document.querySelector('#mobilenav');

// if the current window width is less than 768px, then the navbar will be hidden
if (window.matchMedia("(max-width: 768px)").matches) {
	console.log('mobile');
	navbar.addEventListener('click', function() {
		console.log('clicked');
		navbar.classList.toggle('show');
	});
}