"use client";

import { useEffect, useState, useRef } from "react";

export default function AIChatbot({ boxOpen, setBoxOpen }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dialogRef = useRef(null);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (boxOpen) {
      setOpen(true);
    }
  }, [boxOpen]);

  useEffect(() => {
    if (open) {
      setBoxOpen(false);
    }
  }, [open]);

  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-0">
          <div
            ref={dialogRef}
            className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-xl"
          >
            <div className="absolute -top-6 left-0 text-gray-200 text-xs hover:text-gray-100">
              <a href="https://ailibrary.ai" target="_blank">Built with AI Library</a>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-6 right-0 text-gray-200 text-xs hover:text-gray-100 font-semibold"
              aria-hidden="true"
            >
              CLOSE
            </button>
            {loading && <div className="loader text-gray-200">Loading...</div>}
            <iframe
              src="https://www.ailibrary.ai/agent/ai-for-good-roundtable-20250106093418/chat"
              title="My First AI Agent"
              height="600px"
              width="100%"
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
