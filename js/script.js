const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* if (personalMovieDB.count < 10){
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    console.log ("Вы классный зритель");
} else if (personalMovieDB.count > 30){
    console.log ("Вы киноман");
} else {
    console.log ("Произошла ошибка");
} */

/* let checking = 
    (personalMovieDB.count < 10) ? "Просмотрено довольно мало фильмов" :
    (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) 
    ? "Вы классный зритель" :
    (personalMovieDB.count > 30) ? "Вы киноман" :
    "Произошла ошибка";

console.log (checking); */

/* let a;

do {
    a = prompt('Один из просмотренных фильмов?', '');

} while (a === '' || a.length > 50); */


switch (true) {
    case personalMovieDB.count < 10:
        console.log ("Просмотрено довольно мало фильмов");
        break;
    case personalMovieDB.count > 10 && personalMovieDB.count < 30:
        console.log ("Вы классный зритель");
        break;
    case personalMovieDB.count > 30:
        console.log ("Вы киноман");
        break;
    default:
        console.log ("Произошла ошибка");
} 



for (let i =0; i < 10; i++){
    let a = prompt('Один из просмотренных фильмов?', '');
    let b = prompt('Как вы оцените этот фильм?', '');
    let c = prompt('Один из просмотренных фильмов?', '');
    let d = prompt('Как вы оцените этот фильм?', '');
        if (a === '' || a.length > 50){
            console.log ("Введите корректные данные");
            continue;
        } else if (b === '' || b.length > 50){
            console.log ("Введите корректные данные");
            continue;
        } else if (c === '' || c.length > 50){
            console.log ("Введите корректные данные");
            continue;
        } else if (d === '' || d.length > 50){
            console.log ("Введите корректные данные");
            continue;
        } else {
            personalMovieDB.movies[a] = b;
            personalMovieDB.movies[c] = d;
            break;
        }   
}


console.log (personalMovieDB);
