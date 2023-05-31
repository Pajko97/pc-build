// Import required modules
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const AuthController = require('./controllers/AuthController')
// Create an instance of the Express app
const app = express();

// Initialize Prisma client
const prisma = new PrismaClient();

// Middleware for parsing JSON
app.use(express.json());

// Initialize express-session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Define passport serialization and deserialization functions
passport.serializeUser((user: PassportUserType, done: Function) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: String, done: Function) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Define local strategy for username/password authentication
passport.use(
  new LocalStrategy(async (username: String, password: String, done: Function) => {
    try {
      const user = await prisma.user.findUnique({ where: { username } });

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Define Google strategy for OAuth authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: 'your-google-client-id',
      clientSecret: 'your-google-client-secret',
      callbackURL: 'your-google-callback-url',
    },
    async (accessToken: String, refreshToken: String, profile: GoogleProfile, done: Function) => {
      try {
        // Check if user exists in the database
        let user = await prisma.user.findUnique({
          where: { googleId: profile.id },
        });

        if (!user) {
          // Create a new user if not found
          user = await prisma.user.create({
            data: {
              googleId: profile.id,
              email: profile.emails[0].value,
              // Add any additional fields from the Google profile
            },
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
interface CustomResponseType {
  message: string;
}

// Define routes for login and logout
app.post('/login', passport.authenticate('local'), (req: Request, res: any ) => {
  res.json({ message: 'Login successful.' });
});

app.get('/logout', (req: any, res: any) => {
  req.logout();
  res.json({ message: 'Logout successful.' });
});

// Define route for Google OAuth authentication
app.get('/auth/google', AuthController.AuthGoogle);

// Define callback route for Google OAuth authentication
app.get('/auth/google/callback', passport.authenticate('google'), (req: Request, res: any) => {
  res.redirect('/'); // Redirect to home page or any other desired URL
});

// Define route for registering a new user
app.post('/register', AuthController.Register);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});