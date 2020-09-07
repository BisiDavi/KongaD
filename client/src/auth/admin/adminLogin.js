import React from "react";



const AdminLogin = () => {
  return (
    <div>
      <div className="Login">
        <div className="Login-picture"></div>
        <form className="Login-form">
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="confirm password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
