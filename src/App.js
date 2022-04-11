import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable/UserTable';
import { useState } from 'react';
import AddUserForm from './components/AddUserForm/AddUserForm';

function App() {
  const fakedata=[{
    id:1,name:"dulal",username:"something"
  },
  {id:2,name:"ponok",username:"nothing"},
  {id:3,name:"junaied",username:"everything"}
]
const[users,setUsers]=useState(fakedata);
const addUser = (user)=>{
  console.log(user.length);
  user.id=users.length+ 1;
  setUsers([...users,user])
}
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}></AddUserForm>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
