import { getShows } from '../api/getShows.js';
import { handleLikes } from '../utils/likesHandler.js';
import { getLikes } from '../api/getLikes.js';
import { showCards } from '../utils/templates.js';

export const countShows = async (getShows) => {
  const numShowsSpan = document.getElementById('numShows');
  if (numShowsSpan) {
    numShowsSpan.textContent = `(${getShows.length})`;
  }
};
export const renderShows = async (
  filterActionMovies = false,
  genreFilter = '',
  customShows = []
) => {
  try {
    let shows;
    if (customShows.length > 0) {
      shows = customShows;
    } else {
      shows = await getShows();
      countShows(shows);
    }
    const container = document.getElementById('shows-container');
    const pagination = document.querySelector('.pagination');

    const likes = await getLikes();

    const clickedCards = JSON.parse(localStorage.getItem('clickedCards')) || [];

    const cardsPerPage = 16;
    let currentPage = 1;
    let startIndex = (currentPage - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;

    const updatePagination = (filteredShows) => {
      pagination.innerHTML = '';

      // Determine the total number of pages based on the filtered shows
      const totalPages = Math.ceil(filteredShows.length / cardsPerPage);
      const maxDisplayPages = 5; // Maximum number of pagination links to display
      let startPage;
      let endPage;

      if (totalPages <= maxDisplayPages) {
        startPage = 1;
        endPage = totalPages;
      } else if (currentPage <= 2) {
        startPage = 1;
        endPage = maxDisplayPages;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - maxDisplayPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageItem = createPaginationItem(i, i === currentPage);
        pagination.appendChild(pageItem);
      }

      if (currentPage < totalPages) {
        const nextPageItem = createPaginationItem('Next');
        pagination.appendChild(nextPageItem);
      }
    };

    const renderCards = (filteredShows) => {
      container.innerHTML = '';

      // Get the current shows to display based on the current page and filtered shows
      const currentShows = filteredShows.slice(startIndex, endIndex);

      currentShows.forEach((show) => {
        const card = document.createElement('div');
        card.classList.add(
          'col',
          'col-sm-6',
          'col-md-4',
          'col-lg-3',
          'gx-4',
          'gy-4'
        );
        card.dataset.showId = show.id;
        card.innerHTML = showCards(show);
        const heartImg = card.querySelector('.heartbg');

        clickedCards.forEach((cardId) => {
          if (cardId.includes(show.id)) {
            const img = document.createElement('img');
            img.src = 'assets/images/heartbg.png';
            img.style.width = '30px';
            img.style.height = '30px';
            img.style.marginTop = '-6px';
            img.style.marginLeft = '-12px';
            heartImg.appendChild(img);
          }
        });

        container.appendChild(card);
      });

      updatePagination(filteredShows);
    };

    const updateLikesCount = () => {
      const likesSpans = document.getElementsByClassName('numLikes');
      Array.from(likesSpans).forEach((span) => {
        const showId = span.id.split('_')[1];
        const showLikes = likes.find((like) => like.item_id === showId);
        if (showLikes) {
          span.textContent = showLikes.likes;
        }
      });
    };

    const handlePageClick = (event, filteredShows) => {
      event.preventDefault();
      const targetPage = event.target.innerText;

      if (targetPage === 'Previous' && currentPage > 1) {
        currentPage--;
      } else if (targetPage === 'Next' && endIndex < shows.length) {
        currentPage++;
      } else if (!Number.isNaN(parseInt(targetPage))) {
        currentPage = parseInt(targetPage);
      }

      startIndex = (currentPage - 1) * cardsPerPage;
      endIndex = startIndex + cardsPerPage;

      renderCards(filteredShows);
      updateLikesCount(); // Update the likes count after rendering the cards
    };

    const createPaginationItem = (content, isActive = false) => {
      const pageItem = document.createElement('li');
      pageItem.classList.add('page-item');
      if (isActive) {
        pageItem.classList.add('active');
      }
      const pageLink = document.createElement('a');
      pageLink.classList.add('page-link');
      pageLink.href = '#';
      pageLink.innerText = content;
      pageItem.appendChild(pageLink);
      return pageItem;
    };

    if (filterActionMovies) {
      // Fetch shows and filter action movies only when filterActionMovies is true
      const filteredActionMovies = shows.filter((show) => show.genres.includes('Action'));
      pagination.removeEventListener('click', handlePageClick); // Remove previous event listener
      pagination.addEventListener('click', (event) => handlePageClick(event, filteredActionMovies));
      renderCards(filteredActionMovies);
      countShows(filteredActionMovies);
    } else if (genreFilter === 'Comedy') {
      // Fetch shows and filter by 'Comedy' genre when genreFilter is 'Comedy'
      const filteredComedyShows = shows.filter((show) => show.genres.includes('Comedy'));
      pagination.removeEventListener('click', handlePageClick); // Remove previous event listener
      pagination.addEventListener('click', (event) => handlePageClick(event, filteredComedyShows));
      renderCards(filteredComedyShows);
      countShows(filteredComedyShows);
    } else if (genreFilter === 'Crime') {
      // Fetch shows and filter by 'Crime' genre when genreFilter is 'Crime'
      const filteredCrimeShows = shows.filter((show) => show.genres.includes('Crime'));
      pagination.removeEventListener('click', handlePageClick); // Remove previous event listener
      pagination.addEventListener('click', (event) => handlePageClick(event, filteredCrimeShows));
      renderCards(filteredCrimeShows);
      countShows(filteredCrimeShows);
    } else {
      // Initially render all TV shows
      pagination.removeEventListener('click', handlePageClick); // Remove previous event listener
      pagination.addEventListener('click', (event) => handlePageClick(event, shows));
      renderCards(shows);
    }

    updateLikesCount(); // Update the likes count initially
  } catch (error) {
    console.error('Error occurred while rendering shows:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderShows();
  handleLikes();
});
