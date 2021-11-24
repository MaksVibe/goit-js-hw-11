const API_KEY = "24483741-f975205992ca850031cfb75db";
const GALLERY_URL = `https://pixabay.com/api/?key=${API_KEY}`;

const fetchGallery = (photos) => {
  const queryParams = new URLSearchParams({
    access_key: API_KEY,
    query: photos,
  });

  return fetch(`${WEATHER_URL}?${queryParams}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        return Promise.reject(new Error(data.error.info));
      }
      return data;
    });
};
