const User = require('../models/user.models');

module.exports.updateUser = async (req, res) => {

  res.setHeader('Content-Type', 'application/json');
  if(!req.body.user){res.status(400); res.send(`Please provide all required parameters to update an account`)}

    var temp = {}
    for (var key in req.body.user) {
        if (req.body.user.hasOwnProperty(key)) {
            temp[key]=req.body.user[key];
        }
    }
    console.log(temp)
  if(req.body.user)
  // Update object from database
  User.updateOne({ _id: req.body.user.id }, temp)
  .then(() => {
      // Update was successful
      res.status(200);
      res.send("User with _id " + req.body.user.id + " successfully updated");

  })
  .catch(err => {
      // An error occured while updating
      res.status(500);
      const errorDescription = `Could not update User with _id ${req.body._id}.`;
      console.log(errorDescription, err);
      res.send(errorDescription + " Error message: " + err.message);
  });
};


module.exports.getUsers = async (req, res) => {
  // Set headers
  res.setHeader('Content-Type', 'application/json');

  // Get all entreprises from database
  const user = await User.find().lean();

  // Return response
  res.status(200);
  res.send(JSON.stringify(user));
}