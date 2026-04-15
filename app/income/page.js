"use client";
import React from "react";
import { Download, ShieldCheck, Lock, CheckCircle } from "lucide-react";

export default function DownloadPage() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/income.pdf";
        link.download = "income.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="root">
            <div className="card">

                <div className="top">
                    <CheckCircle className="icon" />
                    <h1>Your Access is Ready</h1>
                    <p>
                        This is where your income shift begins.
                        Most people never reach here.
                    </p>
                </div>

                <div className="features">
                    <div className="feature">
                        <ShieldCheck /> Secure Access
                    </div>
                    <div className="feature">
                        <Lock /> Private Content
                    </div>
                    <div className="feature">
                        <CheckCircle /> Instant Download
                    </div>
                </div>

                <button onClick={handleDownload} className="btn">
                    <Download /> Download Now
                </button>

                <p className="warning">
                    ⚠️ Action takers win. Open and implement immediately.
                </p>

            </div>

            <style jsx>{`
        .root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a1a, #140b2e);
          color: white;
          padding: 20px;
        }

        .card {
          max-width: 520px;
          width: 100%;
          padding: 50px 30px;
          border-radius: 20px;
          text-align: center;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139,92,246,0.3);
          box-shadow: 0 20px 60px rgba(139,92,246,0.2);
        }

        .icon {
          width: 60px;
          height: 60px;
          color: #22c55e;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        p {
          color: #94a3b8;
          font-size: 15px;
          margin-bottom: 30px;
        }

        .features {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          gap: 10px;
        }

        .feature {
          flex: 1;
          background: rgba(139,92,246,0.1);
          padding: 10px;
          border-radius: 10px;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #22c55e, #06b6d4);
          color: #0f172a;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(34,197,94,0.4);
        }

        .warning {
          margin-top: 20px;
          font-size: 13px;
          color: #64748b;
        }

        @media (max-width: 500px) {
          .features {
            flex-direction: column;
          }
        }
      `}</style>
        </div>
    );
}
