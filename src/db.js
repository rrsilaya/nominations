import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const { USER, PASSWORD } = process.env;

const db = mongoose.createConnection(`mongodb://${USER}:${PASSWORD}@ds227459.mlab.com:27459/nominations`);

db.on('error', err => console.log(err.message));
db.once('open', () => {
  console.log(`Successfully connected to MongoDB (username: ${USER})`);
});

export default db;
