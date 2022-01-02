// All the html elements used
const addMore = document.getElementById("addMore");
const allUploads = document.getElementById("all-uploads");
const uploadAll = document.getElementById("uploadAll");

// Data used throughout the functions
const allFiles = {};
let uploadStaticId = 0;

// Description of all the functions
const submissionFunction = () => {
  event.preventDefault()
  // perform some action with all files
  console.log(Object.values(allFiles));
};

const addMoreInputField = () => {
  event.preventDefault();
  // Create a form tag
  const divTag = document.createElement("div");
  divTag.classList.add('upload');
  divTag.id = 'upload-' + uploadStaticId;

  // Putting input tag inside for tag
  divTag.innerHTML = `
    <input type="text" placeholder="Select Image" class="value-box" disabled>
    <input onclick="addFiles(${uploadStaticId})" type="submit" value="upload">
    <button class="remove-button" onclick="removeUpload(${uploadStaticId})" type="button">X</button>
  `;

  // Adding form tag to as a child in allUploads
  allUploads.appendChild(divTag);
  uploadStaticId++;
};

const removeUpload = (number) => {
  const target = document.getElementById('upload-' + number);
  if(allUploads.children.length === 1) return;
  target.parentNode.removeChild(target);
  delete allFiles['upload-' + number];
}

const addFiles = (number) => {
  event.preventDefault();
  document.getElementsByTagName("span")[0].innerHTML = '<input type="file" style="display: none;" id="fileUpload">'
  document.getElementById("fileUpload").click();
  document.getElementById("fileUpload").addEventListener("change", () => {
    const box = document
      .getElementById('upload-' + number)
      .getElementsByClassName('value-box')[0];
    // TODO: fix the result displayed "C:/fakepath/FILENAME"
    const value = document.getElementById("fileUpload").value;
    allFiles['upload-' + number] = value;
    box.value = value;
  });
}

// Executing functions
window.onload = () => {
  addMoreInputField();
  addMore.addEventListener("click", addMoreInputField);
  uploadAll.addEventListener("click", submissionFunction);
}
