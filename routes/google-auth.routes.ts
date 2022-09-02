import passport from 'passport';
import express from 'express';

const router = express.Router();

router.route('/').get(passport.authenticate('google'));

router.route('/callback').get(
  passport.authenticate('google', {
    failureRedirect: '/user/no-permission',
    successRedirect: '/user/logged',
  }),
  (req, res) => {
    res.redirect('user/logged');
  }
);

router.route('/logout').get((req, res, next) => {
  req.logout((err: Error) => {
    if (err) {
      return next();
    }
    return res.redirect('/');
  });
});

export default router;
