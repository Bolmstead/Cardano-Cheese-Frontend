import axios from "axios";

// const BASE_URL = "http://localhost:3000"
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API. *
 */

class API {
  static async request(endpoint, method = "get") {
    console.debug("API Call:", endpoint, method);

    const url = `${BASE_URL}/${endpoint}`;


    try {
      return await axios({ url, method });
    } catch (err) {
      console.log("error in Api.js", err);
    }
  }

  // Individual API routes

  /** Get details on a product by id. */

  static async getCounts() {
    let res = await this.request(`GetCounts`);

    return res.data;
  }

  /** Get details on a product by id. */

  static async getNftDetailByName(nftId) {
    let res = await this.request(`GetNftDetails/${nftId}`);

    return res.data;
  }

  /** Get details on a product by id. */

  static async getAddressForSpecificNftSale(nftId) {
    let res = await this.request(`GetAddressForSpecificNftSale/${nftId}`);

    if (res) {
      return res.data;
    } else {
      return "error"
    }
  }

  static async GetAddressForRandomNftSale(nftId) {
    let res = await this.request(`GetAddressForRandomNftSale`);

    if (res) {
      return res.data;
    } else {
      return "error"
    }
  }

  static async getNfts() {

    let res = await this.request(`GetNfts`);
    if (res) {
      return res.data;
    } 
  }
}

export default API;
