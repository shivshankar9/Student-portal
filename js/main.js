

/*==================== GENERATE PDF ====================*/ 
// PDF generated area
var areaCv = document.getElementById('txtarea');

var tTpButton = document.getElementById('convertBTN');



function generateResume(){
    var doc = new jsPDF();
    var splitText = doc.splitTextToSize(areaCv.value, 180);
    doc.text(15, 20, splitText);
    doc.save("text.pdf");
}

// When the button is clicked, it executes the three functions
tTpButton.addEventListener('click', () =>{
    generateResume();
})
// Auto Resize textarea
const textarea = document.querySelector("#txtarea");
        textarea.addEventListener("keyup", e =>{
          textarea.style.height = "100px";
          let scHeight = e.target.scrollHeight;
          textarea.style.height = `${scHeight}px`;
        });