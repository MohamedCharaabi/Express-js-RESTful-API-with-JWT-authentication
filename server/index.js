const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/jwtAuth',require('./routes/jwtAuth'));
app.use('/user', require('./routes/users'));

app.listen(5000, () => console.log('Listening on port 5000'));
