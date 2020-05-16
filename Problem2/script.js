function combineArray(array1, array2){

    var newArray =[];

    if(array1.length == array2.length){
	
    for(var i=0; i<array1.length; i++){
        newArray.push(array1[i]);
	newArray.push(array2[i]);
    }
	
    } else if(array1.length>array2.length){
	
	for(var i=0; i<array2.length; i++){
            newArray.push(array1[i]);
	    newArray.push(array2[i]);
	}

	for(var j=array2.length; j<array1.length; j++){
	    newArray.push(array1[j]);
	}

    } else if(array2.length>array1.length){

	for(var i=0; i<array1.length; i++){
            newArray.push(array1[i]);
	    newArray.push(array2[i]);
	}

	for(var j=array1.length; j<array2.length; j++){
	    newArray.push(array2[j]);
	}

    }

console.log(newArray);
}


// example for problem 2
combineArray([1,2,3,4,5,6,7],[1,2,3,4,5,6,7,8,9,10]);
