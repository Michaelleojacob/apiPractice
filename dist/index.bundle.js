/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
const key = "6f7162b3707366bc6e23b2888f875c1b";

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsWUFBWSxrQ0FBa0I7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsS0FBSyxTQUFTLElBQUk7QUFDekUsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaXByYWN0aWNlLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5hcGlrZXk7XG5cbmNvbnN0IGNpdHkgPSAnc2FuIGRpZWdvJztcblxuLy8gVVJMIChyZXF1aXJlZCksIG9wdGlvbnMgKG9wdGlvbmFsKVxuZmV0Y2goXG4gIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9JHtrZXl9YCxcbiAgeyBtb2RlOiAnY29ycycgfVxuKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyBTdWNjZXNzZnVsIHJlc3BvbnNlIDopXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJzQwNCBlcnJvcicpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT5cbiAgICAvLyBFcnJvciA6KFxuICAgIGNvbnNvbGUubG9nKGVycilcbiAgKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==