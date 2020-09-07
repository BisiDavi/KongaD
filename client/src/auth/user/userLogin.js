import React from "react";

const UserLogin = () => {
  return (
    <div>
      <div className="Login">
        <Paper elevation={2}>
          <h1>Login</h1>
          <hr />
          <form className="Login-form">
            <TextField
              label="Enter Email Address or Phone Number"
              type="text"
              placeholder="Enter Email Address OR Phone Number"
              required
            />
            <TextField
              type="password"
              placeholder="password"
              placeholder="Enter Password"
              required
            />
            <Button>Login</Button>            
          </form>
          <div className="createAccount">
          <p>Don't have an Account?</p>
          <Button>Create an Account</Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default UserLogin;
