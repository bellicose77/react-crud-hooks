import React, { useState } from 'react';

const AddUserForm = (props) => {
    const[user,setUser]=useState({
        name:'',
        username:''
    });
    const handleInput = (e)=>{
        const dt = e.target.value;
        setUser({...user,[e.target.name]:dt})
        // console.log("Google ")
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        props.addUser(user);
        setUser(user);

    }
    console.log(user);
    return (
        <div>
     <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" onChange={handleInput} name="name" value={user.name} />
      <label>Username</label>
      <input type="text" onChange={handleInput} name="username" value={user.username} />
      <button>Add new user</button>
    </form>
        </div>
    );
};

export default AddUserForm;