var tablink1=document.getElementsByClassName('tablink1')[0];
var tablink2=document.getElementsByClassName('tablink2')[0];
var tab1=document.getElementById('login');
var tab2=document.getElementById('signup');
fun1();
function fun1(){
    tablink1.style.backgroundColor="transparent";
    tablink2.style.backgroundColor="rgb(238, 240, 241)";
    tablink1.style.borderTopColor="blue";
    tablink2.style.borderTopColor="white";
    tablink1.style.pointer="cursor";
    tablink2.style.pointer="pointer";
    tablink1.style.boxShadow ="none";
    tablink2.style.boxShadow ="1px 1px 5px rgba(124, 122, 122, 0.5), -1px -0px 1000px 20px rgb(124, 122, 122,.5)"
    tab1.style.display="block";
    tab2.style.display="none";
    tablink1.style.pointerEvents='none';
    tablink2.style.pointerEvents="";
}
function fun2(){
    tablink1.style.backgroundColor="rgb(238, 240, 241)";
    tablink2.style.backgroundColor="transparent";
    tablink1.style.borderTopColor="white";
    tablink2.style.borderTopColor="blue";
    tablink1.style.pointer="pointer";
    tablink1.style.pointer="cursor";
    tablink1.style.boxShadow ="0px 0px 1000px 20px rgba(124, 122, 122, 0.5), -1px -1px 5px rgb(124, 122, 122,.5)"
    tablink2.style.boxShadow ="none"
    tab1.style.display="none";
    tab2.style.display="block";
    tablink1.style.pointerEvents="";
    tablink2.style.pointerEvents='none';
}




// for clear ...

var clear_btn=document.getElementById("clear_button1");
clear_btn.onclick=function(){
    for(var j=0;j<2;j++)
    {
    document.getElementsByClassName("login_input")[j].value="";
    }
    document.getElementsByClassName("login_input")[2].checked=null;
}

var clear_btn=document.getElementById("clear_button2");
clear_btn.onclick=function(){
    
    for(var j=0;j<9;j++)
    {
        if(j==4||j==5||j==6||j==8)
        document.getElementsByClassName("input")[j].checked=null;
        else
         document.getElementsByClassName("input")[j].value="";
    }
}