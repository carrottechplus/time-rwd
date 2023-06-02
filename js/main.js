const main = document.querySelector('main');
const numbers = main.querySelectorAll('.screen span');
const [am, pm] = main.querySelectorAll('.screen em');
// console.log([am, pm]);

setInterval(() => {
	changeTheme();
	const times = getTime();
	times.forEach((num, idx) => setTime(num, idx));
}, 1000);

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

function changeTheme() {
	const hr = new Date().getHours();
	// console.log(hr);

	if (hr >= 5 && hr < 11) {
		main.className = ''; //초기화
		main.classList.add('morning');
	}

	if (hr >= 11 && hr < 16) {
		main.className = ''; //초기화
		main.classList.add('afternoon');
	}

	if (hr >= 16 && hr < 19) {
		main.className = ''; //초기화
		main.classList.add('evening');
	}

	if (hr >= 19 || hr < 5) {
		main.className = ''; //초기화
		main.classList.add('night');
	}
}
