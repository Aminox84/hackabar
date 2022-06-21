const User = require('../models/user.models');

module.exports.updateUser = async (req, res) => {

  if(!req.body.user){res.status(400); res.send(`Please provide all required parameters to update an account`)}

    var temp = {}
    for (var key in req.body.user) {
        if (req.body.user.hasOwnProperty(key)) {
            temp[key]=p[key];
        }
    }

  if(req.body.user)
  // Update object from database
  User.updateOne({ _id: req.body.user.id }, temp)
  .then(() => {
      // Update was successful
      res.status(200);
      console.log("User with _id " + req.body._id + " successfully updated");

  })
  .catch(err => {
      // An error occured while updating
      res.status(500);
      const errorDescription = `Could not update User with _id ${req.body._id}.`;
      console.log(errorDescription, err);
      res.send(errorDescription + " Error message: " + err.message);
  });
};


