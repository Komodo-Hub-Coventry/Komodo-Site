import React from "react";
import "./UserManagementDashboard.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import { useNavigate } from 'react-router-dom'; /* Import useNavigate */

const UserManagementDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="card">
            <h1 className="header">User Management</h1>

            <Button
                label="Subscription Management"
                icon="pi pi-key"
                aria-label="Bookmark"
                size="large"
                badge="2"
                badgeClassName="p-badge-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => navigate('/SubscriptionManagement/Subscription')}
            />

            <Button
                label="Account Registration"
                icon="pi pi-user-plus"
                aria-label="Bookmark"
                size="large"
                badge="2"
                badgeClassName="p-badge-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => navigate("/account-registration")}
            />

            <Button
                label="Enrolment"
                icon="pi pi-check"
                aria-label="Bookmark"
                size="large"
                badge="2"
                badgeClassName="p-badge-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => navigate("/Enrolment/Enrolment")}  // Navigate to Enrolment Page
            />
            <Button
                label="User Settings"
                icon="pi pi-cog"
                aria-label="Bookmark"
                size="large"
                badge="2"
                badgeClassName="p-badge-danger"
                style={{ marginLeft: "10px" }}
                onClick={() => navigate("/UserSettings/UserSettings")}  // Navigate to Enrolment Page
            />
        </div>
    );
};

export default UserManagementDashboard;