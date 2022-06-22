const User = require('../models/user.models');
const { ObjectId } = require('bson');

module.exports.signon = async (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    if(!req.body.user){
        res.status(400);
        res.send(`Please provide all required parameters to create an account`)
        return;
    }

    const user = new User({
        _id: ObjectId(),
        firstname: req.body.user.firstname,
        lastname: req.body.user.lastname,
        email: req.body.user.email,
        password: req.body.user.password,
        idPokemon: req.body.user.idPokemon,
        points: 0
       });
       user.save()
       .then(() => {
         res.status(200);
         console.log("successfully signon");
         res.send({
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname, 
            idPokemon: user.idPokemon,
            points: 0
          });
       })
       .catch((err) => {
        res.status(500);
        res.send(`Could not save user`+ err)});
};

module.exports.signin = async (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    if(!req.body.user || !req.body.user.email || !req.body.user.password){
        res.status(400);
        res.send(`Please provide all required parameters to login`)
        return;
    }

    User.findOne({ email: req.body.user.email }, function(err, user) {
        if (err) throw err;

            user.comparePassword(req.body.user.password, function(err, isMatch) {
                if (err){
                res.status(500);
                res.send(`Could not sign into user with email: ${req.body.user.email} and password : ${req.body.user.password}. ` + err)
                return;
                }
                if(!isMatch) {             
                    res.status(400);
                    res.send(`Invalide credential`);
                    return;
                }
                console.log("Successfully singin")
                    res.status(200);
                    res.send({
                        id: user._id,
                        firstname: user.firstname,
                        lastname: user.lastname, 
                        idPokemon: user.idPokemon,
                        points: user.points,
                        pokemons: user.pokemons
                      });
            })  
    })
}
