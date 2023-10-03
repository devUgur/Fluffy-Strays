const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Vergiss nicht, fs zu importieren
const { v4: uuidv4 } = require('uuid');
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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fluffyFolderPath = `public/fluffyimages/`;
        console.log('fluffyFolderPath', fluffyFolderPath);
        fs.mkdirSync(fluffyFolderPath, { recursive: true });
        cb(null, fluffyFolderPath);
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        let newFilename = `${uuidv4()}${extname}`;
        console.log('newFilename', newFilename)
        cb(null, newFilename);
    },
});

const upload = multer({ storage });

// Route zum Erstellen eines Fluffys und Hochladen der Bilder
router.post('/', upload.array('images'), async (req, res) => {
    try {
        // Speichere die Dateinamen der hochgeladenen Bilder in einem Array
        const imageNames = req.files.map(file => file.filename);

        // Erstelle das Fluffy-Objekt mit den anderen Informationen und den Bildern
        const fluffy = new Fluffy({
            name: req.body.name,
            gender: req.body.gender,
            characteristics: JSON.parse(req.body.characteristics),
            description: req.body.description,
            receivedAt: req.body.receivedAt,
            images: imageNames, // Füge die Bildernamen hinzu
        });

        // Speichere das Fluffy-Objekt in der Datenbank
        await fluffy.save();

        res.status(201).json({ message: 'Fluffy wurde erfolgreich erstellt.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ein Fehler beim speichern ist aufgetreten.' });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const fluffyId = req.params.id;

        // Überprüfe, ob ein Fluffy mit der angegebenen ID existiert
        const fluffy = await Fluffy.findById(fluffyId);

        // Wenn kein Fluffy mit der angegebenen ID gefunden wurde, gib einen Fehler zurück
        if (!fluffy) {
            return res.status(404).json({ message: 'Fluffy wurde nicht gefunden.' });
        }

        // Lösche die Bilder des Fluffy aus dem Dateisystem (optional, falls Bilder gespeichert sind)
        const imageNames = fluffy.images;
        for (const imageName of imageNames) {
            const imagePath = path.join(__dirname, `../public/fluffyimages/${imageName}`);
            fs.unlinkSync(imagePath);
        }

        // Lösche den Fluffy-Datensatz aus der Datenbank
        await fluffy.remove();

        res.status(204).json(); // Erfolgreich gelöscht, kein Inhalt zur Antwort
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Ein Fehler beim Löschen ist aufgetreten.' });
    }
});


module.exports = router;
