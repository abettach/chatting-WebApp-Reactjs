const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect(
  "mongodb+srv://root:root@cluster0.g8oqkdb.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is connected successfuly");
  }
);

const app = express();

const PORT = 5000;

//MidelWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passport-config")(passport);

// Routes

app.get('/api/isAuth', (req, res) => {
  res.send({isAuth: req.isAuthenticated()});
})

app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/api/logout", (req, res, next) => {
  console.log("imHereee=",req.isAuthenticated())
  req.logout((err) => {
    if (err) return next(err);
  })
});
app.post("/api/signup", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already exists");
    if (!doc) {
      const HashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: HashedPassword,
      });
      await newUser.save();
    }
  });
});
app.delete('/api/logout', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logOut();
      res.send("logout")
    }
  })(req, res, next);
})
app.get("/api/user", (req, res) => {
	const userData = {
		first_name: req.user.first_name,
		last_name: req.user.last_name,
		email: req.user.email,
		id: req.user.id
	}
	res.send(userData);
});

app.listen(PORT, () => {
  console.log(`server has started: http://localhost:${PORT}`);
});
