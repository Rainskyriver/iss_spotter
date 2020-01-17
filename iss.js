const request = require('request');

const fetchMyIP = function(callback) {
  request("https://api.ipify.org/?format=json", "utf8", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    callback(null, data.ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  
}

module.exports = { fetchMyIP, fetchCoordsByIP };