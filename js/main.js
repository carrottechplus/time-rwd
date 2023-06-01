const numbers = document.querySelectorAll('.screen span');

setInterval(() => {
	const times = getTime();
	times.forEach((num, idx) => setTime(num, idx));
}, 1000);

function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	return [hr, min, sec];
}

function setTime(num, index) {
	if (num < 10) num = '0' + num;
	else num = num;

	numbers[index].innerText = num;
}
