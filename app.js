const express = require('express');
const cors = require('cors');
require('dotenv').config();

const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);

module.exports = app;
