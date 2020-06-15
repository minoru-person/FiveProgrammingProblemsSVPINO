function problemFour(array1){

  // Convert Array to strings for comparison purposes    
    array1 = array1.toString();
    array1 = array1.split(",");

// Compare the "sum" of the two arrays in order and reversed. 
// Switch accordingly to make the biggest "sum".
// e.g  if array[0]+array[1]<array[1]+array[0], swich array[0] with array[1].  
// iterate through the entire array once and again until you sort through the entire array element.
    
for(var j=0; j<array1.length; j++){
    for(var i=0; i<array1.length; i++){
	if(Number(array1[i]+array1[i+1])<Number(array1[i+1]+array1[i])){
	    var holder = array1[i];
	    array1[i] = array1[i+1];
	    array1[i+1] = holder;
	}
    }
}
    //Final Answer   
    console.log(array1);
}

problemFour([50,9,2,1]);
