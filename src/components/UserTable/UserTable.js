import React from 'react';

const UserTable = (props) => {
    // console.log(props.fakedata)
    const{id,name,username}=props.fakedata;
    return (
        <div>
           <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table> 
        </div>
    );
};

export default UserTable;