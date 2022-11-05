

const myfunc=()=>{
    var x=document.getElementById("menu");
    var y=document.getElementById("crossburger");

    if(x.style.display=="none"){
        x.style.display="block";
        y.innerHTML="X";
    } else{
        x.style.display="none";
        y.innerHTML="&#9776;";
    }
}

function seterror(id,error){
element=document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function clearerror(){
    clear=document.getElementsByClassName('formerror');
    for(key of clear){
        key.innerHTML="";
    }
}

function validateform(){
    clearerror();
// var returnval=true;
  var  name=document.forms["myform"]["fname"].value;
  if(name.length < 2){
    seterror("name","*letter must be more than 2");
    // returnval=false;
  }
 
  var number=document.forms["myform"]["fnum"].value;
  if(number.length !=10){
    seterror("number","*contact length should be 10 digit")
  }
//   return returnval;
}

