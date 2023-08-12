import { getShows } from './getShows.js';
import { renderShows, countShows } from './renderShows.js';

export const searchMovies = () => {
  try {
    const searchBar = document.getElementById('searchMovies');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', (event) => {
      event.preventDefault();
      const searchValue = searchBar.value.trim();
      if (searchValue !== '') {
        // Call the getShows function with the searchValue to filter the shows
        getShows().then((shows) => {
          const filteredShows = shows.filter((show) => show.name.toLowerCase().includes(searchValue.toLowerCase()));
          renderShows(false, '', filteredShows);
          countShows(filteredShows);

          // Clear the search
          searchBar.value = '';

          // Update the URL with the search query
          window.history.pushState(
            null,
            null,
            `search?query=${encodeURIComponent(searchValue)}`
          );
        });
      } else {
        // If the search bar is empty, render all TV shows (home page)
        renderShows();

        // Clear the URL query
        window.history.pushState(null, null, '/');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  searchMovies();
});
