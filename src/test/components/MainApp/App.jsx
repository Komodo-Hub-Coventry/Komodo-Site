import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CSPage from '../ModulesPages/Modules/pages/CSPage.jsx';
import CodeGenerator from "../../../code_generator/code_generator.jsx";
import DashboardPage from '/src/test/components/StakeholderDashboard/DashboardPage.jsx';
import Email from '@/email/email.jsx';
import EnglishPage from '../ModulesPages/Modules/pages/EnglishPage.jsx';
import Enrolment from '/src/test/components/UserManagementDashboard/Enrolment/Enrolment.jsx';
import GeographyPage from '../ModulesPages/Modules/pages/GeographyPage.jsx';
import HistoryPage from '../ModulesPages/Modules/pages/HistoryPage.jsx';
// Adjusted relative imports to match your folder structure
import MainLayout from '../MainLayout/MainLayout.jsx';
import MathsPage from '../ModulesPages/Modules/pages/MathsPage.jsx';
import MessagesPage from '../MessagesPage/MessagesPage.jsx';
import ModulesPage from '../ModulesPages/ModulesPage.jsx';
import React from 'react';
import SciencePage from '../ModulesPages/Modules/pages/SciencePage.jsx';
import Subscription from '/src/test/components/UserManagementDashboard/SubscriptionManagement/Subscription.jsx';
import UserManagementDashboard from '/src/test/components/UserManagementDashboard/UserManagementDashboard.jsx';
import UserSettings from '/src/test/components/UserManagementDashboard/UserSettings/UserSettings.jsx';

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
         <Route
          path="/email"
          element={
            <MainLayout>
              <Email />
            </MainLayout>
          }
        />
        <Route
          path="/code_generator"
          element={
            <MainLayout>
              <CodeGenerator /> 
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
