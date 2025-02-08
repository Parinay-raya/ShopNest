const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const authRoutes = require('./routes/auth');
const app = express();
const authRoutes = require('./routes/auth'); 

dotenv.config();
//const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  
  
  app.get('/health', (req, res) => {
    res.status(200).send('OK');
});


// API routes
app.use(express.json()); // ✅ Enable JSON parsing
app.use('/api/auth', authRoutes); // ✅ Use the router correctly

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
