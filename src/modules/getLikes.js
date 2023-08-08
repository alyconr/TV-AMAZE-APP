export const getLikes = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BW3r2u1RsSTjsNxqB9FH/likes'
      );

      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else {
        reject(new Error('Something went wrong'));
      }
    } catch (error) {
      reject(error);
    }
  });
};
