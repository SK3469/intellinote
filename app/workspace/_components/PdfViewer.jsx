import React from "react";

const PdfViewer = ({ fileUrl }) => {
  // console.log("pdfurlcheck=>", fileUrl);

  if (!fileUrl) {
    return <p>Loading PDF...</p>; // Show a loading message until fileUrl is available
  }

  return (
    <div>
      <iframe
        className="h-[95vh] w-full"
        src={fileUrl + "#toolbar=0"}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
