document.addEventListener("DOMContentLoaded", () => {
    getFilms();
});

function getFilms() {
    let filmsList = document.getElementById('films');

    fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then((data) => {
            data.forEach(film => {
                let list = document.createElement('li');
                list.innerText = film.title;

                list.addEventListener('click', () => {
                     getFilmDetails(film);
                });

                filmsList.appendChild(list);

                console.log(film.title);
            });
        });

}

function getFilmDetails(film){

let image = document.getElementById('poster');
image.src =film.poster;


let title = document.getElementById('title')
title.innerText = `${film.title}`;

let runtime = document.getElementById('runtime')
runtime.innerText = `${film.runtime}`;

let showtime = document.getElementById('showtime')
showtime.innerText = `${film.showtime}`;


let description = document.getElementById('film-info')
description.innerText = `${film.description}`;

let movieButton=document.getElementById("btn")
let movieCapacity=document.getElementById("capacity")
movieCapacity.innerText = `${film.capacity}`;

let movieSoldTicket=document.getElementById("sold")
movieSoldTicket.innerText = `${film.tickets_sold}`;





}








