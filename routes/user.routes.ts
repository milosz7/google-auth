import express from 'express';
import { Profile } from 'passport-google-oauth20';
import { unless } from '../helpers';

const router = express.Router();

router.use(
  unless(['/no-permission'], (req, res, next) => {
    if (!req.user) return res.redirect('/user/no-permission');
    return next();
  })
);

router.route('/logged').get((req, res) => {
  const user = req.user as Profile
  return res.render('logged', {displayName: user.displayName, picture: user._json.picture });
});

router.route('/profile').get((req, res) => {
  res.send('hello');
});

router.route('/profile/settings').get((req, res) => {
  res.send('world');
});

router.route('/no-permission').get((req, res) => {
  return res.render('noPermission');
});

export default router;
