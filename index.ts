import express, { response } from 'express';

var app = express();
app.use(express.json());

// Import routes defined elsewhere
require('./src/controllers/root')(app);
require('./src/controllers/employee')(app);

const PORT = process.env.PORT || '3000';
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});
