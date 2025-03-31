import React, { useEffect, useState } from 'react';
import './LibraryPage.css';
import ContributionSubmissionForm from './ContributionSubmissionForm';

const LibraryPage = () => {
  const [contributions, setContributions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Fetch contributions from the backend on mount
  useEffect(() => {
    fetch('http://localhost:5000/api/contributions')
      .then((res) => res.json())
      .then((data) => {
        // Generate a snippet for display if content exist
        const dataWithSnippet = data.map((item) => ({
          ...item,
          snippet: item.content ? item.content.substring(0, 80) + '...' : ''
        }));
        setContributions(dataWithSnippet);
      })
      .catch((err) => console.error('Error fetching contributions:', err));
  }, []);

  // Post a new contribution to the backend
  const handleNewSubmission = (newContribution) => {
    fetch('http://localhost:5000/api/contributions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContribution)
    })
      .then((res) => res.json())
      .then((savedContribution) => {
        const snippet = savedContribution.content
          ? savedContribution.content.substring(0, 80) + '...'
          : '';
        const withSnippet = { ...savedContribution, snippet };
        // Prepend the new contribution to the list
        setContributions((prev) => [withSnippet, ...prev]);
      })
      .catch((err) => console.error('Error saving contribution:', err));
  };

  // Filter contributions based on the search term
  const filteredContributions = contributions.filter((c) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      c.title.toLowerCase().includes(lowerSearch) ||
      c.snippet.toLowerCase().includes(lowerSearch)
    );
  });

  // Show only sighting reports if that tab is active
  const displayedContributions =
    activeTab === 'sighting'
      ? filteredContributions.filter((c) => c.type === 'sighting')
      : filteredContributions;

  return (
    <div className="library-page">
      <h1>Indonesian Endangered Species &amp; Conservation Library</h1>
      <p>
        Explore articles, essays, columns, and sighting reports on endangered species and conservation efforts.
      </p>

      {/* Contribution Submission Form */}
      <ContributionSubmissionForm onSubmit={handleNewSubmission} />

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search contributions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tab Toggle */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => setActiveTab('all')}
        >
          All Contributions
        </button>
        <button
          className={activeTab === 'sighting' ? 'active' : ''}
          onClick={() => setActiveTab('sighting')}
        >
          Sighting Reports
        </button>
      </div>

      {/* Contributions Grid */}
      <div className="contributions-grid">
        {displayedContributions.map((contribution) => (
          <div key={contribution.id} className="contribution-card">
            <h2 className="contribution-title">{contribution.title}</h2>
            <p className="contribution-snippet">{contribution.snippet}</p>
            <p className="contribution-type">Type: {contribution.type}</p>

            {/* If it's a sighting, display additional details */}
            {contribution.type === 'sighting' && (
              <>
                {contribution.location && (
                  <p><strong>Location:</strong> {contribution.location}</p>
                )}
                {contribution.animal && (
                  <p><strong>Animal Sighted:</strong> {contribution.animal}</p>
                )}
              </>
            )}

            <div className="contributor-info">
              <span>By: </span>
              {contribution.contributorType === 'community' ? (
                <a href={`/community-profile/${contribution.id}`} className="contributor-link">
                  {contribution.contributorName}
                </a>
              ) : (
                <span className="contributor-name">{contribution.contributorName}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
