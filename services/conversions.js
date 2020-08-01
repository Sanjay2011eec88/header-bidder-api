const globalUtil = require('../utility/globalMemory');

class Conversions{

    static updateConversions(reqQuery){
        let conversionObj = {
            key: reqQuery.company,
            id : reqQuery.id
        };
        globalUtil.updateGlobalMemoryByKey(conversionObj);
        return true;
    }


    static getConversions(reqQuery){
        console.log(reqQuery);
        let conversionObj = {
            key: reqQuery.advertiser,
            id : reqQuery.id
        };
        return globalUtil.getGlobalMemoryByKey(conversionObj);

    }


}

module.exports = Conversions;