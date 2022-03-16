document.addEventListener('mousemove', function(e) {
	let center = document.querySelector('.center_dot');
	let x = e.offsetX;
	let y = e.offsetY;
	center.style.left = x + 'px';
	center.style.top = y + 'px';
});

document.addEventListener('mouseleave', function(e) {
	let center = document.querySelector('.center_dot');
	center.style.top = '50%';
	center.style.left = '50%';	
});