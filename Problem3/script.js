function fibonacci(){
    var input1 = 1;
    var input2 = 1;

    var i=3;
    
      while(i<101){
      input1 = input1+input2;
      console.log("i" + i + " is "+input1);
      i++;
      input2 = input2+input1;
      console.log("i" + i + " is "+input2);
      i++;
    }
}
