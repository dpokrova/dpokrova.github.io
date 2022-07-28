/*
function wa() {
	window.location.href whatsapp://send?phone=1234&text=Hello%20world
		https://wa.me/1234/?text=Hello%20world
}

if (document.location.pathname === '/price.html') {
	
}
*/

function goto() {
	window.location.href = '/price.html';
}

const url = window.location.pathname;
if (url === '/' || url == '/index.html') {
	console.log('bruh');
	let buttons = document.querySelectorAll('button');
	for (let button of buttons) {
		button.addEventListener('click', goto);
	}
};

if (url == '/price.html') {
	let button = document.querySelector('button')
}