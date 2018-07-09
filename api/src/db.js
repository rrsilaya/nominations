import mongoose from 'mongoose';

/**
 * Modern mongoose integration requires that you specify the
 * Promise "method" that you are going to use.
 */
mongoose.Promise = global.Promise;

/**
 * We'll be getting the username and password of the database from
 * your environment variables. If you'll look into your `package.json`,
 * you'll see that your start script already has the username and password
 * needed for this. THIS IS NOT RECOMMENDED since credentials are sensitive.
 * You need to store this somewhere to avoid other people from using your
 * shits.
 */
const { USER, PASSWORD } = process.env;

/**
 * This is the setup of MongoDB connection. This can differ to your case since
 * I deployed the database somewhere in the cloud :).
 */
const db = mongoose.createConnection(`mongodb://${USER}:${PASSWORD}@ds243059.mlab.com:43059/nominations`);

db.on('error', err => console.log(err.message));
db.once('open', () => {
  console.log(`Successfully connected to MongoDB (username: ${USER})`);
});

export default db;
