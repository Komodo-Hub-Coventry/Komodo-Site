import React, { useState } from 'react';
import './ContributionSubmissionForm.css';

const ContributionSubmissionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'article',
    content: '',
    location: '',
    animal: '',
    contributorType: 'student',
    contributorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      type: 'article',
      content: '',
      location: '',
      animal: '',
      contributorType: 'student',
      contributorName: '',
    });
  };

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      <h2>Submit Your Contribution</h2>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>Type</label>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="article">Article</option>
        <option value="essay">Essay</option>
        <option value="column">Column</option>
        <option value="sighting">Sighting Report</option>
      </select>

      <label>Content</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        required
      />

      {formData.type === 'sighting' && (
        <>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label>Animal Sighted</label>
          <input
            type="text"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
          />
        </>
      )}

      <label>Contributor Type</label>
      <select
        name="contributorType"
        value={formData.contributorType}
        onChange={handleChange}
      >
        <option value="student">Student</option>
        <option value="community">Community</option>
      </select>

      <label>Contributor Name</label>
      <input
        type="text"
        name="contributorName"
        value={formData.contributorName}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};
#
export default ContributionSubmissionForm;
