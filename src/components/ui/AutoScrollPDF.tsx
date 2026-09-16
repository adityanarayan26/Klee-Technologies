"use client";

import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface AutoScrollPDFProps {
  url: string;
  title: string;
  maxPages?: number; // Limit pages for performance on heavy PDFs
}

export function AutoScrollPDF({ url, title, maxPages = 5 }: AutoScrollPDFProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const [containerWidth, setContainerWidth] = useState(300);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  // Handle responsive width for PDF pages
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollState = useRef({
    direction: 1, // 1 for down, -1 for up
    lastTime: 0,
    pauseUntil: 0,
    exactScrollTop: 0
  });

  // Determine how many pages to render
  const pagesToRender = Math.min(numPages, maxPages);

  // Smooth, delta-time based Yo-Yo auto-scroll loop
  const animateScroll = (time: number) => {
    requestRef.current = requestAnimationFrame(animateScroll);

    if (!scrollRef.current) return;

    const state = scrollState.current;
    
    if (isHovered) {
      state.lastTime = time;
      state.exactScrollTop = scrollRef.current.scrollTop;
      return;
    }

    if (state.lastTime === 0) state.lastTime = time;
    const deltaTime = time - state.lastTime;
    state.lastTime = time;

    // Check if we are in a pause state
    if (time < state.pauseUntil) {
      // Keep exactScrollTop synced just in case of resize or external scroll
      state.exactScrollTop = scrollRef.current.scrollTop;
      return;
    }

    const { scrollHeight, clientHeight } = scrollRef.current;

    // Only scroll if content is taller than container
    if (scrollHeight > clientHeight) {
      const speed = 35; // Pixels per second - a smooth, readable speed
      const deltaScroll = (speed * deltaTime) / 1000;

      state.exactScrollTop += deltaScroll * state.direction;

      // Handle hitting the bottom
      if (state.exactScrollTop + clientHeight >= scrollHeight - 1) { // -1 for subpixel safety
        state.exactScrollTop = scrollHeight - clientHeight;
        state.direction = -1; // Reverse to scroll up
        state.pauseUntil = time + 2000; // Pause for 2 seconds at the bottom
      } 
      // Handle hitting the top
      else if (state.exactScrollTop <= 0) {
        state.exactScrollTop = 0;
        state.direction = 1; // Reverse to scroll down
        state.pauseUntil = time + 2000; // Pause for 2 seconds at the top
      }

      scrollRef.current.scrollTop = state.exactScrollTop;
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateScroll);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered, pagesToRender]);

  return (
    <div 
      className="flex flex-col bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-xl overflow-hidden shadow-subtle group h-[500px]"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header bar */}
      <div className="px-4 py-3 border-b border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)] flex items-center justify-between z-10 shrink-0">
        <span className="text-sm font-medium text-[var(--color-foreground)] truncate pr-4">
          {title}
        </span>
        <span className="text-xs text-[var(--color-muted)] shrink-0 px-2 py-1 bg-[var(--color-background-primary)] rounded-md border border-[var(--color-border-subtle)]">
          {numPages > 0 ? `${pagesToRender} Pages` : "Loading..."}
        </span>
      </div>

      {/* Scrolling Container */}
      <div 
        ref={scrollRef}
        data-lenis-prevent="true"
        className="flex-1 overflow-y-auto overflow-x-hidden relative custom-scrollbar bg-[#f0f2f5]"
      >
        <div className="flex flex-col items-center py-4 gap-4 w-full">
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col gap-4 items-center w-full"
            loading={
              <div className="flex items-center justify-center h-full w-full py-12 text-[var(--color-muted)] text-sm">
                Loading PDF...
              </div>
            }
            error={
              <div className="flex items-center justify-center h-full w-full py-12 text-red-500 text-sm px-4 text-center">
                Failed to load PDF.
              </div>
            }
          >
            {Array.from(new Array(pagesToRender), (el, index) => (
              <div key={`page_${index + 1}`} className="shadow-md bg-white w-full flex justify-center">
                <Page
                  pageNumber={index + 1}
                  width={containerWidth - 32} // Account for padding
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={
                    <div className="animate-pulse bg-gray-200" style={{ width: containerWidth - 32, height: (containerWidth - 32) * 1.414 }}></div>
                  }
                />
              </div>
            ))}
          </Document>
          
          {/* No duplicate needed for JS scrolling because we just reset scrollTop to 0 */}
        </div>
      </div>
    </div>
  );
}
