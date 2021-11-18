import axios from "axios";
const BASE_URL = 'https://random-words-api.vercel.app'

class RandomWordsAPI{

    static async request(endpoint,data={},method="get"){

        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
        ? data
        : {};

        try{
            return (await axios({url, method, data, params})).data;
        }
        catch(error){
            console.error("Random-Words-API Error:", error.response);
            let message = error.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getWord(){
        try{

            let res = await this.request('word');
            return res.data;
        }
        catch(error){
            console.error("Random-Words-API Error - couldn't get word", error.response);
            let message = error.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }

    }

}

export default RandomWordsAPI;