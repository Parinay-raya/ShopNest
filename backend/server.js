// Triggering a new deployment

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // ✅ Enable JSON parsing

const authRoutes = require('./routes/auth'); // ✅ Import routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1); // Stop the server if MongoDB fails
  });

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// API routes
app.use('/api/auth', authRoutes); 

// Dynamic port for Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});
