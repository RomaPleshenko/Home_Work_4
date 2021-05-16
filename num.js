let age = +prompt('Введите ваш возраст:')
let message;
		if(age !== age) {
			message = 'Введите число';
		}
		else if (age % 10 === 0 || age % 10 >= 5 ||  age % 100 >= 5 && age % 100 <= 14 ) {
			message = `${age} лет`;
		}
		else if (age % 10 === 1){
			message = `${age} год`;
		}
		else if (age % 10 <= 4){
			message = `${age} года`;
		}
		alert(message);