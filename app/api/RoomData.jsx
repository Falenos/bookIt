var axios = require('axios');

const ROOM_DATA_URL = 'https://challenges.1aim.com/roombooking/getrooms';

module.exports = {


  // getStuff: function () {
  //   var requestUrl = 'https://challenges.1aim.com/roombooking/';
  //   axios.get(requestUrl).then(function (response) {
  //   debugger;
  //   resultElement.innerHTML = generateSuccessHTMLOutput(response);
  //   })
  //   .catch(function (error) {
  //   debugger;
  //   resultElement.innerHTML = generateErrorHTMLOutput(error);
  //   })
  // },

  getRooms: function () {
    debugger;
    var requestUrl = ROOM_DATA_URL;
  //   var encodedLocation = encodeURIComponent(location);

    axios.post(requestUrl, {
    date: "now"
  })
  .then(function (response) {
    debugger;
    document.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
    debugger;
    document.innerHTML = generateErrorHTMLOutput(error);
  });
  }
}
