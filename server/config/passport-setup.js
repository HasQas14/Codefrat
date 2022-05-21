const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const User = require("../model/user-model");

passport.use(
  new GoogleStrategy(
    {
      // options for the Google start
      clientID: "1012220327745-8iu978h7tf2809hsmard65e9djkfsm7v.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/redirect",
    },

    async (token, tokenSecret, profile, done) => {
      // find current user in UserModel

      const currentUser = await User.findOne({
        googleId: profile.id,
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          googleId: profile.id,
          username: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          photo: profile.photos[0].value,
          email: profile.emails[0].value,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});
