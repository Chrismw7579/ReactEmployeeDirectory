import React from 'react';
import Row from './employeeRow';
import '../styles/Row.css';
import '../styles/table.css';

//const notPurchased = props.groceries.filter(grocery => !grocery.purchased);
function Table({employees, handleTableClick, type}) {
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
                <button onClick={()=> handleTableClick('Name')} className={`row ${type === 'Name' || 'active'}`} style={{width: nameWidth}}>
                    {col_name}
                </button>
                <button  onClick={()=> handleTableClick('Department')} className={`row ${type === 'Department' || 'active'}`} style={{width: depWidth}}>
                    {col_dep}
                </button>
                <button  onClick={()=> handleTableClick('Role')} className={`row ${type === 'Role' || 'active'}`} style={{width: roleWidth}}>
                    {col_role}
                </button>
                <button  onClick={()=> handleTableClick('Salary')} className={`row ${type === 'Salary' || 'active'}`} style={{width: salWidth}}>
                    {col_sal}
                </button>
            </div>
            <hr style={{width: nameWidth + depWidth + roleWidth + salWidth}}/>
            {employees.map(employee => (
                <Row key={employee.id} name={employee.name} department={employee.department} role={employee.role} salary={employee.salary}
                    nameWidth={nameWidth} depWidth={depWidth} roleWidth={roleWidth} salWidth={salWidth}
                />
            ))

            }
            

        </div>
    )
}

export default Table;