
// const cc  = 1;

// var b = 10;
// function fatherCallDemo(b){
//    console.log(this);  // this 指向object 
//    console.log("------------------------------");
//    function callDemo(){
//       let self = this;   //this 指向object
//       b= b +117;
//       console.log(this);
//       return b ;
//    }
//    return callDemo()
// }
// b.fatherCallDemo()




var  b = 10
function cc(b){
   var b ;
   function ccc(b){
      b += 10;
      return b;
   }
   return ccc
}
cc(b);
console.log(b)