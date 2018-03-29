import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const db = mongoose.createConnection('mongodb://yses:yses@ds227459.mlab.com:27459/nominations');

db.on('error', err => console.log(err.message));
db.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

export default db;
