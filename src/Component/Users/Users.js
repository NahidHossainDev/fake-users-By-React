import React, { useState, useEffect } from 'react';
import '../Calculate/Calculate'
import './Users.css';


const Users = (props) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15')
                .then(res => res.json())
            .then(data => setUser(data.results))
        .catch(error => console.log('data not found'))
    }, []);

   console.log(user)

    return (
        <div className="main">
            {user.map((user => <DisplayUser handel={props.handel} user={user} key={user.login.uuid}></DisplayUser>))}
        </div>
    );
};

const DisplayUser = (props) => {
    console.log(props.user)
    const { name, email, location, login, picture, dob } = props.user;
    const fullName = (name.title+" " +name.first+" "+ name.last);
    const salary = Math.round(2000+Math.random() * 1000);

    return (
        <div className='user'>
            <img src={picture.large} alt=""/>
            <h2>{fullName}</h2>
            <div className="align">
                <div className="div-1">
                    <p>Email: {email} </p>
                    <p>Country: {location.country}</p>
                    <p>State: {location.state}</p>
                </div>
                <div className="div-2">
                    <p>Age: {dob.age}</p>
                    <p>Office id: {login.username}</p>
                    <p>Yearly Salary: $ {salary} </p>
                </div>  
                <button onClick={() => props.handel(name.last, salary)}>Add to summary</button>
            </div>
        </div>
    )
}

export default Users;