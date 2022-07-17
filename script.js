/*jshint sub:true*/
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	}
}
start();

const personalMovieDB = {};
personalMovieDB['count'] = numberOfFilms;
personalMovieDB['movies'] = {};
personalMovieDB['actors'] = {};
personalMovieDB['genres'] = [];
personalMovieDB['privat'] = false;

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
	}
}
writeYourGenres();
showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
	if (personalMovieDB['count'] < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB['count'] > 30) {
		console.log("Вы киноман");
	} else {
		console.log('error');
	}
	console.log((personalMovieDB['count']));
}

rememberMyFilms();


function detectPersonalLevel() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Один из последних просмотренных фильмов?');
		let b = prompt('На сколько оцените его?');
		if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
	console.log(personalMovieDB);
}
detectPersonalLevel();