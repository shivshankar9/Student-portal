

/*==================== GENERATE PDF ====================*/
// PDF generated area
var areaCv = document.getElementById('txtarea');
var tTpButton = document.getElementById('convert');
const textarea = document.querySelector("#txtarea");
const filename = document.querySelector("#filename");

function generateResume() {
    var doc = new jsPDF();
    var file = document.getElementById('filename').value;
    var splitText = doc.splitTextToSize(areaCv.value, 180);
    doc.text(15, 20, splitText);
    doc.save(file);
}

// When the button is clicked, it executes the three functions
tTpButton.addEventListener('click', () => {
    generateResume();
})

filename.addEventListener("keyup",() =>{
    if(validate() && filename.value){
        document.getElementById("fname").style.color = "yellow";
        document.getElementById("fname").innerHTML = "valid filename";
        tTpButton.disabled = checktext();
        tTpButton.style.pointerEvents = "auto";
    }else if (filename.value == ""){
        document.getElementById("fname").style.color = "yellow";
        document.getElementById("fname").innerHTML = "fill the filename";
    }else{
        document.getElementById("fname").style.color = "black";
        document.getElementById("fname").innerHTML = "invalid filename. filename should contain only letters and numbers";
        tTpButton.disabled = true;
        tTpButton.style.pointerEvents = "none";
    }
})

// Auto Resize textarea
const sizeReset = (e) => {
    textarea.style.height = "100px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
}
textarea.addEventListener("keyup", sizeReset)
textarea.addEventListener("keyup", () => {
    if (textarea.value) {
        tTpButton.disabled = checkfilename();
        tTpButton.style.pointerEvents = "auto";
    }
    else {
        tTpButton.disabled = true;
        tTpButton.style.pointerEvents = "none";
    }
})

var reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    textarea.value = "";
    textarea.style.height = "150px";
    filename.value = "";
    document.getElementById("fname").innerHTML = "";
})

// function for validating the filename
function validate(){
    var regex = /^[a-zA-Z0-9 ]+$/;
    var name = filename.value;
    if(regex.test(name)){
        return true;
    }else{
        return false;
    }
}

//function for checking the filename and to enable download button.
function checkfilename(){
    if(filename.value){
        return false;
    }else{
        return true;
    }
}

//function to check the textarea and to enable the download button.
function checktext(){
    if(textarea.value){
        return false;
    }else{
        return true;
    }
}
