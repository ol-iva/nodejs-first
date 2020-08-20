// npm run test - команда из package.json
// npm start - команда из package.json
// npm i --save express
// npm i --save-dash express
const express = require('express');
const users = require('./users/routes');

const app = express();

app.use('/users', users);

app.get('/', (request,response) => {
    response.send('This is homepage');
});
app.listen(9296, () => console.log('Server started'));


