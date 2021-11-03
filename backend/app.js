const express = require('express');
const session = require('express-session');
const SessionFileStore = require('session-file-store')(session);
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
// const { sequelize } = require('./db/models');

const app = express();

// const adminRouter = require('./routes/admin.router')
const identRouter = require('./routes/ident.router');
const websiteRouter = require('./routes/website.router');

dotenv.config();

const {
  PORT = 5000,
  SESSION_SECRET = 'my_secret',
} = process.env;

const sessionConfig = {
  store: new SessionFileStore(),
  name: 'user_sid',
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(session(sessionConfig));
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// app.use('/api/admin', adminRouter);
app.use('/api/ident', identRouter);
app.use('/api/website', websiteRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(PORT, async () => {
  console.log(`Server started on PORT: ${PORT}`);
  try {
    // await sequelize.authenticate();
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Unable to connect to the database. \nError message:', error, '\n');
  }
});
