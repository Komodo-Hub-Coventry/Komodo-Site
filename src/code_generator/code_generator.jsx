import './code_generator.css';

import React, { useState } from "react";

import { saveAs } from 'file-saver';

const generateAccessCode = (length = 8) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const CodeGenerator = () => {
  const [codes, setCodes] = useState([]);

  const generateCodes = (num = 10) => {
    const uniqueCodes = new Set();
    while (uniqueCodes.size < num) {
      uniqueCodes.add(generateAccessCode());
    }
    setCodes(Array.from(uniqueCodes));
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  const exportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + codes.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "access_codes.csv");
  };

  return (
      <div className="page-wrapper">
  <h1 className="dashboard-title">Generate Unique Code</h1>
  <h6 className="text">Easily create and export access codes for your users.</h6>
    <div className="container">
      <div className="header">
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <button className="submit" onClick={() => generateCodes(10)}>
          Generate Codes
        </button>
        <button className="submit" onClick={exportCSV} disabled={codes.length === 0}>
          Download CSV
        </button>
      </div>

      <div className="code-list">
        {codes.map((code, index) => (
          <div key={index} className="code-item">
            <span>{code}</span>
            <button className="copy-btn" onClick={() => copyCode(code)}>Copy</button>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default CodeGenerator;
