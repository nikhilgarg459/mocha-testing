var db = require('./db.js');

module.exports.handleSignup = (email,password)=>{
    //Check if email already exists
    db.saveUser({email,password});
    //Save user to database
    //Send the welcome email
}