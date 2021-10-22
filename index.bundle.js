/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
const key = "6f7162b3707366bc6e23b2888f875c1b";

const city = 'san diego';

const myfunc = (data) => {
  console.log(data.timezone);
};

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
    myfunc(response);
  })
  .catch((err) =>
    // Error :(
    console.log(err)
  );

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsWUFBWSxrQ0FBa0I7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELEtBQUssU0FBUyxJQUFJO0FBQ3pFLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaXByYWN0aWNlLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5hcGlrZXk7XG5cbmNvbnN0IGNpdHkgPSAnc2FuIGRpZWdvJztcblxuY29uc3QgbXlmdW5jID0gKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YS50aW1lem9uZSk7XG59O1xuXG4vLyBVUkwgKHJlcXVpcmVkKSwgb3B0aW9ucyAob3B0aW9uYWwpXG5mZXRjaChcbiAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD0ke2tleX1gLFxuICB7IG1vZGU6ICdjb3JzJyB9XG4pXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vIFN1Y2Nlc3NmdWwgcmVzcG9uc2UgOilcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnNDA0IGVycm9yJyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgbXlmdW5jKHJlc3BvbnNlKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+XG4gICAgLy8gRXJyb3IgOihcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gICk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=