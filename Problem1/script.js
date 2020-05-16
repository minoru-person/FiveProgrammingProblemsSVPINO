var array = [1,2,3,4,5];

var x = 0;

// using for loop

for (var i=0; i<array.length; i++){
    x = x + array[i];
}

console.log(x);

var y = 0;
var i = 0;

//Using while loop

while(i<array.length){
    y = y + array[i];
    i++;
}

console.log(y);

function sumTotal(array, numberOfElements){
    if (numberOfElements == 1){
	return array[0];
    } else {
	return array[numberOfElements-1] + sumTotal(array,numberOfElements-1);	
    }
}

// example for problem 1
console.log(sumTotal(array,5));
