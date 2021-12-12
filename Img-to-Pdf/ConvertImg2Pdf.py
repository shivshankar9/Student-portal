import img2pdf

file = open("generatedPdf.pdf", "wb")
imgPath = input("Please enter the path of the image to be converted: ")
pdfData = img2pdf.convert(imgPath)
print(pdfData)
file.write(pdfData)
file.close()
print("Pdf converted")