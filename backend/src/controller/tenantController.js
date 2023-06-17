const Tenant = require('../models/tenantModel');

const registerTenant = async function (req, res) {
    try {
        const { tenantName, occupation, userId, category, location, email, password, phoneNumber, aadharNumber, profilePicture } = req.body;

        const tenant = await Tenant.create({
            tenantName,
            occupation,
            userId,
            category,
            location,
            email,
            password,
            phoneNumber,
            aadharNumber,
            profilePicture,
        });

        res.status(200).send({ status: true, data: tenant });
    } catch (err) {
        if (err.message.includes('validation')) {
            return res.status(400).send({ status: false, message: err.message })
        }
        else if (err.message.includes('duplicate')) {
            return res.status(400).send({ status: false, message: err.message })
        }
        else {
            return res.status(400).send({ status: false, message: err.message })
        }

    }
};

const getTenantById = async function (req, res) {
    try {
        const { tenantId } = req.params;

        const tenant = await Tenant.findById(tenantId);

        if (!tenant) {
            return res.status(404).send({ status: false, message: 'Tenant not found' });
        }

        res.status(200).send({ status: true, data: tenant });
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};

const updateTenant = async function (req, res) {
    try {
        const { tenantId } = req.params;
        const updates = req.body;

        const tenant = await Tenant.findByIdAndUpdate(tenantId, updates, { new: true });

        if (!tenant) {
            return res.status(404).send({ status: false, message: 'Tenant not found' });
        }

        res.status(200).send({ status: true, data: tenant });
    } catch (err) {
        if (err.message.includes('validation')) {
            return res.status(400).send({ status: false, message: err.message })
        }
        else if (err.message.includes('duplicate')) {
            return res.status(400).send({ status: false, message: err.message })
        }
        else {
            return res.status(400).send({ status: false, message: err.message })
        }

    }
};

const deleteTenant = async function (req, res) {
    try {
        const { tenantId } = req.params;

        const tenant = await Tenant.findByIdAndDelete(tenantId);

        if (!tenant) {
            return res.status(404).send({ status: false, message: 'Tenant not found' });
        }

        res.status(200).send({ status: true, data: 'Tenant deleted successfully' });
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
};

module.exports = { registerTenant, getTenantById, updateTenant, deleteTenant };
