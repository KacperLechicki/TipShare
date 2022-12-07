'use strict';

const billInput = document.querySelector('.tipShare__top-input');
const peopleInput = document.querySelector('.people-input');
const tips = document.querySelector('select');
const error = document.querySelector('.tipShare__bottom-error');
const calcBtn = document.querySelector('.tipShare__bottom-calc');
const costInfo = document.querySelector('.tipShare__bottom-costInfo');
const cost = document.querySelector('.tipShare__bottom-cost');
const resetBtn = document.querySelector('.tipShare__bottom-reset');

error.style.visibility = 'hidden';

console.log(peopleInput.value);

const validate = () => {
	if (billInput.value == '' || peopleInput.value == '') {
		error.textContent = 'Uzupełnij wszystkie dane!';
		error.style.visibility = 'visible';
		cost.textContent = '';
	} else {
		error.style.visibility = 'hidden';
		calc();
	}
};

const calc = () => {
	const bill = parseFloat(billInput.value);
	const people = parseInt(Math.floor(peopleInput.value));
	const tip = parseFloat(tips.value);

	const price = (bill + bill * tip) / people;
	cost.textContent = price.toFixed(2).toString();
};

const resetInputs = () => {
	billInput.value = '';
	peopleInput.value = '';
	tips.value = '0';
	cost.textContent = '';
	error.style.visibility = 'hidden';
};

calcBtn.addEventListener('click', validate);
resetBtn.addEventListener('click', resetInputs);
