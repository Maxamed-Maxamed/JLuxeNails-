// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Define the port to run the server (from environment variable or default to 5000)
const port = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI) // Connect using the MONGO_URI from the .env file
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Test route to check the server
app.get('/', (req, res) => {
  res.send('Welcome to the JLuxe Nails API!');
});

// Example route to get services
app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, name: 'Manicure', description: 'Classic, Gel, and Luxury Manicures' },
    { id: 2, name: 'Pedicure', description: 'Relaxing and luxurious pedicures' },
    { id: 3, name: 'Nail Art', description: 'Custom nail art and designs' },
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
