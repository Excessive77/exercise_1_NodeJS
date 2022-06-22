const express = require('express');
const { resgistrationsRouter } = require('./routes/resgistrations.routes');

//Routes

//Database
const { db } = require('./utils/database.utils');

const app = express();
app.use(express.json());

//Define endpoints
app.use('/api/v1/registrations', resgistrationsRouter);

db.authenticate()
    .then(() => console.log('DB authenticated'))
    .catch(() => console.log('DB authenticated error'));

db.sync()
    .then(() => console.log('DB sync completed'))
    .catch(() => console.log('DB sync failed'));

const port = 4000;

app.listen(port, () => {
    console.log('Is alive on port', port);
});
