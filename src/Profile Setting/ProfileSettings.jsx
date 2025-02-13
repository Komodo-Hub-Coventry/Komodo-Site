import React, { useState, useEffect } from "react";
import "./ProfileSettings.css";
import defaultAvatar from "./assets/images/defaultAvatar.png"; 

const ProfileSettings = ({ closeModal, saveChanges }) => {
  const [name, setName] = useState("Fatka Vale");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [bio, setBio] = useState("Software engineer and cat lover");
  const email = "fatm123@example.com"; // Static Email
  const fileInputRef = React.useRef(null); // Reference to file input

  useEffect(() => {
    const savedName = localStorage.getItem("userName") || "Fat Doe";
    const savedAvatar = localStorage.getItem("userAvatar");
    const savedBio = localStorage.getItem("userBio") || "Software engineer and cat lover";

    setName(savedName);
    setAvatar(savedAvatar || defaultAvatar);
    setBio(savedBio);
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      localStorage.setItem("userAvatar", imageUrl);
    }
  };

  const handleSave = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userBio", bio);
    saveChanges(avatar, name);
    closeModal();
  };

  return (
    <div className="profile-modal">
      <button className="close-btn" onClick={closeModal}>✖</button>

      {/* Avatar Section */}
      <div className="avatar-section" onClick={() => fileInputRef.current.click()}>
        <img src={avatar} alt="User Avatar" className="profile-avatar" />
        <p className="change-avatar">Change Avatar</p>
      </div>
      
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleAvatarChange}
      />

      {/* Name Input */}
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      {/* Email (Read-only) */}
      <label>Email:</label>
      <input type="email" value={email} readOnly className="readonly-input" />

      {/* Bio Input */}
      <label>Bio:</label>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

      {/* Save Button */}
      <button className="save-btn" onClick={handleSave}>Save changes</button>
    </div>
  );
};

export default ProfileSettings;
