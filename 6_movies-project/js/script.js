"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMovieDB = {
                            count: numberOfFilms,
                            movies: {},
                            actors: {},
                            genres: [],
                            private: false                    
                        };

for (let i = 0; i < 2; i++) {
    let movie = prompt("One of the latest movies you have watched?");
    let rate = prompt("How do you rate this movie from 1 to 10?");
    personalMovieDB.movies[movie] = rate;
} 

console.log(personalMovieDB);
console.log(`Number of films: ${numberOfFilms}`);