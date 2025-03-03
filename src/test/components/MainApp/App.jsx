import React from 'react';
import MainLayout from '../MainLayout/MainLayout.jsx';
import ModulesPage from '../ModulesPage/ModulesPage.jsx';
import UserManagementDashboard from '../UserManagementDashboard/UserManagementDashboard.jsx'
const App = () => {


    return (
        <MainLayout>

            <UserManagementDashboard/>

        </MainLayout>
    );
};

export default App;