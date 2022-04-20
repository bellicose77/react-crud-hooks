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
const initialFormState={id:null,name:'',username:''}
const[users,setUsers]=useState(fakedata);
const[editing,setEditing]=useState(false);
const addUser = (user)=>{
  console.log(user.length);
  user.id=users.length+ 1;
  setUsers([...users,user])
}
const handleDelete=(id)=>{
  setUsers(users.filter(user => user.id !== id));
  console.log("delete button")
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
          <UserTable users={users} handleDelete={handleDelete}></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
