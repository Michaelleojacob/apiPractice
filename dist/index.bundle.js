/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsS0FBSyxTQUFTLE9BQU87QUFDNUUsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaXByYWN0aWNlLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlLZXkgPSAnNmY3MTYyYjM3MDczNjZiYzZlMjNiMjg4OGY4NzVjMWInO1xuY29uc3QgY2l0eSA9ICdzYW4gZGllZ28nO1xuLy8gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD02ZjcxNjJiMzcwNzM2NmJjNmUyM2IyODg4Zjg3NWMxYlxuXG4vLyBVUkwgKHJlcXVpcmVkKSwgb3B0aW9ucyAob3B0aW9uYWwpXG5mZXRjaChcbiAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD0ke2FwaUtleX1gLFxuICB7IG1vZGU6ICdjb3JzJyB9XG4pXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vIFN1Y2Nlc3NmdWwgcmVzcG9uc2UgOilcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnNDA0IGVycm9yJyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PlxuICAgIC8vIEVycm9yIDooXG4gICAgY29uc29sZS5sb2coZXJyKVxuICApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9