import React from 'react';

const UserTable = (props) => {
   
    const data = props.users;
    console.log(data)
    // const{id,name,username}=props.fakedata;
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
        {}
      <tr>
        <td></td>
        <td></td>
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