// All the html elements used
const allFiles = {};
const upload = document.getElementById("upload");
const addMore = document.getElementById("addMore");
const allForms = document.getElementById("allForms");
const uploadAll = document.getElementById("uploadAll");

// Description of all the functions
const submissionFunction = (data) => {
  // perform some action
};

const addMoreInputField = () => {
  // Create a form tag
  const formTag = document.createElement("form");

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
window.onload = () => {
  addMoreInputField();
  addMore.addEventListener("click", addMoreInputField);
  uploadAll.addEventListener("click", submissionFunction);
}
