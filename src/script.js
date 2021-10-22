const key = process.env.apikey;

const city = 'san diego';

// URL (required), options (optional)
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`,
  { mode: 'cors' }
)
  .then((response) => {
    // Successful response :)
    if (response.status === 404) {
      return console.log('404 error');
    }
    console.log(response);
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) =>
    // Error :(
    console.log(err)
  );
