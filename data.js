//Hardcode some data for movies and directors
let movies = [{
    id: 1,
    name: "Movie 1",
    year: 2018,
    directorId: 1
},
{
    id: 2,
    name: "Movie 2",
    year: 2017,
    directorId: 1
},
{
    id: 3,
    name: "Movie 3",
    year: 2016,
    directorId: 3
}
];

let directors = [{
    id: 1,
    name: "Director 1",
    age: 20
},
{
    id: 2,
    name: "Director 2",
    age: 30
},
{
    id: 3,
    name: "Director 3",
    age: 40
}
];

exports.movies = movies;
exports.directors = directors;