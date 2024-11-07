const text = document.getElementById("text");

function appendtotext(input) {
    text.value += input;
}

function clearText() {
    text.value = "";
}
function cal(event) {
    let flag = 0;

    try {
        text.value = eval(text.value);
    }
    catch (error) {
        text.value = "Error";
        alert("Please Enter numbers and correct arithmetic symbols");
        flag = 1;
    }
    if (flag == 1 && text.value == "Error" || text.value == "undefined") {

        if (confirm('Please clear the text field and enter or type anything, if you want to clear it automatically ?') == true) {
            text.value = "";
        }
        else {
            alert("Clear text manually");
        }

    }
    
}
text.addEventListener("keydown",function(event){
    let flag = 0;
    if (event.key === "Enter") {
        try {
            text.value = eval(text.value);
        }
        catch (error) {
            text.value = "Error";
            alert("Please Enter numbers and correct arithmetic symbols");
            flag = 1;
        }
        if (flag == 1 && text.value == "Error" || text.value == "undefined") {

            if (confirm('Please clear the text field and enter or type anything, if you want to clear it automatically ?') == true) {
                text.value = "";
            }
            else {
                alert("Clear text manually");
            }

        }
    }
})