import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Adjusted relative imports to match your folder structure
import MainLayout from '../MainLayout/MainLayout.jsx';
import ModulesPage from '../ModulesPages/ModulesPage.jsx';
import MathsPage from '../ModulesPages/Modules/pages/MathsPage.jsx';
import GeographyPage from '../ModulesPages/Modules/pages/GeographyPage.jsx';
import EnglishPage from '../ModulesPages/Modules/pages/EnglishPage.jsx';
import HistoryPage from '../ModulesPages/Modules/pages/HistoryPage.jsx';
import SciencePage from '../ModulesPages/Modules/pages/SciencePage.jsx';
import CSPage from '../ModulesPages/Modules/pages/CSPage.jsx';
import DashboardPage from '/src/test/components/StakeholderDashboard/DashboardPage.jsx';
import Subscription from '/src/test/components/UserManagementDashboard/SubscriptionManagement/Subscription.jsx';
import Enrolment from '/src/test/components/UserManagementDashboard/Enrolment/Enrolment.jsx';
import UserSettings from '/src/test/components/UserManagementDashboard/UserSettings/UserSettings.jsx';
import UserManagementDashboard from '/src/test/components/UserManagementDashboard/UserManagementDashboard.jsx';
import MessagesPage from '../MessagesPage/MessagesPage.jsx';

// Placeholder component for Account Registration
const AccountRegistration = () => <div>Account Registration Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home and Module Pages */}
        <Route
          path="/"
          element={
            <MainLayout>
              <ModulesPage />
            </MainLayout>
          }
        />
        <Route
          path="/maths"
          element={
            <MainLayout>
              <MathsPage />
            </MainLayout>
          }
        />
        <Route
          path="/geography"
          element={
            <MainLayout>
              <GeographyPage />
            </MainLayout>
          }
        />
        <Route
          path="/english"
          element={
            <MainLayout>
              <EnglishPage />
            </MainLayout>
          }
        />
        <Route
          path="/history"
          element={
            <MainLayout>
              <HistoryPage />
            </MainLayout>
          }
        />
        <Route
          path="/science"
          element={
            <MainLayout>
              <SciencePage />
            </MainLayout>
          }
        />
        <Route
          path="/computer-basics"
          element={
            <MainLayout>
              <CSPage />
            </MainLayout>
          }
        />

        {/* User Management / Dashboard Pages */}
        <Route
          path="/SubscriptionManagement/Subscription"
          element={
            <MainLayout>
              <Subscription
               />
            </MainLayout>
          }
        />
        <Route
          path="/Enrolment/Enrolment"
          element={
            <MainLayout>
              <Enrolment />
            </MainLayout>
          }
        />
        <Route
          path="/UserSettings/UserSettings"
          element={
            <MainLayout>
              <UserSettings />
            </MainLayout>
          }
        />
        <Route
          path="/UserManagementDashboard"
          element={
            <MainLayout>
              <UserManagementDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/account-registration"
          element={
            <MainLayout>
              <AccountRegistration />
            </MainLayout>
          }
        />


        {/* Stakeholder Dashboard */}
        <Route
          path="/stakeholder-dashboard"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />

        <Route
          path="/messages"
          element={
            <MainLayout>
              <MessagesPage />
            </MainLayout>
          }
        />

        {/* Fallback Route */}
        <Route
          path="*"
          element={
            <MainLayout>
              <ModulesPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
