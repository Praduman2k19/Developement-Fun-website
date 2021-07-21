function dis(val){ 
    document.getElementById("result").value+=val
} 
function delet()
{
    var str=document.getElementById("result").value
    var newStr = str.substring(0, str.length-1);
    document.getElementById("result").value=newStr;
}
function solve()
{   
     let x = document.getElementById("result").value 
     let y = eval(x) 
     document.getElementById("result").value= "newline";
     document.getElementById("result").value = y
}

function solve1(event)
{
    var z = event.key;
    
    if(z=='Enter'){ 
       
      solve();
    }
}
 function clr() {
     document.getElementById("result").value = "" 
}










//  //function that display value 
//  function dis(val) 
//  { 
//      document.getElementById("result").value+=val 
//  } 
   
//  //function that evaluates the digit and return result 
//  function solve() 
//  { 
//      let x = document.getElementById("result").value 
//      let y = eval(x) 
//      document.getElementById("result").value = y 
//  } 
   
//  //function that clear the display 
//  function clr() 
//  { 
//      document.getElementById("result").value = "" 
//  } 