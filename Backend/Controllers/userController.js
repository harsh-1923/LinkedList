const Users = require("../Models/Users.js");
const UserSchema = require("../Models/Users.js");

exports.addCategory = (req, res) => {
  const { email, name } = req.body;

  UserSchema.find({ email }, (err, user) => {
    if (user) {
      UserSchema.updateOne(
        { "email" : email },
        {
          $set: {
            "name": name,
          },
        }
      ); 
    }
  });

  return res.status(200).json({ message: "worked" });
};

exports.addUser = (req, res) => {
  const { name, email, profilePic } = req.body;
  var newUser = {};
  if (req.body.categories) {
    const categories = req.body.categories;
    newUser = new UserSchema({
      name: name,
      email: email,
      profilePic: profilePic,
      categories: categories,
    });
  } else {
    newUser = new UserSchema({
      name: name,
      email: email,
      profilePic: profilePic,
    });
  }

  newUser.save((err) => {
    console.log(err);
    if (err)
      res.status(500).json({
        message: { msgBody: "Error has occured", msgError: true },
      });
    else {
      res.status(201).json({
        message: {
          msgBody: "Thanks for your Registered.",
          msgError: false,
        },
      });
    }
  });
};
