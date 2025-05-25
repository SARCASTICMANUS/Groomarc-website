// PdfSlideshow.jsx
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Load PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ file, interval = 3000 }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (!numPages) return;

    const loop = setInterval(() => {
      setPageNumber((prev) => (prev < numPages ? prev + 1 : 1));
    }, interval);

    return () => clearInterval(loop);
  }, [numPages, interval]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={<span>Loading PDF...</span>} error={<span>Failed to load PDF. Please check the file path and format.</span>} noData={<span>No PDF file specified.</span>}>
        <Page pageNumber={pageNumber} width={500} loading={<span>Loading page...</span>} error={<span>Failed to load page.</span>} />
      </Document>
    </div>
  );
};

export default PdfViewer;
