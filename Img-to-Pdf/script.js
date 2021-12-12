// All the html elements used
var allFiles = {};
var upload = document.getElementById("upload");
var addMore = document.getElementById("addMore");
var allForms = document.getElementById("allForms");
var uploadAll = document.getElementById("uploadAll");

// Descrription of all the functions
var submissionFunction = (data) => {
  // perform some action
};

var addMoreInputField = () => {
  // Create a form tag
  var formTag = document.createElement("form");

  // Putting input tag inside for tag
  formTag.innerHTML =
    '<input type="text" id="imageData" placeholder="Select Image" disabled><input onclick="addFiles(event)" type="submit" id="upload" value="upload">';

  // Adding form tag to as a child in allForms
  allForms.appendChild(formTag);
};

const addFiles = (event) => {
  event.preventDefault();
  document.getElementsByTagName("span")[0].innerHTML = '<input type="file" style="display: none;" id="fileUpload">'
  document.getElementById("fileUpload").click();
  document.getElementById("fileUpload").addEventListener("change", () => {
    event.target.parentNode.childNodes[0].value = document.getElementById(
      "fileUpload"
    ).value;
  });
}

// Executing functions
addMoreInputField();
addMore.addEventListener("click", addMoreInputField);
uploadAll.addEventListener("click", submissionFunction);