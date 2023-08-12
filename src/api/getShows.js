export const getShows = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows?page=1');

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    console.log('Something went wrong');
  } catch (error) {
    console.log(error);
  }
  return [];
};