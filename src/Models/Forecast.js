/**
 * Forcasts class
 *
 * @export
 * @class Forecasts
 */
export default class Forecast {
  static async getForcasts({ city, region }) {
    let response = await fetch("http://localhost:3000/", {
      headers: { city, region }
    });

    // check if something went wrong with the request.
    if (response.status !== 200) {
      throw new Error("something went wrong");
    }
    let responseData = await response.json();
    return responseData;
  }
}
