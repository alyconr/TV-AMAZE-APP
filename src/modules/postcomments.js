export const postComments = async (showId, userName, comment) => {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BW3r2u1RsSTjsNxqB9FH/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: showId,
          username: userName,
          comment: comment,
        }),
      }
    );

    if (response.ok) {
      const responseData = await response.text();
      return responseData; // Return the response text as a string
    }
    throw new Error('Failed to post Comments');
  } catch (error) {
    console.error('Error occurred while posting Comments:', error);
    throw error;
  }
};