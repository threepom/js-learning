"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMovieDB = {
                            count: numberOfFilms,
                            movies: {},
                            actors: {},
                            genres: [],
                            private: false ,
                            getMovieName: function() {
                                let movie = prompt("One of the latest movies you have watched?");
                                if(!movie || movie.length < 10 || movie === null) {
                                    alert("Wrong answer!");
                                    return this.getMovieName();
                                } 
                                return movie;
                            },
                            getMovieRate: function() {
                                let rate = prompt("How do you rate this movie from 1 to 10?");
                                return rate;
                            },
                            checkMoviesCount: function(moviesCount){
                                if (moviesCount < 10) {
                                    alert("Not enough movies");
                                } else if (moviesCount >= 10 && moviesCount < 30) {
                                    alert("You are classical movies watcher!");
                                } else if (moviesCount >= 30) {
                                    alert("You are movies fan!");
                                } else {
                                    alert("Sorry! We have error");
                                }
                            },
                            writeYourGenres: function () {                        
                                for (let i = 0; i < 3; i++) {
                                    let genre = prompt(`Your favorite genre number ${i + 1}?`); 
                                    if (genre === '' || genre == null) {
                                        alert(`Input is incorrect`);
                                        i--;
                                    } else {
                                        personalMovieDB.genres[i] = genre;
                                    }                                       
                                }

                                this.genres.forEach((item, i) => {
                                    console.log(`Favorite genre #${i + 1} is ${item}`);
                                });
                            },
                            showMyDB: function() {
                                if (personalMovieDB.private === false) {
                                    console.log(`Movies DB:`);
                                    console.log(personalMovieDB);
                                }
                            },
                            toggleVisibleMyDB: function() {
                                if (this.private) {
                                    this.private = false;
                                } else {
                                    this.private = true;
                                }
                            }                   
                        };

for (let i = 0; i < 2; i++) {
    let movie = personalMovieDB.getMovieName();
    let rate = personalMovieDB.getMovieRate();
    personalMovieDB.movies[movie] = rate;
} 

console.log(personalMovieDB);
console.log(`Number of films: ${numberOfFilms}`);

personalMovieDB.checkMoviesCount(personalMovieDB.count);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();