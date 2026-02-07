import GoogleStrategy from "passport-google-oidc";
import User from "../models/User.js";

export const configurePassport = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        callbackURL:
          process.env.GOOGLE_CALLBACK_URL ||
          "http://localhost:4000/api/auth/google/callback",
      },
      async (issuer, profile, done) => {
        try {
          const existingUser = await User.findOne({
            googleId: profile.id,
          });

          if (existingUser) {
            return done(null, existingUser);
          }

          const createdUser = await User.create({
            name: profile.displayName,
            email: profile.emails?.[0]?.value,
            googleId: profile.id,
            isVerified: true,
          });

          return done(null, createdUser);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};
