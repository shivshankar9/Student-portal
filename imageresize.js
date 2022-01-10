const fileInput = document.querySelector(".resizer__file");
        const widthInput = document.querySelector(".resizer__input--width");
        const heightInput = document.querySelector(".resizer__input--height");
        const aspectToggle = document.querySelector(".resizer__aspect");
        const canvas = document.querySelector(".resizer__canvas");
        const canvasCtx = canvas.getContext("2d");
        const downloadbtn = document.querySelector("#dwn-btn");
        

        downloadbtn.addEventListener("click",function(){
           
        });
        
        let activeImage, originalWidthToHeightRatio;
        
        fileInput.addEventListener("change", (e) => {
          const reader = new FileReader();
        
          reader.addEventListener("load", () => {
            openImage(reader.result);
          });
        
          reader.readAsDataURL(e.target.files[0]);
          
        });
        
        widthInput.addEventListener("change", () => {
          if (!activeImage) return;
        
          const heightValue = aspectToggle.checked
            ? widthInput.value / originalWidthToHeightRatio
            : heightInput.value;
        
          resize(widthInput.value, heightValue);
        });
        
        heightInput.addEventListener("change", () => {
          if (!activeImage) return;
        
          const widthValue = aspectToggle.checked
            ? heightInput.value * originalWidthToHeightRatio
            : widthInput.value;
        
          resize(widthValue, heightInput.value);
        });
        
        function openImage(imageSrc) {
          activeImage = new Image();
        
          activeImage.addEventListener("load", () => {
            originalWidthToHeightRatio = activeImage.width / activeImage.height;
        
            resize(activeImage.width, activeImage.height);
          });
        
          activeImage.src = imageSrc;
          
        }
        
        function resize(width, height) {
          canvas.width = Math.floor(width);
          canvas.height = Math.floor(height);
          widthInput.value = Math.floor(width);
          heightInput.value = Math.floor(height);
          canvasCtx.drawImage(activeImage, 0, 0, Math.floor(width), Math.floor(height));
          downloadbtn.style.display = "inline-block";
          let dataurl = canvas.toDataURL(activeImage.type);
          downloadbtn.href = dataurl; 
        }