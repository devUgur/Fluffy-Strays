const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

const cors = require('cors');
const app = express();
app.use(cors());


// Statischen Ordner "public" hinzufügen
app.use(express.static('public'));
app.use('/userimages', express.static('public/userimages'));
//app.use('/fluffyimages', express.static('public/fluffyimages'));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// Konfiguriere bodyParser für größere Dateien
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json()); // Für JSON-Anfragen
app.use(express.urlencoded({ extended: true })); // Für Formulardaten

const dotenv = require('dotenv');
dotenv.config();



// Import Routes
const fluffyRoutes = require('./routes/fluffy.routes');
const donationRoutes = require('./routes/donation.routes');
const adminRoutes = require('./routes/admin/admin.routes');
const adminUserRoutes = require('./routes/admin/admin-user.routes');
const adminFluffyRoutes = require('./routes/admin/admin-fluffy.routes');
const adminDonationRoutes = require('./routes/admin/admin-donation.routes');
const adminSubscriptionRoutes = require('./routes/admin/admin-subscription.routes');
const adminBlogRoutes = require('./routes/admin/admin-blog.routes');




let server = {};

if(process.argv[2]){
    const httpsOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/livefootballprediction.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/livefootballprediction.com/cert.pem')
    }
    server = https.createServer(httpsOptions, app);
}else{
    const http = require('http');
    server = http.createServer(app);
}

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error(err);
    });


//socketIO.init(server);



app.get('/*', (req, res, next) => {
    console.log('req.url: ', req.url);
    next();
})

// Using app routes
app.use("/api/fluffy", fluffyRoutes);
app.use("/api/donation", donationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin/user", adminUserRoutes);
app.use("/api/admin/fluffy", adminFluffyRoutes);
app.use("/api/admin/donation", adminDonationRoutes);
app.use("/api/admin/subscription", adminSubscriptionRoutes);
app.use("/api/admin/blog", adminBlogRoutes);



server.listen(3000, () => {
    console.log('listening on *:3000');
});