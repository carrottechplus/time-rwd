const numbers = document.querySelectorAll('.screen span');

setInterval(() => {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr < 10) hr = '0' + hr;
	if (min < 10) min = '0' + min;
	if (sec < 10) sec = '0' + sec;

	numbers[0].innerText = hr;
	numbers[1].innerText = min;
	numbers[2].innerText = sec;
}, 1000);
