export function gfnIsNull(v){

    var reValue = false;
    
    if(v == null || v == undefined || v == ""){
        reValue = true;
    }

    return reValue;
}