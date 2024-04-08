document.addEventListener("DOMContentLoaded", () => {
    getFilms();
});
let image = document.getElementById('poster');

let title = document.getElementById('title')

let runtime = document.getElementById('runtime')


let showtime = document.getElementById('showtime')


let description = document.getElementById('film-info')

let movieButton=document.getElementById("btn")

let movieCapacity=document.getElementById("capacity")


let movieSoldTicket=document.getElementById("sold")
 
let availableTickets = document.getElementById("ticket-num")


function getFilms() {
    let filmsList = document.getElementById('films');

    fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then((data) => {
        const firstObj= data[0]
        title.textContent = firstObj.title

        const firstObj1= data[0]
        runtime.textContent = firstObj1.runtime

        const firstObj2= data[0]
        showtime.textContent = firstObj2.showtime

        const firstObj3 =data[0]
        description.textContent = firstObj3.description

        const firstObj4 = data[0]
        image.src = firstObj4.poster


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


image.src =film.poster;



title.innerText = `${film.title}`;


runtime.innerText = `${film.runtime}`;


showtime.innerText = `${film.showtime}`;


description.innerText = `${film.description}`;


movieCapacity.innerText = `${film.capacity}`;


movieSoldTicket.innerText = `${film.tickets_sold}`;


availableTickets = movieCapacity-movieSoldTicket;

}


