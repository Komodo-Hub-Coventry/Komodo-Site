import React, { useEffect, useState } from 'react';
import './SightingReportPage.css';

const SightingReportPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch from your backend
    // Here we filter from a local or global "contributions" array
    // or you might do something like:
    // fetch('/api/contributions?type=sighting')
    //   .then((res) => res.json())
    //   .then((data) => setReports(data));
    
    // Hard coded for example:
    const data = [
      {
        id: 1,
        title: 'Report: Sighting of the Sumatran Tiger in Lampung',
        snippet: 'A recent sighting of the elusive Sumatran Tiger in Lampung...',
        location: 'Lampung',
        animal: 'Sumatran Tiger',
        contributorType: 'community',
        contributorName: 'Jakarta Wildlife Watch',
      },
      {
        id: 2,
        title: 'Sighting of the Komodo Dragon near the beach',
        snippet: 'A Komodo Dragon was spotted near the coastline...',
        location: 'Komodo Island',
        animal: 'Komodo Dragon',
        contributorType: 'student',
        contributorName: 'Ayu',
      }
    ];
    setReports(data);
  }, []);

  return (
    <div className="sighting-report-page">
      <h1>Sighting Reports</h1>
      <div className="reports-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <h2>{report.title}</h2>
            <p>{report.snippet}</p>
            <p><strong>Location:</strong> {report.location}</p>
            <p><strong>Animal Sighted:</strong> {report.animal}</p>
            <div className="report-contributor">
              <span>Reported by: </span>
              {report.contributorType === 'community' ? (
                <a href={`/community-profile/${report.id}`}>{report.contributorName}</a>
              ) : (
                <span>{report.contributorName}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SightingReportPage;