const request = require('request');

const fetchMyIP = function(callback) {
  request("https://api.ipify.org/?format=json", "utf8", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code: ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    callback(null, data.ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request("https://ipvigilante.com/json/" + ip, "utf8", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code: ${response.statusCode} when fetching coords. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const newBody = JSON.parse(body);
    const data = newBody.data;
    const latLong = {
      latitude: data.latitude,
      longitude: data.longitude
    };
    callback(null, latLong);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(url, "utf8", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code: ${response.statusCode} when fetching ISS Fly over time. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const durationRisetime = JSON.parse(body).response;
    callback(null, durationRisetime);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, nextPasses);
      });
    });
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };