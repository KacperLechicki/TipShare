'use strict';

const billInput = document.querySelector('.tipShare__top-input');
const peopleInput = document.querySelector('.people-input');
const tips = document.querySelector('select');
const error = document.querySelector('.tipShare__bottom-error');
const calcBtn = document.querySelector('.tipShare__bottom-calc');
const costInfo = document.querySelector('.tipShare__bottom-costInfo');
const cost = document.querySelector('.tipShare__bottom-cost');

error.style.visibility = 'hidden';

console.log(peopleInput.value);

const validate = () => {
	if (
		billInput.value == '' ||
		peopleInput.value == '' ||
		tips.value == '0'
	) {
		error.textContent = 'Uzupełnij wszystkie dane!';
		error.style.visibility = 'visible';
	} else {
		error.style.visibility = 'hidden';
	}
};

calcBtn.addEventListener('click', validate);
