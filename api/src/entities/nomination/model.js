import { Schema } from 'mongoose';

import db from '../../db';

const nominationSchema = new Schema({
  nominee: {
    type: String,
    required: [ true, 'Missing name field.' ],
  },
  position: {
    type: String,
    required: [ true, 'Missing position field.' ],
  },
  name: {
    type: String
  }
});

const Nomination = db.model('Nomination', nominationSchema);
export default Nomination;