const apiKey = '6f7162b3707366bc6e23b2888f875c1b';
const city = 'san diego';
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6f7162b3707366bc6e23b2888f875c1b

// URL (required), options (optional)
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
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
