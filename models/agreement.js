var mongoose = require('mongoose');

var AgreementSchema = mongoose.Schema({
    specialProvision: String,
    sire: String,
    sireAkcNo: String,
    dam: String,
    damAkcNo: String,
    dateWhelped: {type: Date, default: Date.now},
    buyer: String,
    buyerDate: {type: Date, default: Date.now},
    address: String,
    poBox: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    email: String,
    breeder: String,
    breederDate: {type: Date, default: Date.now},
    dateCreated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Agreement', AgreementSchema);