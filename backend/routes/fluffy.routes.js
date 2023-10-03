const express = require('express');
const router = express.Router();
const Fluffy = require('../db/schemas/Fluffy.schema');

router.get('/', async (req, res) => {
    try {
        let fluffys = await Fluffy.find();
        res.status(200).json(fluffys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ein Fehler ist aufgetreten.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const fluffyID = req.params.id;
        const fluffy = await Fluffy.findById(fluffyID);
        res.status(200).json(fluffy);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ein Fehler ist aufgetreten.' });
    }
});


module.exports = router;
