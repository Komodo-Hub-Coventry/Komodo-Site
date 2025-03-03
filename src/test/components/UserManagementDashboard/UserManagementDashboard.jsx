import React from "react";
import "./UserManagementDashboard.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import { ManageAccounts, AdminPanelSettings, School } from "@mui/icons-material";

const App = () => {
  return (
    <div className="card">
      <h2>What would you like to do?</h2>

      <Button
        label="Account Registration"
        icon={<span style={{ display: "flex", alignItems: "center", marginRight: "8px"}}><ManageAccounts/></span>}
        outlined
        badge="2"
        badgeClassName="p-badge-danger"
        sx={{ mt: 2 }}
        style={{ marginLeft: "10px" }}
      />

      <Button
        label="Role-Based Access Control"
        icon={<span style={{ display: "flex", alignItems: "center", marginRight: "8px"}}><AdminPanelSettings/></span>}
        outlined
        badge="2"
        badgeClassName="p-badge-danger"
        sx={{ mt: 2 }}
        style={{ marginLeft: "10px" }}
      />

      <Button
        label="Enrolment"
        icon={<span style={{ display: "flex", alignItems: "center", marginRight: "8px"}}><School/></span>}
        outlined
        badge="2"
        badgeClassName="p-badge-danger"
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default App;
