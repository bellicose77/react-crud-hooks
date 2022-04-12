import React from 'react';

const UserTable = (props) => {
   
    const datas = props.users;
    console.log(datas)
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
        {
            datas.map(data=>( <tr>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>
                  <button className="button muted-button">Edit</button>
                  <button onClick={()=>handleDelete} className="button muted-button">Delete</button>
                </td>
              </tr>

            ))
        }
     
    </tbody>
  </table> 
        </div>
    );
};

export default UserTable;