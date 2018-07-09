import { Schema } from 'mongoose';

import db from '../../db';

const memberSchema = new Schema({
  name: {
    type: String,
    required: [ true, 'Missing name field.' ]
  },
  photo: {
    type: String,
    required: [ true, 'Missing photo attachment' ]
  }
});

const Member = db.model('Member', memberSchema);
export default Member;