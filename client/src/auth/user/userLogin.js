import React from "react";

const UserLogin = () => {
  return (
    <div>
      <div className="Login">
        <div className="Login-picture"></div>
        <form className="Login-form">
          <input type="text" placeholder="user name" required />
          <input type="text" placeholder="password" required />
          <input type="text" placeholder="confirm password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
