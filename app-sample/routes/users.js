const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then(user => {
      // if (!user) {
      //   console.log(user);
      //   return res.status(404).json({ error: "Email not found" });
      // } else {
      //   console.log("may nakita");
      //   return res.status(200).json(user);
      // }

      // if (!user) throw console.log("invalid");
      // if (!user) return console.log(user);

      if (user) {
        console.log(user, "data ito");
        return res.status(200).json(user);
      }

      // return res.status(200).json(user);
    })
    .catch(console.log("error login"));
});

router.get("/login", (req, res) => {});

router.get("/signup", (req, res) => {});

router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    // Check if user exists
    if (!user) {
      console.log("email exist");
    } else {
      let user = new User();

      const { firstname, lastname, contact, email, password } = req.body;

      //   console.log(req.body);

      console.log(firstname);
      console.log(lastname);
      console.log(contact);
      console.log(email);
      console.log(password);

      //   user.id = _id;
      user.firstname = firstname;
      user.lastname = lastname;
      user.contact = contact;
      user.email = email;
      user.password = password;

      // user.save(err => {
      // if (err) return res.json({ success: false, error: err });
      // console.log("save to database");
      // return res.json({ success: true });
      // });

      user
        .save()
        .then(data => {
          return res.status(200).json(data);
        })
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
