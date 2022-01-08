

/*==================== GENERATE PDF ====================*/
// PDF generated area
var areaCv = document.getElementById('txtarea');
var tTpButton = document.getElementById('convert');



function generateResume() {
    var doc = new jsPDF();
    var splitText = doc.splitTextToSize(areaCv.value, 180);
    doc.text(15, 20, splitText);
    doc.save("text.pdf");
}

// When the button is clicked, it executes the three functions
tTpButton.addEventListener('click', () => {
    generateResume();
})
// Auto Resize textarea
const textarea = document.querySelector("#txtarea");
const sizeReset = (e) => {
    textarea.style.height = "100px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
}
textarea.addEventListener("keyup", sizeReset)

var reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    textarea.value = "";
    textarea.style.height = "150px";
})
