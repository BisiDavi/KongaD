const express = require('express');
const morgan = require('morgan');
const session = require("express-ession");
const dbConnection = require('.database');
const MongoStore = require('connect-mongo')(session)
const passport = require('/passport');

const app = express();
const PORT = 8080;

const myRoutes = require('./routes/user')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(
    session({
        secret: 'cuddle-mumble',
        store: new MongoStore({mongooseConnection: dbConnection}),
        resave: false,
        saveUninitialized: false
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/user", myRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})