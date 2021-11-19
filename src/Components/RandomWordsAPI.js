import axios from "axios";
const BASE_URL = 'https://random-words-api.vercel.app'

class RandomWordsAPI{

    static async getWord(){
        console.log('getting word...');
        try{
            let res = await axios.get(`${BASE_URL}/word`);
            return res.data[0];
        }
        catch(error){
            console.error("Random-Words-API Error - couldn't get word", error.response);
            let message = error.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }

    }
    static async getWords(numWords =10){
        console.log(`getting ${numWords} words...`);
        let words = [];
        let promises = [];

        for(let i=0; i<numWords; i++){
            promises.push(await this.getWord());
        }

        return Promise.all(promises).then((values)=>{

            for(let value of values){
                words.push(value);
            }
            return words;
        });


    }
}

export default RandomWordsAPI;