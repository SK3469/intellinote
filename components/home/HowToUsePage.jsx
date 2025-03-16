import React from "react";
import { FaUpload, FaFilePdf, FaEdit, FaDownload } from "react-icons/fa";

const HowToUse = () => {
  return (
    <div id="howToUse" className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          How to Use <span className="text-blue-600">IntelliNote AI</span>
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Follow these simple steps to convert your PDFs into smart AI-powered notes.
        </p>
      </section>

      {/* Step-by-Step Guide */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center">
          <FaUpload className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Step 1: Upload PDF</h3>
          <p className="text-gray-600 mt-2">
            Drag and drop or select a PDF file from your device to start the note-taking process.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaFilePdf className="text-green-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Step 2: AI Processing</h3>
          <p className="text-gray-600 mt-2">
            Our AI scans the PDF and extracts key points, summaries, and insights.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaEdit className="text-yellow-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Step 3: Edit & Customize</h3>
          <p className="text-gray-600 mt-2">
            Review and edit the notes to match your preferences before saving.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaDownload className="text-red-600 text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Step 4: Download Notes</h3>
          <p className="text-gray-600 mt-2">
            Save your AI-generated notes in various formats like PDF,and Text.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">Is IntelliNote AI free to use?</summary>
            <p className="mt-2 text-gray-600">
              Yes, you can use our basic features for free. A premium version with advanced features is also available.
            </p>
          </details>

          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">What file formats are supported?</summary>
            <p className="mt-2 text-gray-600">
              Currently, we support PDF files. More formats like DOCX and TXT will be added soon.
            </p>
          </details>

          <details className="bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">Can I export my notes?</summary>
            <p className="mt-2 text-gray-600">
              Yes! You can download your notes as a PDF, Word document, or text file.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default HowToUse;
