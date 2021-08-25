function generateArray(value){

    // commenting out in console
        
    if (value == null || value == 0 ) {
        return [0];
    }else {
        var resultArray =[];
        for( let i = 0 ; i<value;i++){
            resultArray.push(i);
        }
        return resultArray;
    }

}

export default generateArray