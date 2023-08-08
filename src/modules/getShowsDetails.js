const TV_AMAZE_API_URL = 'https://api.tvmaze.com/shows';

export const getShowsDetails = async (showId) => {
  try {
    const response = await fetch(`${TV_AMAZE_API_URL}/${showId}?Page=1`);

    if (response.ok) {
      const data = await response.json();
      return [data];
    }
    console.log('Something went wrong');
  } catch (error) {
    console.log(error);
  }
  return [];
};
