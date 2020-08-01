var globalMemory = {};

class GlobalUtil{
    static updateGlobalMemoryByKey(obj){
        if(obj.key in globalMemory){
            if([obj.id] in globalMemory[obj.key]){
                globalMemory[obj.key][obj.id] += 1
            }else{
                globalMemory[obj.key][obj.id] = 1
            }
        }else {
            globalMemory[obj.key] = {};
            globalMemory[obj.key][obj.id] = 1
        }

    }

    static getGlobalMemoryByKey(obj){
        console.log(globalMemory);
        console.log(obj);
        console.log(globalMemory[obj.key]);
        if(obj.key in globalMemory){
            return globalMemory[obj.key]
        }else{
            return {}
        }
    }
}

module.exports = GlobalUtil;