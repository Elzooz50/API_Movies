const api_key = "fe30b3cafc6d2032e8d0af0e7b95ba86";
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTMwYjNjYWZjNmQyMDMyZThkMGFmMGU3Yjk1YmE4NiIsIm5iZiI6MTcyOTAwMTkwMC41MDQ5OTk5LCJzdWIiOiI2NzBlNzlhYzQyZTEzOTFjNTY2NzE5ZTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-au-1Q1XMPjTLAduRDHUTcTcJtkCW3MboYVQLght6AA";

const base_url = "https://api.themoviedb.org/3";
const base_img = "https://image.tmdb.org/t/p/w500";
const get_movies = "discover/movie";

async function fetchMovies(api) {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
    displayData(data.results);
}
function displayData(movies) {
    const card = document.querySelector(".portfolio .row");
    console.log(movies)
    movies.map( movie => {
        const movie_overview = (movie.overview).split(" ").slice(0, 30).join(" ");
        card.innerHTML += `
        <div class="item">
            <img src="https://th.bing.com/th/id/OIP.09uDFtm_h3UFZNe1pm8pDwHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="verified">
            <img src=${base_img}${movie.poster_path} alt="Leon Template Services">
            <div class="item-content">
                <h3>${movie.title}</h3>
                <p>${movie_overview}</p>
                <div class="item-link">
                    <a href="#" target="_blank">Realese Date: <span>${movie.release_date}</span> <i class="fa-solid fa-globe"></i></a>
                </div>
            </div>
        </div>
`
    })
}
const api_url = `${base_url}/${get_movies}?api_key=${api_key}`;
const result = fetchMovies(api_url);