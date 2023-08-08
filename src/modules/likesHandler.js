import { postLikes } from './postLikes.js';
import { getLikes } from './getLikes.js';

export const handleLikes = async () => {
  const container = document.getElementById('shows-container');

  // Set to store clicked cards by user
  const clickedCards = new Set();

  // Load previously clicked cards from LocalStorage
  const localStorageClickedCards = localStorage.getItem('clickedCards');
  if (localStorageClickedCards) {
    JSON.parse(localStorageClickedCards).forEach((cardId) => {
      clickedCards.add(cardId);
    });
  }

  container.addEventListener('click', async (event) => {
    if (event.target.id === 'likes') {
      const button = event.target;
      const { showId } = button.dataset;

      if (clickedCards.has(showId)) {
        return; // Exit if the card is already clicked by the user
      }

      try {
        // Add the card to the clicked set
        clickedCards.add(showId);

        // Save the clicked cards to LocalStorage
        localStorage.setItem('clickedCards', JSON.stringify([...clickedCards]));
        // Post the like
        await postLikes(showId);

        // Get the updated likes data
        const likes = await getLikes();

        const card = document.querySelector(`[data-show-id="${showId}"]`);
        // Find the corresponding show's likes
        const showLikes = likes.find((like) => like.item_id === showId);
        if (showLikes) {
          // Update the likes count
          const numLikesSpan = card.querySelector('.numLikes');
          numLikesSpan.textContent = showLikes.likes;

          button.style.backgroundImage = 'url("assets/images/heartbg.png")';
        }
      } catch (error) {
        console.error('Error occurred while handling likes:', error);
      } finally {
        // Re-enable the button after the request is complete
        button.disabled = false;
      }
    }
  });
};
