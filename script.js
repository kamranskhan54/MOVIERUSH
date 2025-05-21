// Sample movie data (in a real application, this would come from an API)
const movies = [
    {
        id: 1,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "Action",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        id: 3,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "Drama",
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: "Crime",
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        id: 5,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: "Sci-Fi",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
        id: 6,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: "Drama",
        image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
    },
    {
        id: 7,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: "Crime",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        id: 8,
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: "Sci-Fi",
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
];

// Function to create movie cards
function createMovieCard(movie) {
    return `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.genre} • ⭐ ${movie.rating}</p>
            </div>
        </div>
    `;
}

// Function to display movies in a section
function displayMovies(containerId, movies) {
    const container = document.getElementById(containerId);
    container.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
}

// Function to create trending movie cards (larger size)
function createTrendingCard(movie) {
    return `
        <div class="trending-card" data-id="${movie.id}">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="trending-info">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.genre} • ⭐ ${movie.rating}</p>
                <p class="description">${movie.description}</p>
            </div>
        </div>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display trending movies (first 4 movies)
    const trendingContainer = document.getElementById('trending-movies');
    trendingContainer.innerHTML = movies.slice(0, 4).map(movie => createTrendingCard(movie)).join('');
    
    // Display featured movies (first 6 movies)
    displayMovies('featured-movies', movies.slice(0, 6));
    
    // Display popular movies (all movies)
    displayMovies('popular-movies', movies);

    // Add click event listeners to movie cards
    document.querySelectorAll('.movie-card, .trending-card').forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.dataset.id;
            const movie = movies.find(m => m.id === parseInt(movieId));
            showMovieDetails(movie);
        });
    });

    // Add search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.genre.toLowerCase().includes(searchTerm) ||
            movie.description.toLowerCase().includes(searchTerm)
        );
        displayMovies('popular-movies', filteredMovies);
    });

    // Add category click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent;
            const filteredMovies = movies.filter(movie => 
                movie.genre.toLowerCase() === category.toLowerCase()
            );
            displayMovies('popular-movies', filteredMovies);
        });
    });

    // Add scroll event listener for navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
    });

    // Add banner button click handlers
    document.querySelector('.play-button').addEventListener('click', () => {
        const featuredMovie = movies[0];
        showMovieDetails(featuredMovie);
    });

    document.querySelector('.more-info-button').addEventListener('click', () => {
        const featuredMovie = movies[0];
        showMovieDetails(featuredMovie);
    });
});

// Function to show movie details
function showMovieDetails(movie) {
    const modal = document.createElement('div');
    modal.className = 'movie-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <img src="${movie.image}" alt="${movie.title}">
                <div class="modal-info">
                    <h2>${movie.title}</h2>
                    <p class="meta">${movie.year} • ${movie.genre} • ⭐ ${movie.rating}</p>
                    <p class="description">${movie.description}</p>
                    <button class="play-button"><i class="fas fa-play"></i> Play Now</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 