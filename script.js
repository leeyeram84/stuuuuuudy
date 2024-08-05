function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <span>Rating: ${movie.vote_average}</span>
    `;
    card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
    return card;
}

function apidata () {
    const API_KEY = '347a1e2d8a5b9a2196158e7f83fa58f0';
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(URL)
    .then(response => response.json())
    
    .then(data => {
        let movieData = data.results;       // 가져온 데이터를 변수에 담음
        const movieContainer = document.getElementById('movieBox');
        movieData.forEach(element => {
            console.log(element);
            const card = createMovieCard(element);
            movieContainer.appendChild(card);
        } );
    })
    .catch(error => console.error('Error:', error));
}

// 검색창
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});