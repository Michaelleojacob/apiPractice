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
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsS0FBSyxTQUFTLE9BQU87QUFDM0UsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaXByYWN0aWNlLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlLZXkgPSAnNmY3MTYyYjM3MDczNjZiYzZlMjNiMjg4OGY4NzVjMWInO1xuY29uc3QgY2l0eSA9ICdzYW4gZGllZ28nO1xuLy8gaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD02ZjcxNjJiMzcwNzM2NmJjNmUyM2IyODg4Zjg3NWMxYlxuXG4vLyBVUkwgKHJlcXVpcmVkKSwgb3B0aW9ucyAob3B0aW9uYWwpXG5mZXRjaChcbiAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPSR7YXBpS2V5fWAsXG4gIHsgbW9kZTogJ2NvcnMnIH1cbilcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gU3VjY2Vzc2Z1bCByZXNwb25zZSA6KVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCc0MDQgZXJyb3InKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+XG4gICAgLy8gRXJyb3IgOihcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gICk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=