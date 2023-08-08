import { renderShows } from './renderShows.js';

export const renderActionMovies = () => {
  try {
    const actionsLink = document.getElementById('showActionLink');

    actionsLink.addEventListener('click', (event) => {
      event.preventDefault();
      renderShows(true); // Pass true as an argument to indicate filtering action movies
    });

    const homeLink = document.getElementById('homeLink');

    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      renderShows();
    });

    const logoLink = document.getElementById('tvAmazeLogo');

    logoLink.addEventListener('click', (event) => {
      event.preventDefault();
      renderShows();
    });

    const comedyLink = document.getElementById('comedyLink');

    comedyLink.addEventListener('click', (event) => {
      event.preventDefault();
      renderShows(false, 'Comedy');
      // Call renderShows() with filterActionMovies=false and genre='Comedy'
    });

    const crimeLink = document.getElementById('crimeLink');

    crimeLink.addEventListener('click', (event) => {
      event.preventDefault();
      renderShows(false, 'Crime');
    });
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderActionMovies();
});
