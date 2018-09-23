export function validateAllFields(itemState){
    let result = true;
    for (let prop in itemState){
        if(itemState[prop] === null || itemState[prop]==""){
            result = false;
        }
    }
    return result;
}