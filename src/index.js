import { renderShows } from './modules/renderShows.js';
import './assets/images/heartnobg.png';
import './assets/images/heartbg.png';
import './assets/images/icons8-user-default-64.png';
import './assets/images/movie.png';
import './assets/images/cancelmodal.svg';
import { showModals } from './modules/renderModals.js';
import { renderActionMovies } from './modules/renderAction.js';
import { searchMovies } from './modules/searchMovies.js';

renderShows();
showModals();
renderActionMovies();
searchMovies();