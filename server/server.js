const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error(err));

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Define routes
app.use('/api/tshirts', require('./routes/tshirt'));
app.use('/api/hats', require('./routes/hat'));

// Start the server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

