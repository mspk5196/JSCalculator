const text=document.getElementById("text");

function appendtotext(input){
    text.value+=input;
}

function clearText(){
    text.value="";
}
function cal(){
    try{
        text.value=eval(text.value);
    }
    catch(error)
    {
        text.value="Error";
        alert("Please Enter numbers and correct arithmetic symbols");
        flag=1;
    }
    if(flag==1){
        if(text.value=="Error"){
            if(confirm('Please clear the text field and enter, if you want to clear it automatically ?')==true){
                text.value="";
            }
            else{
                alert("Clear text manually");
            }
        }
    }
}