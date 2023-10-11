import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFGenerator = () => {

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1); // start on first page
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);

  const startTimeRef = useRef(Date.now());
  const pageNumberRef = useRef<number>(pageNumber);
  const isInitialPageLoad = useRef(true);

  // Update the previous page number after the effect hook has run
  useEffect(() => {
    pageNumberRef.current = pageNumber;
  }, [pageNumber]);

  useEffect(() => {
    startTimeRef.current = Date.now(); // update the start time for the new page

    // when component unmounts, calculate duration and track page view
    return () => {
      const endTime = Date.now();
      const duration = Math.round(endTime - startTimeRef.current);
      trackPageView(duration);
    };
  }, [pageNumber]); // monitor pageNumber for changes

  useEffect(() => {
    if (numPages > 0) {
      updateNumPages(numPages);
    }
  }, [numPages]); // monitor numPages for changes


  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
    setNumPages(nextNumPages);
  }

  // Send the last page view when the user leaves the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const duration = Math.round(endTime - startTimeRef.current);
      trackPageView(duration);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    setLoading(false);
  }

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  // Go to next page
  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  async function trackPageView(duration: number = 0) {
    // If this is the initial page load, don't send the request
    if (isInitialPageLoad.current) {
      isInitialPageLoad.current = false;
      return;
    }

    await fetch("/api/record_view", {
      method: "POST",
      body: JSON.stringify({
        linkId: '',
        documentId: '',
        viewId: '',
        duration: duration,
        pageNumber: pageNumberRef.current,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function updateNumPages(numPages: number) {
    await fetch(`/api/documents/update`, {
      method: "POST",
      body: JSON.stringify({
        documentId: '',
        numPages: numPages,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }



  return (

      <div className="flex flex-col items-center mx-auto bg-white">
        <Document
          file="/pdf/sample.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          renderMode="canvas"
          className=""
        >
          <Page
            className=""
            key={pageNumber}
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            onLoadSuccess={onPageLoadSuccess}
            onRenderError={() => setLoading(false)}
            width={Math.max(pageWidth * 0.355, 400)}
          />
        </Document>

        
        <div className="my-1 flex justify-between items-center space-x-10">
          {/* Pagination Controls */}
          <div className="flex">
            <button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              className={`text-xs p-1 mr-2 bg-gray-300 hover:bg-gray-400 ${pageNumber <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
            </button>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className={`text-xs p-1 ml-2 bg-gray-300 hover:bg-gray-400 ${pageNumber >= numPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </button>
          </div>

          {/* Page Indicator */}
          <div>
            <p className="text-xs dark:text-gray-800 text-gray-800">
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>

        
      </div>
      
  );
}
 
export default PDFGenerator;