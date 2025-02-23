import "./Enrolment.css";

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const Enrolment = () => {
  const [enrolments, setEnrolments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/students/data')
      .then((response) => response.json())
      .then((data) => setEnrolments(data))
      .catch((error) => console.error('Error fetching subscriptions:', error));
  }, []);

  return (


      <div className="enrolment">

          <h1 className="header">Enrolment Dashboard Page</h1>


          <DataTable value={enrolments} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
              globalFilterFields={['name', 'applicant', 'authorizer', 'subscriptionDate']} emptyMessage="No enrolments found.">
            <Column field="name" header="Type" style={{ width: '25%' }}></Column>
            <Column field="enrolmentstatus" header="Status" style={{ width: '25%' }}></Column>
            <Column field="authorizer" header="Authorizer" style={{ width: '25%' }}></Column>
            <Column field="college" header="Location" style={{ width: '25%' }}></Column>
            <Column field="enrolmentCompletitionDate" header="Completition Date" style={{ width: '25%' }}></Column>
        </DataTable>
      </div>
  );
};

export default Enrolment;