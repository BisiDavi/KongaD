import React, { useState } from "react";

const UserRegister = () => {
  const [registerform, setRegisterform] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const userNameHandler = e => {
    setRegisterform({
      ...registerform,
      userName: e.target.value
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
        <form className="registerform" onSubmit={onSubmitHandler}>
          <input
            type="text"
            onChange={userNameHandler}
            value={registerform.userName}
            placeholder="user Name"
          />
          <input
            type="email"
            value={registerform.email}
            onChange={emailHandler}
            placeholder="Email"
          />
          <input
            type="password"
            value={registerform.password}
            onChange={passwordHandler}
            placeholder="Password"
          />
          <input
            type="password"
            value={registerform.confirmPassword}
            onChange={checkPasswordHandler}
            placeholder="Confirm Password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
