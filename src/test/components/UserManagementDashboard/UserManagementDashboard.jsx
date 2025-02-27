import React from 'react';
import './UserManagementDashboard.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const UserManagementDashboard = () => {
    const modules = [
        {id: 1, name: 'User Creation', icon: '📚'},
        {id: 2, name: 'Module 2', icon: '🛠️'},
        {id: 3, name: 'Module 3', icon: '📊'},
        {id: 4, name: 'Module 4', icon: '⚙️'},
        {id: 5, name: 'Module 5', icon: '📖'},
        {id: 6, name: 'Module 6', icon: '📗'},

    ];

    return (
        <div className="modules-container">
            <h1 className="modules-title">Select a Module</h1>
            <div className="modules-grid">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        className="module-card"
                        onClick={() => alert(`Navigating to ${module.name}`)}
                    >
                        <span className="module-icon">{module.icon}</span>
                        <p className="module-name">{module.name}</p>
                    </div>

                    ))}
            </div>
        </div>
    );
};

export default UserManagementDashboard;
