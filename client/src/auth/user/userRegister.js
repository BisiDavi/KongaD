import React, { useState } from "react";
import {Paper, TextField, Button} from '@material-ui/core';

const UserRegister = () => {
  const [registerform, setRegisterform] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    redirectTo : null
  });

  const userNameHandler = e => {
    setRegisterform({
      ...registerform,
      username: e.target.value
    });
  };

  const emailHandler = e => {
    setRegisterform({
      ...registerform,
      email: e.target.value
    });
  };

  const passwordHandler = e => {
    setRegisterform({
      ...registerform,
      password: e.target.value
    });
  };

  const checkPasswordHandler = e => {
    setRegisterform({
      ...registerform,
      confirmPassword: e.target.value
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(registerform);
    return registerform.password === registerform.confirmPassword
      ? console.log("Password matches")
      : console.log("Password doesn't match, please retry");
  };

  return (
    <div>
      <div className="Register">
        <div className="admin-picture"></div>
        <Paper>
          <h1>Create An Account</h1>
          <form
            className="registerform"
            onSubmit={onSubmitHandler}
          >
            <TextField
              label="First Name"
              type="text"
              onChange={userNameHandler}
              value={registerform.username}
              placeholder="Enter First Name"
            />
            <TextField
              label="Last Name"
              type="text"
              onChange={userNameHandler}
              value={registerform.username}
              placeholder="Enter Last Name"
            />
            <TextField
              label="Email Address"
              type="email"
              value={registerform.email}
              onChange={emailHandler}
              placeholder="Enter Email Address"
            />
            <TextField
              label="Phone Number"
              type="number"
              value={registerform.email}
              onChange={emailHandler}
              placeholder="Enter Phone Number"
            />
            <TextField
              type="password"
              value={registerform.password}
              onChange={passwordHandler}
              placeholder="Password"
            />
            <Button type="submit">
              Create an Account
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default UserRegister;
