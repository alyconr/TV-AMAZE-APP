export const postLikes = async (showId) => {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BW3r2u1RsSTjsNxqB9FH/likes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: showId,
        }),
      }
    );

    if (response.ok) {
      const responseData = await response.text();
      return responseData; // Return the response text as a string
    }
    throw new Error('Failed to post like');
  } catch (error) {
    console.error('Error occurred while posting like:', error);
    throw error;
  }
};
