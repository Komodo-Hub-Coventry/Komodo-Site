import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MainLayout.css';
import 'primeicons/primeicons.css';

const MainLayout = ({ children }) => {
  const [avatar, setAvatar] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // State to control modal visibility

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const openProfileModal = () => setIsProfileModalOpen(true); // Function to open the modal
  const closeProfileModal = () => setIsProfileModalOpen(false); // Function to close the modal

  const saveProfileChanges = (newAvatar, newName) => {
    setAvatar(newAvatar); // Update the avatar in the MainLayout state
    // You can also save the newName to localStorage or state if needed
  };

  return (
    <div className="main-layout">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Avatar/Profile Picture */}
        <div className="avatar-container">
          <label htmlFor="avatar-upload" className="avatar-label" onClick={openProfileModal}>
            {avatar ? (
              <img src={avatar} alt="User Avatar" className="avatar-image" />
            ) : (
              <div className="avatar">K</div>
            )}
          </label>
        </div>

        {/* Feature Icons */}
        <nav className="nav-links">
          {/* Link to Messages Page */}
          <Link to="/messages" className="nav-item">
            <i className="pi pi-comments" style={{ fontSize: '1.60rem' }}></i>
          </Link>
          {/* Link to Modules Page */}
          <Link to="/" className="nav-item">
            <i className="pi pi-book" style={{ fontSize: '1.60rem' }}></i>
          </Link>
          {/* Link to Library Page */}
          <Link to="/library" className="nav-item">
            <i className="pi pi-graduation-cap" style={{ fontSize: '1.60rem' }}></i>
          </Link>
          {/* Link to User Management Dashboard Page */}
          <Link to="/UserManagementDashboard" className="nav-item">
            <i className="pi pi-hammer" style={{ fontSize: '1.60rem' }}></i>
          </Link>
          {/* Link to Dashboard Page */}
          <Link to="/stakeholder-dashboard" className="nav-item">
            <i className="pi pi-desktop" style={{ fontSize: '1.60rem' }}></i>
          </Link>
        </nav>

        {/* Help Icon at the Bottom */}
        <div className="bottom-icon">
          <Link to="/help" className="nav-item">
            <i className="pi pi-question" style={{ fontSize: '1.60rem' }}></i>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">{children}</div>

      {/* Profile Settings Modal */}
      {isProfileModalOpen && (
        <ProfileSettings
          closeModal={closeProfileModal}
          saveChanges={saveProfileChanges}
        />
      )}
    </div>
  );
};

export default MainLayout;