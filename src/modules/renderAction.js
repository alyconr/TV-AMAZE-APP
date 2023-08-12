import { renderShows } from './renderShows.js';
import { handleRoute } from './router.js';

export const renderActionMovies = () => {
  try {
    const actionsLink = document.getElementById('showActionLink');
    const homeLink = document.getElementById('homeLink');
    const logoLink = document.getElementById('tvAmazeLogo');
    const comedyLink = document.getElementById('comedyLink');
    const crimeLink = document.getElementById('crimeLink');

    // Call handleRoute initially to set up the correct content based on the URL path
    handleRoute();

    actionsLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, 'action');
      renderShows(true); // Render action movies
      handleRoute(); // Handle the route change
    });

    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/home');
      renderShows(); // Render all shows (home page)
      handleRoute(); // Handle the route change
    });

    logoLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/#');
      renderShows(); // Render all shows (home page)
      handleRoute(); // Handle the route change
    });

    comedyLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, 'comedy');
      renderShows(false, 'Comedy'); // Render comedy shows
      handleRoute(); // Handle the route change
    });

    crimeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, 'crime');
      renderShows(false, 'Crime'); // Render crime shows
      handleRoute(); // Handle the route change
    });
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderActionMovies();
});
