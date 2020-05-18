/* eslint-disable default-case */
import React, {Component} from 'react';
import Table from './table';
import employees from '../employees.json';

class TableContainer extends Component {

    state = {
        employees,
        name: ''
    };
    

    handleTableClick = name => {
        
        let employees = [...this.state.employees];
        switch(name){
            case 'Name':
                employees.sort((a,b) => (a.name > b.name) ? 1: -1);
                break;
            case 'Department':
                employees.sort((a,b) => (a.department > b.department) ? 1: -1);
                break;
            case 'Role':
                employees.sort((a,b) => (a.role > b.role) ? 1: -1);
                break;
            case 'Salary':
                employees.sort((a,b) => parseFloat(b.salary) - parseFloat(a.salary));
                break;
        }
        this.setState({employees, name});
        
    }

    render() {
        return(
            <div>
                <Table 
                    handleTableClick={this.handleTableClick}
                    employees={this.state.employees}
                    type = {this.state.name}
                />
            </div>
        )
    }


}

export default TableContainer;