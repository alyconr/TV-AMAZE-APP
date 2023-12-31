import './assets/images/heartnobg.png';
import './assets/images/heartbg.png';
import './assets/images/icons8-user-default-64.png';
import './assets/images/movie.png';
import './assets/images/cancelmodal.svg';
import { showModals } from './components/renderModals.js';
import { renderActionMovies } from './components/renderAction.js';
import { searchMovies } from './components/searchMovies.js';
import { handleRoute } from './routes/router.js';

showModals();
renderActionMovies();
searchMovies();

// Listen for the 'popstate' event to handle browser back/forward navigation
window.addEventListener('popstate', () => {
  handleRoute();
});
