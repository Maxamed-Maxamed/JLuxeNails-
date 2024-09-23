const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const bookingRoutes = require('./routes/bookings');
const contactRoutes = require('./routes/contacts');

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the JLuxe Nails API!');
});


// Use the routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/contacts', contactRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
