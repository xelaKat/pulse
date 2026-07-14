//api code
const API_KEY = import.meta.env.VITE_NASA_API_KEY; //import api key

document.querySelector("#app").innerHTML = "<p>loading...</p>"; //show something while loading

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`).then(response => response.json()).then(data => {
    console.log(data);
}) //fetches data, handles response, uses the data

//date selector
const date = document.querySelector("#datepicker").value;
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)


