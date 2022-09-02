import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { join } from 'path';
import { engine } from 'express-handlebars';
import passport from 'passport';
import session from 'express-session';
import userRoutes from './routes/user.routes';
import googleAuthRoutes from './routes/google-auth.routes'

require('./passport-config');

const app = express();

app.engine('hbs', engine({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '/public')));

app.use(session({ secret: process.env.SESSION_SECRET, saveUninitialized: true, resave: true }));
app.use(passport.session());
app.use(passport.initialize());


app.get('/', (req, res) => {
  res.render('index');
});

app.use('/user', userRoutes);
app.use('/google', googleAuthRoutes);

app.use('/', (req, res) => {
  res.status(404).render('notFound');
});

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});
