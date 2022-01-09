function addnumbers(num){
    var myArray =[];
    var sum = 0;
    for (var i = 0; i <=num; i++){
       
        if((i % 3 == 0) || (i%5 ==0 )){
         
         myArray.push(i)
        }
    
  }
   
   for (let j = 0; j < myArray.length; j++){
       sum +=myArray[j]
   }
   //return sum;
   document.getElementById("demo").innerHTML = sum;
   
 }
 function tips(bill,guest,percentage){
   bg = bill / guest
   per = bg * (percentage/100)
   tips = per * guest 
   
   //return tips 
   document.getElementById("demo1").innerHTML = tips;
 }
 function palindrome(string){
   var firstChar = string[0];
   var lastCharacter = string[string.length - 1];
 
     if (firstChar == lastCharacter){
        // return "yes it is Palindrome"
         document.getElementById("demo2").innerHTML = "yes it is Palindrome";
     }
         
     else{
          //return "it is not Palindrome"
          document.getElementById("demo2").innerHTML = "it is not Palindrome";
     }
         
 
 }
   
 
 //string = "lol"
 //console.log(palindrome(string))
 //console.log(tips(160,4,10))
 //console.log(addnumbers(1000))
 