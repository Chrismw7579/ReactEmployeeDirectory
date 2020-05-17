import React from 'react';
import Row from './employeeRow';
import '../styles/Row.css';
import '../styles/table.css';


function Table({employees}) {
    const spacer = 10;
    const col_name = 'Employee Name:';
    const col_dep = 'Department:';
    const col_role = 'Role:';
    const col_sal = 'Salary:';

    let nameWidth = col_name.length;         
    let depWidth = col_dep.length;            
    let roleWidth = col_role.length;            
    let salWidth = col_sal.length;



    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.length > nameWidth) {
            nameWidth = employees[i].name.length;
        }
        if (employees[i].department.length > depWidth) {
            depWidth = employees[i].department.length;
        }
        if (employees[i].role.length > roleWidth) {
            roleWidth = employees[i].role.length;
        }
        if (employees[i].salary.length > nameWidth) {
            salWidth = employees[i].salary.length;
        }
    }
    nameWidth = nameWidth * 8 + spacer;
    depWidth = depWidth * 8 + spacer;
    roleWidth = roleWidth * 8 + spacer;
    salWidth = salWidth * 8;
    
    

    return (
        <div className='table row'>
            <div>
                <span  className='row' style={{width: nameWidth}}>
                    {col_name}
                </span>
                <span  className='row' style={{width: depWidth}}>
                    {col_dep}
                </span>
                <span  className='row' style={{width: roleWidth}}>
                    {col_role}
                </span>
                <span  className='row' style={{width: salWidth}}>
                    {col_sal}
                </span>
            </div>
            <hr style={{width: nameWidth + depWidth + roleWidth + salWidth}}/>
            {employees.map(employee => (
                <Row name={employee.name} department={employee.department} role={employee.role} salary={employee.salary}
                    nameWidth={nameWidth} depWidth={depWidth} roleWidth={roleWidth} salWidth={salWidth}
                />
            ))

            }
            

        </div>
    )
}

export default Table;