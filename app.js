const { jsPDF } = window.jspdf;

document.getElementById("generate").addEventListener("click", () => {
    const doc = new jsPDF(); // Use jsPDF to create a PDF document
    doc.text("Hello, this is your PDF!", 10, 10); // Add text to the PDF
  
    const blob = doc.output("blob"); // Generate the PDF as a Blob
  
    const blobUrl = URL.createObjectURL(blob); // Create a Blob URL
    const downloadLink = document.getElementById("download");
  
    downloadLink.href = blobUrl; // Set the Blob URL as the href
    downloadLink.download = "generated.pdf"; // Set the download filename
    downloadLink.style.display = "block"; // Make the link visible
    downloadLink.textContent = "Click here to download your PDF";
  });
