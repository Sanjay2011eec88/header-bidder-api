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
        if(obj.key in globalMemory){
            return globalMemory[obj.key]
        }else{
            return {}
        }
    }

    static getAllCount(){
        return globalMemory;
    }
}

module.exports = GlobalUtil;