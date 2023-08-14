import { handleRoute } from '../routes/router.js';

export const renderActionMovies = () => {
  try {
    const actionsLink = document.getElementById('showActionLink');
    const homeLink = document.getElementById('homeLink');
    const logoLink = document.getElementById('tvAmazeLogo');
    const comedyLink = document.getElementById('comedyLink');
    const crimeLink = document.getElementById('crimeLink');
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');

    // Call handleRoute initially to set up the correct content based on the URL path
    handleRoute();

    const closeNavBar = () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggle.click();
      }
    };

    actionsLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, 'action');
      handleRoute(); // Handle the route change
      closeNavBar();
    });

    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/home');
      handleRoute(); // Handle the route change
      closeNavBar();
    });

    logoLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, '/#');
      handleRoute(); // Handle the route change
      closeNavBar();
    });

    comedyLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, 'comedy');
      handleRoute(); // Handle the route change
      closeNavBar();
    });

    crimeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.pushState(null, null, 'crime');
      handleRoute(); // Handle the route change
      closeNavBar();
    });
  } catch (error) {
    console.log(error);
  }
};
