const express = require('express');

const {
    getAllRegistrations,
    createRegistration,
    getRegisterById,
    updateRegister,
    cancelRegister,
} = require('../controllers/registration.controller');

const resgistrationsRouter = express.Router();

resgistrationsRouter.get('/', getAllRegistrations);

resgistrationsRouter.post('/', createRegistration);

resgistrationsRouter.get('/:id', getRegisterById);

resgistrationsRouter.patch('/:id', updateRegister);

resgistrationsRouter.patch('/:id', cancelRegister);

module.exports = { resgistrationsRouter };
