"use client";

import React from "react";

const FILES = [
  "Bookify_Underrated_Job_Portals_Section.docx",
  "Deep-dive_ Linked In & Naukri Hacks — Ready-to-use Guide.docx",
  "How_to_Find_and_Contact_HR_Professionals.docx",
  "HR_Referral_LinkedIn_Email_Scripts.docx",
  "HR_Referrals_Networking_Kit.pdf",
  "job_search_strategy.pdf",
  "Resume_Bullet_Frameworks_and_Examples.docx",
  "Sample Resume_2025.docx",
];

function extOf(name) {
  const parts = name.split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "";
}

function iconFor(ext) {
  switch (ext) {
    case "pdf":
      return "📕";
    case "docx":
    case "doc":
      return "📄";
    default:
      return "📁";
  }
}

export default function BookifyDownloadsPage() {
  function downloadUrl(name) {
    return `/${encodeURIComponent(name)}`;
  }

  function downloadAll() {
    FILES.forEach((file) => {
      const link = document.createElement("a");
      link.href = downloadUrl(file);
      link.download = file;
      link.click();
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Bookify Resume Kit
          </h1>
          <p className="text-slate-300 text-lg">Premium Resources • Clean • Modern • Dark UI</p>
        </header>

        {/* ACTION BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <button
            onClick={downloadAll}
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-800/30 w-full sm:w-auto"
          >
            Download All Files
          </button>

          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-sm w-full sm:w-auto"
          >
            Copy Page URL
          </button>
        </div>

        {/* FILE GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FILES.map((file) => {
            const ext = extOf(file);
            const url = downloadUrl(file);
            return (
              <article
                key={file}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition shadow-xl shadow-black/30"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl p-4 rounded-xl bg-white/10">
                    {iconFor(ext)}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-white/90">
                      {file}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{ext.toUpperCase()} File</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={url}
                    download={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-medium text-sm shadow shadow-indigo-900/40"
                  >
                    Download
                  </a>

                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.origin + url)}
                    className="inline-flex items-center gap-2 bg-transparent border border-white/20 px-4 py-2 rounded-md text-sm hover:bg-white/10"
                  >
                    Copy Link
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-slate-400 text-sm border-t border-white/10 pt-6">
          Curated with ❤️ by <span className="text-indigo-400 font-semibold">Bookify</span>
        </footer>
      </div>
    </main>
  );
}