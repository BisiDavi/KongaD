const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const passport = require("../passport");

router.post("/register", (req, res) => {
  let userSession = req.session;
  console.log("user signup");
  const { firstname, lastname, email, phonenumber, password } = req.body;
  console.log("user", userSession.body);

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log("User.js post error", err);
    } else if (userSession.user) {
      res.json({
        error: `Sorry, already a user with the email: ${email}`
      });
    } else {
      const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post(
  "/login",
  (req, res, next) => {
    console.log("routes/user.js, login, req.body");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    let userSession = req.session;
    console.log("logged in", userSession.user);
    let userInfo = {
      email: userSession.email
    };
    res.send(userInfo);
  }
);

router.get("/register", (req, res, next) => {
  console.log("---------user---------------");
  let userSession = req.session;
  console.log(userSession.user);
  if (userSession.user) {
    res.json({ user: userSession.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  let userSession = req.session;
  if (userSession.user) {
    req.logout();
    res.redirect("/");
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
