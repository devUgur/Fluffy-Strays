const Joi = require('joi');

// Definiere ein Schema für die Validierung
const fluffySchema = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string(),
    characteristics: Joi.array().items(Joi.string()),
    description: Joi.string(),
    images: Joi.array().items(Joi.string()),
    receivedAt: Joi.string(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
});

const validate = async function(fluffyData){
    try{
        // Führe die Validierung mit Joi durch
        await fluffySchema.validateAsync(fluffyData);

        // Wenn die Validierung erfolgreich ist, gibt es keine Fehler
        return null;
    }catch (e) {
        // Wenn die Validierung fehlschlägt, wird ein Fehlerobjekt zurückgegeben
        return e;
    }
}

module.exports = {
    validate
}
