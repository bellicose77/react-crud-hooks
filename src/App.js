import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable/UserTable';

function App() {
  const fakedata=[{
    id:1,name:"dulal",username:"something"
  },
  {id:2,name:"ponok"}
]
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
