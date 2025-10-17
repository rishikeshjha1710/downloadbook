'use client';
import React from 'react';
import Image from 'next/image';

const WealthBookPage = () => {
  const downloadLink = '/Wealth_RC.pdf';

  const FixedDownloadButton = () => (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900/90 backdrop-blur-sm z-50 md:relative md:p-0 md:bg-transparent md:backdrop-blur-none md:z-auto md:max-w-sm md:mx-auto">
      <a
        href={downloadLink}
        download
        className="w-full inline-flex items-center justify-center px-8 py-4 text-xl font-extrabold rounded-xl shadow-2xl text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-500 transition duration-300 ease-in-out animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] transform hover:scale-[1.03] active:scale-95"
      >
        <svg
          className="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          ></path>
        </svg>
        DOWNLOAD YOUR BOOK NOW
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* === Header Section === */}
      

     

      {/* === Congratulations Section === */}
      <section className="p-4 sm:p-10 max-w-3xl mx-auto my-10 md:my-16">
        <div className="bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-xl text-center border-t-4 border-yellow-500">
          <svg
            className="w-16 h-16 text-green-400 mx-auto mb-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif">
            Access Granted! Congratulations on Your Investment.
          </h2>
          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            {`Your decision today marks a powerful commitment to achieving `}
            <strong>financial mastery</strong>
            {`. Please click the button below to secure your copy of the Code immediately.`}
          </p>

          <div className="hidden md:block mt-8">
            <FixedDownloadButton />
          </div>

          <div className="mt-8 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-500">
              For any download or access issues, please reach out to our support
              team.
            </p>
          </div>
        </div>
      </section>

      {/* === Next Steps Section === */}
      <section className="max-w-3xl mx-auto p-4 md:p-8 mb-32 md:mb-10">
        <div className="bg-gray-700 p-6 rounded-xl shadow-inner border-l-4 border-yellow-600">
          <h3 className="text-2xl font-bold text-white mb-3">
            Your Next Step: Implementation
          </h3>
          <p className="text-gray-300">
            The true transformation begins with action. Schedule a 90-minute
            deep-focus session within the next 48 hours to begin the initial
            &quot;Reprogramming Phase&quot; described in Chapter One. This
            exercise activates your wealth identity and primes your subconscious
            for success.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm font-semibold text-yellow-400 hover:text-white transition"
          >
            Explore Implementation Guide &rarr;
          </a>
        </div>
      </section>

      {/* === Sticky Mobile Button === */}
      <div className="md:hidden">
        <FixedDownloadButton />
      </div>
    </div>
  );
};

export default WealthBookPage;
