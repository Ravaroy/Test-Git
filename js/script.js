const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('Как вы оцените этот фильм?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('Как вы оцените этот фильм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log (personalMovieDB);
