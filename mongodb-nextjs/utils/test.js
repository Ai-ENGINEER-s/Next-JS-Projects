const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/connection";

async function testConnection() {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connexion réussie à MongoDB !");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB :", error.message);
    } finally {
        await mongoose.disconnect();
    }
}

testConnection();
