// const axios = require('axios');

// const HttpError = require('../models/http-error');

// const API_KEY = '8e02f05d0e5cc09494d2049ab73b5665';

async function getCoordsForAddress(address) {
  return [78.0399535, 27.1751448];

  // const response = await axios.get(
  //   `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${encodeURIComponent(
  //     address
  //   )}`
  // );

  // const data = response.data;

  // if (!data) {
  //   const error = new HttpError(
  //     'Could not find location for the specified address.',
  //     422
  //   );
  //   throw error;
  // }

  // const [{ longitude, latitude }] = data.results;
  // console.log([longitude, latitude]);

  // return [{ longitude, latitude }];
}

module.exports = getCoordsForAddress;
