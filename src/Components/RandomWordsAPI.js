import axios from "axios";
const BASE_URL = 'https://random-words-api.vercel.app'

class RandomWordsAPI{

    static async getWord(){
        console.log('getting word...');
        try{

            let res = await axios.get(`${BASE_URL}/word`);
            console.log('res: ', res);
            return res.data;
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
            promises.push(await axios.get(`${BASE_URL}/word`));
        }

        Promise.all(promises).then((values)=>{

            for(let value of values){
                words.push(value.data[0]);
            }
            console.log('words: ', words);
        });

        return words;

    }
}

export default RandomWordsAPI;