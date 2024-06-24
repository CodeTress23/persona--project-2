const bcrypt = require("bcrypt");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20');
const GitHubStrategy = require('passport-github');

const User = require("../models/userModel");
// const req = require("express/lib/request");

passport.use(
    new LocalStrategy(function verify(username, password, done){
        User.findOne({username: username})
        .then((user) => {
            if (user) {
                return done(null, false, { message: 'User not found.'});
            }
            bcrypt.compare(password, user.password, (error, result) => {
                console.log('result', result)
                if (error) {
                    return done(error)
                }
                return done(null, user);
            });
        })
        .catch((error) => {
            console.log(`There was an error: ${error}`)
        });
    })
);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google'
},
    (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    return done(null, profile);
 })
);

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github'
},
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        return done(null, profile);
    }
));                                                                