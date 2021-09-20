import axios from "axios";

const BASE_URL = "https://api.nft-maker.io";
const API_KEY = process.env.REACT_APP_NFT_MAKER_API_KEY;
const NFT_PROJECT_ID = process.env.REACT_APP_NFT_PROJECT_ID;

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API. *
 */

class API {
  static async request(endpoint, method = "get") {
    console.debug("API Call:", endpoint, method);

    const url = `${BASE_URL}/${endpoint}`;

    console.log("api url", url)

    try {
      return await axios({ url, method });
    } catch (err) {
      console.log("error in Api.js", err);
    }
  }

  // Individual API routes

  /** Get details on a product by id. */

  static async getCounts() {
    console.log("API_KEY", API_KEY);
    console.log("BASE_URL", BASE_URL);

    console.log("NFT_PROJECT_ID", NFT_PROJECT_ID);

    let res = await this.request(`GetCounts/${API_KEY}/${NFT_PROJECT_ID}`);
    console.log("result from getCounts()", res);

    return res;
  }

  /** Get details on a product by id. */

  static async getNftDetail(nftId) {
    let res = await this.request(
      `GetNftDetailsById/${API_KEY}/${NFT_PROJECT_ID}/${nftId}`
    );
    console.log("result from getNftDetail()", res);

    return res;
  }

  /** Get details on a product by id. */

  static async mintAndSendRandom(numOfNfts, receiverAddress) {
    let res = await this.request(
      `MintAndSendRandom/${API_KEY}/${NFT_PROJECT_ID}/${numOfNfts}/${receiverAddress}`
    );
    console.log("result from mintAndSendRandom()", res);

    return res;
  }

  static async getNfts() {
    let res = await this.request(`GetNfts/${API_KEY}/${NFT_PROJECT_ID}/all`);
    console.log("result from getNfts()", res);
    return res;
  }
}

export default API;
