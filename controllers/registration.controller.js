//Model import
const { Registration } = require('../models/registration.model');

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();

        res.status(200).json({
            status: 'success',
            registrations,
        });
    } catch (error) {
        console.log(error);
    }
};

const getRegisterById = async (req, res) => {
    const { id } = req.params;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
        return res.status(404).json({
            status: 'error',
            message: 'Register not found',
        });
    }

    res.status(200).json({
        status: 'success',
        register,
    });
};

const createRegistration = async (req, res) => {
    try {
        const { exitTime, status } = req.body;

        const newRegistration = await Registration.create({
            exitTime,
            status,
        });

        res.status(201).json({
            status: 'success',
            newRegistration,
        });
    } catch (error) {}
};

const updateRegister = async (req, res) => {
    try {
        const { id } = req.params;
        const { exitTime, status } = req.body;

        const register = await Registration.findOne({ where: { id } });

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found',
            });
        }

        await register.update({ exitTime, status });
        res.status(204).json({ status: 'success' });
    } catch (error) {
        console.log(error);
    }
};

const cancelRegister = async (req, res) => {
    try {
        const { id } = req.params;

        const register = await Registration.findOne({ where: { id } });

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found',
            });
        }

        await register.update({ status: 'Cancelled' });
        res.status(204).json({ status: 'success' });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllRegistrations,
    createRegistration,
    getRegisterById,
    updateRegister,
    cancelRegister,
};
