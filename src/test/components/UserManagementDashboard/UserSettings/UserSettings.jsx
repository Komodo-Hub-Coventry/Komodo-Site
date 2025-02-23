import "./UserSettings.css";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
 import UserActivityChart from "./UserActivityChart";

const UserSettings = () => {
  // State for subscribed schools and users
  const [schools, setSchools] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/schools"),
      fetch("http://localhost:5000/api/users/data"),
    ])
      .then(async ([schoolsRes, usersRes]) => {
        const schoolsData = await schoolsRes.json();
        const usersData = await usersRes.json();
        return [schoolsData, usersData];
      })
      .then(([schoolsData, usersData]) => {
        setSchools(schoolsData);
        setUsers(usersData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="admin-dashboard">
      <h1 className="header">Komodo Hub Admin Dashboard</h1>
      <p>
        Welcome to the Komodo Hub Admin Dashboard. Here, you can manage subscribed
        schools, enable access control, assign roles, set permissions, restrict
        unauthorized access, and monitor system and user activity.
      </p>
      
      {/* User Activity Chart */}
      <h2>User Activity</h2>
      <UserActivityChart />

      {/* Subscribed Schools Table */}
      <h2>Subscribed Schools</h2>
      <DataTable
        value={schools}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        emptyMessage="No subscribed schools found."
      >
        <Column field="name" header="School Name" sortable style={{ width: "30%" }} />
        <Column field="location" header="Location" sortable style={{ width: "30%" }} />
        <Column
          field="subscriptionDate"
          header="Subscription Date"
          sortable
          style={{ width: "30%" }}
        />
      </DataTable>

      {/* Users & Roles Table */}
      <h2>Users & Roles</h2>
      <DataTable
        value={users}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        emptyMessage="No users found."
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
          sortable
          style={{ minWidth: "12rem" }}
        />
        <Column field="role" header="Role" sortable style={{ width: "20%" }} />
        <Column field="age" header="Age" sortable style={{ width: "10%" }} />
        <Column
          header="Status"
          body={(rowData) => {
            // Generate a random boolean to determine status
            const isActive = Math.random() < 0.5;
            const severity = isActive ? "success" : "info";
            const value = isActive ? "Active" : "Inactive";
            return <Tag value={value} severity={severity} />;
          }}
          style={{ width: "15%" }}
          headerStyle={{ color: "#374151" }}
        />
      </DataTable>
    </div>
  );
};

export default UserSettings;
