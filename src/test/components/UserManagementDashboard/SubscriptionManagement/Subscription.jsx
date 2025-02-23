import "./Subscription.css";

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Tag} from "primereact/tag";


const SubscriptionManagement = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/subscriptions')
      .then((response) => response.json())
      .then((data) => setSubscriptions(data))
      .catch((error) => console.error('Error fetching subscriptions:', error));
  }, []);

  return (


      <div className="subscription-management">

          <h1 className="header">Subscription Dashboard Page</h1>


          <DataTable value={subscriptions} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
              globalFilterFields={['name', 'applicant', 'authorizer', 'subscriptionDate']} emptyMessage="No subscribtions found.">


            <Column field="name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} sortable style header="Type" ></Column>
            <Column field="applicant" sortable style header="Applicant" ></Column>
            <Column field="authorizer" sortable style header="Authorizer"></Column>
            <Column field="subscriptionDate" sortable style header="Date"></Column>
            <Column field="price" sortable style header="Price" ></Column>
            <Column header="Status" sortable style style={{ width: '150px' }} headerStyle={{ color: '#374151' }} body={(rowData) => {
              let severity = 'info';
              if (rowData.status === 'Active') severity = 'success';
              else if (rowData.status === 'Finished') severity = 'info';
              return <Tag value={rowData.status} severity={severity} />;
  }}
/>
        </DataTable>
      </div>
  );
};

export default SubscriptionManagement;