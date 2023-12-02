"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMovieDB = {
                            count: numberOfFilms,
                            movies: {},
                            actors: {},
                            genres: [],
                            private: false                    
                        };

let getMovieName = function() {
    let movie = prompt("One of the latest movies you have watched?");
    if(!movie || movie.length < 10 || movie === null) {
        alert("Wrong answer!");
        return getMovieName();
    } 
    return movie;   
}

let getMovieRate = function () {
    let rate = prompt("How do you rate this movie from 1 to 10?");
    return rate;
}

let checkMoviesCount = function(moviesCount){
    if (moviesCount < 10) {
        alert("Not enough movies");
    } else if (moviesCount >= 10 && moviesCount < 30) {
        alert("You are classical movies watcher!");
    } else if (moviesCount >= 30) {
        alert("You are movies fan!");
    } else {
        alert("Sorry! We have error");
    }
}

for (let i = 0; i < 2; i++) {
    let movie = getMovieName();
    let rate = getMovieRate();
    personalMovieDB.movies[movie] = rate;
} 

console.log(personalMovieDB);
console.log(`Number of films: ${numberOfFilms}`);

checkMoviesCount(personalMovieDB.count);