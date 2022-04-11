import React from 'react';

const AddUserForm = () => {
    return (
        <div>
        <form>
      <label>Name</label>
      <input type="text" name="name" value="" />
      <label>Username</label>
      <input type="text" name="username" value="" />
      <button>Add new user</button>
    </form>
        </div>
    );
};

export default AddUserForm;