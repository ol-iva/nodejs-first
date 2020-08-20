const express = require('express');
const {findById} = require('./service');
const { users } = require('./users_mock');

const router = express.Router();

router.get('/', (request,response) => {
    response.json(users);
});

router.get('/:id', (request,response) => {
   const {id} = request.params;
const user = findById(id);
 if (!user) {
     response.send(`User with ID ${id} not found`);
 }
    response.send(user);
});

module.exports = router;