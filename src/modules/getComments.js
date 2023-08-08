export const getComments = async (showId) => {
  try {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BW3r2u1RsSTjsNxqB9FH/comments?item_id=${showId}`
    );

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } if (response.status === 400) {
      console.log('There are no comments to display');
      return [];
    }
    throw new Error('Something went wrong'); // Throw an error for other unexpected status codes
  } catch (error) {
    console.log('Error occurred while fetching comments:', error);
    return [];
  }
};
