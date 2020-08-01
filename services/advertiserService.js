const { RandomPicture } = require('random-picture');

class advertiserService{
    static async getListOfAdvertisements(reqObj){
        if('company' in reqObj && reqObj.advertiser !== ''){
            let advertisementList = [];
            const image = await RandomPicture();
            for(let i =0 ; i< 10; i++){
                let adObj = {};
                try {
                    adObj.advertismentImage = image.url;
                    adObj.cpi = this.getRandomArbitrary(0, 10);
                    adObj.id = i.toString();
                    adObj.url = "https://www.google.com";
                    adObj.company = reqObj.advertiser;
                    advertisementList.push(adObj);
                }catch (e){
                    return {statusCode: 500, message:`Something went wrong in fetcing the advertisemnets list, error : ${e}`}
                }
            }
            return {statusCode: 200, listOfAdvertisements: advertisementList}
        }else{
            return {statusCode: 404, message:`Provided advertiser not found. Please give valid advertiser id`}
        }

    }

    static getRandomArbitrary(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }
    
}

module.exports = advertiserService;