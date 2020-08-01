const globalUtil = require('../utility/globalMemory');

class Conversions{

    /**
     * Updates the number of clicks for an add and records it
     * @param {Object} reqQuery [Containing the details of the ads which was clicked]
     * @return {Object} [Status of the updates]
     */
    static updateConversions(reqQuery){
        let conversionObj = {
            key: reqQuery.company,
            id : reqQuery.id
        };
        globalUtil.updateGlobalMemoryByKey(conversionObj);
        return {statusCode:201, message:"Updated count successfully"};
    }

    /**
     * To get the count of each companies ads clicked
     * @return {Object} [Count of each company]
     */
    static getConversions(){
        return {statusCode:200, count :globalUtil.getAllCount()};
    }


}

module.exports = Conversions;