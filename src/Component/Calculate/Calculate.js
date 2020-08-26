import React from 'react';
import './Calculate.css'


const Calculate = (props) => {
    
    let totalSalary = 0;
    props.hValue.map(s => totalSalary =( totalSalary + s.salary))
    return (
        <div className='calculate'>
            <div>
                <h2>Summary</h2>
                <h4>Selected: {props.hValue.length}</h4>
                <table className = "table">
                    <tr>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {props.hValue.map(data => 
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.salary}</td>
                    </tr>
                    )}
                    <tr>
                        <th>Total =</th>
                        <th>{totalSalary}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Calculate;