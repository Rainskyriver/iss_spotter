const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");

fetchCoordsByIP("162.245.144.188", (error, data) => {
  console.log('error', error);
  console.log('data', data);
});
// fetchMyIP((error, ip) => {
//   if(error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! ip: ", ip);
// });