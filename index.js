const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss");
const { nextISSTimesForMyLocation } = require ("./iss");

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });
// fetchCoordsByIP("162.245.144.188", (error, data) => {
//   console.log('error', error);
//   console.log('data', data);
// });

// fetchMyIP((error, ip) => {
//   if(error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! ip: ", ip);
// });