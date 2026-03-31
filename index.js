let display=document.getElementById("display");
function appendValue(value){
    if(display.value=="error" ){
        display.value="";
    }else{
        display.value +=value;
    }
    
}


function clearDisplay(){
    display.value="";

}

function clearValue(){
   
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value);
    } catch(error){
        display.value="error ";
    }
    /*finally{
        display.value="wrong expresion";  
    }*/
}