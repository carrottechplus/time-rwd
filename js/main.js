const main = document.querySelector('main');
const numbers = main.querySelectorAll('.screen span');
const [am, pm] = main.querySelectorAll('.screen em');

setInterval(() => {
	changeTheme();
	const times = getTime();
	times.forEach((num, idx) => setTime(num, idx));
}, 1000);

function changeTheme() {
	const hr = new Date().getHours();
	const data = [
		{ cond: hr >= 5 && hr < 12, name: 'morning' },
		{ cond: hr >= 12 && hr < 16, name: 'afternoon' },
		{ cond: hr >= 16 && hr < 19, name: 'evening' },
		{ cond: hr >= 19 || hr < 5, name: 'night' },
	];

	data.forEach((item) => {
		if (item.cond) {
			main.className = '';
			main.classList.add(item.name);
		}
	});

	// if (main.classList.contains('afternoon')) main.classList.add('dark');
	// else main.classList.remove('dark'); 아래 삼항연산자로 바꿈
	main.classList.contains('afternoon') ? main.classList.add('dark') : main.classList.remove('dark');
}

function getTime() {
	// 시간을 가져오는 함수
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr > 12) {
		hr = hr - 12; // 24시간 형식을 12시간 형식으로 바꿈
		am.classList.remove('on');
		pm.classList.add('on');
	} else {
		am.classList.add('on');
		pm.classList.remove('on');
	}
	return [hr, min, sec];
}

function setTime(num, index) {
	if (num < 10) num = '0' + num;
	else num = num;

	numbers[index].innerText = num;
}
