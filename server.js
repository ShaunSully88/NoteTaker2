const apiRoutes = require ('../NoteTaker2/routes/apiRoutes');
const htmlRoutes = require('../NoteTaker2/routes/htmlRoutes');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)
app.use(express.static('public'));
const { notes } = require('../NoteTaker2/db/db.json');
const router = require('express').Router();


router.listen(PORT, () => {

    console.log(`API Server now on port ${PORT}!`);
});