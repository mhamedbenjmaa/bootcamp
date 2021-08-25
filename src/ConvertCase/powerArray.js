
function powerArray(inputArray,inputValue){

    // commenting out in console
    
    // check the length of the array 
   //if(inputArray.length > inputValue
   if (inputValue<=0 || inputArray.length < inputValue){
       return (-1);
   }else {

    const val = inputArray[inputValue];
    
    return (val*val) ;
   }

}

export default powerArray