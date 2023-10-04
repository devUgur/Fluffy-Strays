const User = require("../../db/schemas/User.schema");
const UserImage = require("../../db/schemas/UserImage.schema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require('express').Router();

const multer = require('multer');
const path = require('path');
const fs = require('fs');


// returns all users from db
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// returns specific user from db
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/signup', async (req, res) => {
    try {
        const { username, email, password, key } = req.body;

        /*
        if (key !== "1232") {
            return res.status(400).json({ message: "Key unauthorized, please check KEY!" });
        }
        */

        console.log(req.body);
        // Check if user with same email already exists in database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user document in MongoDB
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Create JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return token and user information
        res.status(201).json({ token, user: { id: newUser._id, username: newUser.username, email: newUser.email } });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

router.post('/signin', async (req, res) => {
    const { email, password, key } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Create and sign JWT
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/auth', async (req, res) => {
    const { token } = req.body;
    //console.log(token);
    try{
        // Check if no token
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //console.log(decoded);

        // Add user from payload
        let user = decoded.user;
        //console.log("user.routes/auth success")
        res.status(200).json({ user: user, /* token: refreshToken */});
    }catch(err){
        console.log(err);
        res.status(401).json({ message: 'Token is not valid' });
    }
});

router.post('/update', async (req, res) => {
    const { token } = req.body;
    console.log(token);
    try{
        let updateResult = await User.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({message: "Updated success", data: updateResult});
    }catch(err){
        console.log(err);
        res.status(401).json({ message: 'User update error' });
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/userimages'); // Das ist der Pfad zum Ordner, in dem die Bilder gespeichert werden sollen
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, 'user_' + Date.now() + ext); // Benennen Sie die Datei um, um Konflikte zu vermeiden
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true); // Erlauben Sie die Datei
    } else {
        cb(new Error('Nur JPEG- und PNG-Dateien sind erlaubt'), false); // Verwerfen Sie die Datei
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

router.post('/upload-image', upload.single('image'), async (req, res) => {
    const userId = req.body.user; // Annahme: Der Benutzer ist authentifiziert

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send('Benutzer nicht gefunden');
        }

        if (!req.file) {
            return res.status(400).send('Kein Bild hochgeladen');
        }

        // Vor dem Hinzufügen des neuen Bildes, alle alten Bilder dieses Benutzers löschen
        await UserImage.deleteMany({ user_id: userId });
        if(user.image && user.image.filePath){
            const filePath = 'public/' + user.image.filePath;
            console.log(filePath)
            // Überprüfen Sie, ob die Datei existiert, bevor Sie sie löschen
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath); // Datei löschen
                console.log(`Datei gelöscht: ${filePath}`);
            }
        }

        const userImage = new UserImage({
            user_id: user._id,
            data: req.file.buffer,
            contentType: req.file.mimetype,
            filePath: 'public/userimages/' + req.file.filename,
        });

        await userImage.save();


        // Speichern Sie die Referenz auf das Bild in der AdminUser-Collection
        user.image = {
            db_id: userImage._id,
            filePath: 'userimages/' + req.file.filename,
        }
        await user.save();

        return res.status(200).send('Profilbild erfolgreich hochgeladen');
    } catch (err) {
        console.error('Fehler beim Speichern des Profilbildes:', err);
        return res.status(500).send('Fehler beim Speichern des Profilbildes');
    }
});

module.exports = router;