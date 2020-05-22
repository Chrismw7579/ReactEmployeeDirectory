/* eslint-disable default-case */
import React, {Component} from 'react';
import Table from './table';
import Employees from '../employees.json';

class TableContainer extends Component {

    state = {
        employees: Employees,
        name: '',
        property: '',
        min: '',
        max: ''
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

    onChange = event => {
        const {name, value} = event.target;

        this.setState ({
            [name]: value
        })
    }

    filterProperty = () => {
        let employees = this.state.employees.filter(element => {
            return  element.name.toLowerCase() !== this.state.property.toLowerCase() &&
                    element.department.toLowerCase() !== this.state.property.toLowerCase() &&
                    element.role.toLowerCase() !== this.state.property.toLowerCase() &&
                    element.salary >= this.state.min &&
                    (element.salary <= this.state.max || this.state.max === '') 
                    
        });

        
        
        let property = '';
        let min = '';
        let max = '';
        
        this.setState({employees, property, min, max});
    }

    resetTable = () => {
        let employees = Employees;
       
        this.setState({employees});
    }

    render() {
        return(
            <div>
                <Table 
                    handleTableClick={this.handleTableClick}
                    employees={this.state.employees}
                    type = {this.state.name}
                />
                <p>Enter a name, department or role for the property you would like to filter out.</p>
                <p>Enter a min and/or max value for the salaries you would like to filter out</p>
                 <form>
                    <input
                        value={this.state.property}
                        name = 'property'
                        type = 'text'
                        onChange = {this.onChange}
                        placeholder = 'Property'
                    />
                    
                    <input
                        value = {this.state.min}
                        name = 'min'
                        type = 'number'
                        onChange = {this.onChange}
                        placeholder = 'Min Salary'
                        min = '0'
                    />
                    
                    <input
                        value = {this.state.max}
                        name = 'max'
                        type = 'number'
                        onChange = {this.onChange}
                        placeholder = 'Max Salary'
                        min= '0'
                    />
                </form>
                <button onClick={()=> this.filterProperty()}>Filter</button>
                 <div>
                    
                    <button onClick={()=> this.resetTable()}>Reset Table</button>
                </div>

            </div>

           
        )
    }


}

export default TableContainer;