var addfile = document.querySelector(".addfile");
var pdf = document.querySelector(".pdf");

addfile.addEventListener('change', (e) => {
    console.time();
    var reader = new FileReader();
    reader.onloadend = function (event) {
        var arrayBuffer = reader.result;
        // debugger

        mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then(function (resultObject) {
            pdf.innerHTML = resultObject.value
            console.log(resultObject.value)
        })
        console.timeEnd();
    }
    reader.readAsArrayBuffer(addfile.files[0]);
})