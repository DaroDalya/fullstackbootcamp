const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');
const app = express();

//Middleware
app.use(bodyPaser.json());
app.use(cors());

const tasklist = require('./routes/api/tasklist');
app.use('/api/tasklist', tasklist);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));