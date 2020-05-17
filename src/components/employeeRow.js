import React from 'react';
import '../styles/Row.css';

function Row(props) {
    
    return (
        <div>
            <span className='row' style={{width: props.nameWidth}}>
                {props.name}
            </span>
            <span className='row' style={{width: props.depWidth}}>
                {props.department}
            </span>
            <span className='row' style={{width: props.roleWidth}}>
                {props.role}
            </span>
            <span className='row' style={{width: props.salWidth}}>
                {props.salary}
            </span>
        </div>
    )
}

export default Row;