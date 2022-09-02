import passport from 'passport';
import { Profile, Strategy as GoogleStrategy} from 'passport-google-oauth20';


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_PWD,
      callbackURL: process.env.CALLBACK_URL,
      scope: ['email', 'profile'],
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Profile, done) => {
  // console.log(user)
  done(null, user);
});