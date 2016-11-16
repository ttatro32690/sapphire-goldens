var mongoose = require('mongoose');

var AgreementSchema = mongoose.Schema({
    specialProvision: String,
    sire: String,
    sireAkcNo: String,
    dam: String,
    damAkcNo: String,
    dateWhelped: Date,
    buyer: String,
    buyerDate: Date,
    address: String,
    poBox: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    email: String,
    breeder: String,
    breederDate: Date,
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Agreement', AgreementSchema);