import React, { useState } from 'react';
import './MathsPage.css'; // Using the same CSS file for a consistent look

const EnglishPage = () => {
  // State for week accordion and dynamic items (each can have multiple files)
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [weekMaterials, setWeekMaterials] = useState({
    week1: [
      { name: 'Lecture Slides 1', files: [], expanded: false },
      { name: 'Practice Problems 1', files: [], expanded: false },
      { name: 'Reading Material 1', files: [], expanded: false },
    ],
    week2: [
      { name: 'Lecture Slides 2', files: [], expanded: false },
      { name: 'Practice Problems 2', files: [], expanded: false },
      { name: 'Reading Material 2', files: [], expanded: false },
    ],
    week3: [
      { name: 'Lecture Slides 3', files: [], expanded: false },
      { name: 'Practice Problems 3', files: [], expanded: false },
      { name: 'Reading Material 3', files: [], expanded: false },
    ],
    week4: [
      { name: 'Lecture Slides 4', files: [], expanded: false },
      { name: 'Practice Problems 4', files: [], expanded: false },
      { name: 'Reading Material 4', files: [], expanded: false },
    ],
    week5: [
      { name: 'Lecture Slides 5', files: [], expanded: false },
      { name: 'Practice Problems 5', files: [], expanded: false },
      { name: 'Reading Material 5', files: [], expanded: false },
    ],
  });
  const [newItemNames, setNewItemNames] = useState({
    week1: '',
    week2: '',
    week3: '',
    week4: '',
    week5: '',
  });

  // State for Announcements & Assignments
  const [announcements, setAnnouncements] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [announcementFile, setAnnouncementFile] = useState(null);
  const [assignmentText, setAssignmentText] = useState('');
  const [assignmentFile, setAssignmentFile] = useState(null);

  // Toggle week accordion
  const toggleWeek = (weekKey) => {
    setExpandedWeek(expandedWeek === weekKey ? null : weekKey);
  };

  // Toggle sub-dropdown for a specific item
  const handleToggleItem = (weekKey, itemIndex) => {
    setWeekMaterials((prev) => {
      const updatedWeek = [...prev[weekKey]];
      updatedWeek[itemIndex] = {
        ...updatedWeek[itemIndex],
        expanded: !updatedWeek[itemIndex].expanded,
      };
      return { ...prev, [weekKey]: updatedWeek };
    });
  };

  // Add files to an item
  const handleAddFiles = (weekKey, itemIndex, event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;
    setWeekMaterials((prev) => {
      const updatedWeek = [...prev[weekKey]];
      const updatedItem = { ...updatedWeek[itemIndex] };
      const newFileObjects = files.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      updatedItem.files = [...updatedItem.files, ...newFileObjects];
      updatedWeek[itemIndex] = updatedItem;
      return { ...prev, [weekKey]: updatedWeek };
    });
    event.target.value = '';
  };

  // Delete a file from an item
  const handleDeleteFile = (weekKey, itemIndex, fileIndex) => {
    setWeekMaterials((prev) => {
      const updatedWeek = [...prev[weekKey]];
      const updatedItem = { ...updatedWeek[itemIndex] };
      updatedItem.files = [...updatedItem.files];
      updatedItem.files.splice(fileIndex, 1);
      updatedWeek[itemIndex] = updatedItem;
      return { ...prev, [weekKey]: updatedWeek };
    });
  };

  // Delete an entire item
  const handleDeleteItem = (weekKey, itemIndex) => {
    setWeekMaterials((prev) => {
      const updatedWeek = [...prev[weekKey]];
      updatedWeek.splice(itemIndex, 1);
      return { ...prev, [weekKey]: updatedWeek };
    });
  };

  // Handle new item creation
  const handleNewItemNameChange = (weekKey, value) => {
    setNewItemNames((prev) => ({ ...prev, [weekKey]: value }));
  };

  const handleAddNewItem = (weekKey) => {
    const itemName = newItemNames[weekKey].trim();
    if (!itemName) return;
    setWeekMaterials((prev) => {
      const updatedWeek = [...prev[weekKey]];
      updatedWeek.push({ name: itemName, files: [], expanded: false });
      return { ...prev, [weekKey]: updatedWeek };
    });
    setNewItemNames((prev) => ({ ...prev, [weekKey]: '' }));
  };

  // Announcement handlers
  const handleAnnouncementFile = (e) => {
    if (e.target.files[0]) {
      setAnnouncementFile(e.target.files[0]);
    }
  };

  const handleAddAnnouncement = () => {
    if (!announcementText.trim() && !announcementFile) return;
    const newAnnouncement = {
      text: announcementText.trim() || null,
      fileUrl: announcementFile ? URL.createObjectURL(announcementFile) : null,
      fileName: announcementFile ? announcementFile.name : null,
    };
    setAnnouncements((prev) => [...prev, newAnnouncement]);
    setAnnouncementText('');
    setAnnouncementFile(null);
  };

  // Assignment handlers
  const handleAssignmentFile = (e) => {
    if (e.target.files[0]) {
      setAssignmentFile(e.target.files[0]);
    }
  };

  const handleAddAssignment = () => {
    if (!assignmentText.trim() && !assignmentFile) return;
    const newAssignment = {
      text: assignmentText.trim() || null,
      fileUrl: assignmentFile ? URL.createObjectURL(assignmentFile) : null,
      fileName: assignmentFile ? assignmentFile.name : null,
    };
    setAssignments((prev) => [...prev, newAssignment]);
    setAssignmentText('');
    setAssignmentFile(null);
  };

  return (
    <div className="maths-page english-page">
      <h1>English Module</h1>
      <p>Welcome to the English module! Here you'll find all the study materials for each week!</p>

      {/* Weeks Accordion */}
      <div className="weeks-accordion">
        {[...Array(5).keys()].map((weekIndex) => {
          const weekNumber = weekIndex + 1;
          const weekKey = `week${weekNumber}`;
          return (
            <div key={weekNumber} className="week-section">
              <div className="week-header" onClick={() => toggleWeek(weekKey)}>
                <h2>Week {weekNumber}</h2>
                <span>{expandedWeek === weekKey ? '▲' : '▼'}</span>
              </div>
              {expandedWeek === weekKey && (
                <div className="week-content">
                  <ul>
                    {weekMaterials[weekKey].map((item, itemIndex) => (
                      <li key={itemIndex} className="material-item">
                        <div className="item-header" onClick={() => handleToggleItem(weekKey, itemIndex)}>
                          <span>{item.name}</span>
                          <span>{item.expanded ? '▲' : '▼'}</span>
                        </div>
                        {item.expanded && (
                          <div className="item-content">
                            <label className="upload-button top-right-button">
                              + Add Files
                              <input
                                type="file"
                                multiple
                                style={{ display: 'none' }}
                                onChange={(e) => handleAddFiles(weekKey, itemIndex, e)}
                              />
                            </label>
                            <ul className="files-list">
                              {item.files.map((file, fileIndex) => (
                                <li key={fileIndex} className="file-item">
                                  <a href={file.url} target="_blank" rel="noreferrer">
                                    {file.name}
                                  </a>
                                  <button className="delete-button" onClick={() => handleDeleteFile(weekKey, itemIndex, fileIndex)}>
                                    Delete
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <button className="delete-button" onClick={() => handleDeleteItem(weekKey, itemIndex)}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="add-item-container">
                    <input
                      type="text"
                      placeholder="Enter new item name"
                      value={newItemNames[weekKey]}
                      onChange={(e) => handleNewItemNameChange(weekKey, e.target.value)}
                      className="add-item-input"
                    />
                    <button className="add-item-button" onClick={() => handleAddNewItem(weekKey)}>
                      + Add Item
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Container Layout */}
      <div className="container-layout">
        {/* Interactive English Game Container */}
        <div className="interactive-game-container">
          <h2>🧩 Quick English Game!</h2>
          <iframe
            title="Wordle Game"
            src="https://wordle-clone-bysubodh.netlify.app/"
            style={{ border: 'none', borderRadius: '10px' }}
          />
        </div>

        {/* Announcements */}
        <div className="announcements-container">
          <h2>📢 Announcements</h2>
          <div className="announcements-list">
            {announcements.map((ann, idx) => (
              <div key={idx} className="announcement-item">
                {ann.text && <p>{ann.text}</p>}
                {ann.fileUrl && (
                  <a href={ann.fileUrl} target="_blank" rel="noreferrer">
                    {ann.fileName}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="announcement-form">
            <textarea
              placeholder="Write an announcement.."
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
            />
            <input
              type="file"
              accept="image/*,application/pdf,application/msword"
              onChange={handleAnnouncementFile}
            />
            <button className="post-button" onClick={handleAddAnnouncement}>
              Post Announcement
            </button>
          </div>
        </div>

        {/* Assignments */}
        <div className="assignments-container">
          <h2>📝 Assignments</h2>
          <div className="assignments-list">
            {assignments.map((asmt, idx) => (
              <div key={idx} className="assignment-item">
                {asmt.text && <p>{asmt.text}</p>}
                {asmt.fileUrl && (
                  <a href={asmt.fileUrl} target="_blank" rel="noreferrer">
                    {asmt.fileName}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="assignment-form">
            <textarea
              placeholder="Write an assignment.."
              value={assignmentText}
              onChange={(e) => setAssignmentText(e.target.value)}
            />
            <input
              type="file"
              accept="image/*,application/pdf,application/msword"
              onChange={handleAssignmentFile}
            />
            <button className="post-button" onClick={handleAddAssignment}>
              Post Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishPage;
