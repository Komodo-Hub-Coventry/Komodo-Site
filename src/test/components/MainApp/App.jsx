import React from 'react';
import MainLayout from '../MainLayout/MainLayout.jsx';
import ModulesPage from '../ModulesPage/ModulesPage.jsx';
import UserManagementDashboard from '../ModulesPage/ModulesPage.jsx'
const App = () => {


    return (
        <MainLayout>
            <ModulesPage/>
            <UserManagementDashboard/>
        </MainLayout>
    );
};

export default App;