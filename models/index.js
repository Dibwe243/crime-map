var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/crimeData', { useMongoClient: true });

/*
var crimeReportSchema  = new mongoose.Schema({
    crime_type(name): {
         type: 'string',
         required: 'Cannot be blank'
     },
     Location: {
         coordinate: {
             lat: xxxx,
             long: xxxx
         },
         address: {
             city: xxx,
             street: xxx,
             zip_code: xxxx,
             etc: xxxx
         }
     },
     Details: {
         type: 'string'
     },
     date_happened: {
         type: Date,
         default: Date.now
     }
 });*/

mongoose.Promise = Promise;

var crimeReportSchema = new mongoose.Schema({},{ "strict": false });
var crimeReports = mongoose.model('crimeReports', crimeReportSchema );
module.exports = crimeReports;