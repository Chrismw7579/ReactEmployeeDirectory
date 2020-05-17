import React from 'react';
import Header from './components/header';
import Table from './components/table';

const employees = [
    {
        id: 1,
        name: 'Dave',
        department: 'Robotics',
        role: 'Engineer',
        salary: 150000
    },
    {
        id: 2,
        name: 'Brandon',
        department: 'Robotics',
        role: 'Engineer',
        salary: 180000
    },
    {
        id: 3,
        name: 'Jared',
        department: 'Construction',
        role: 'Operator',
        salary: 190000
    },
    {
        id: 4,
        name: 'Brian',
        department: 'Construction',
        role: 'Forman',
        salary: 140000
    },
    {
        id: 5,
        name: 'Jim',
        department: 'Parts',
        role: 'Contractor',
        salary: 120000
    },
]

function App() {
    return (
        <div>
            <Header />
            <Table employees={employees}/>
        </div>
    );
}

export default App;