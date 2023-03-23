const mongoose = require('mongoose');
// replace this URL below with your connection string from your MongoDB

let mongoDB = `mongodb+srv://Domokochi:asL3s3PFNwMSDDSFD@DD..SDS.Sgodb.net/photo_log?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
