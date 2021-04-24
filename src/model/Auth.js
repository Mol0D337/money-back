const { model, Schema, Schema: { Types: {ObjectId} } } = require('mongoose');

const schema = new Schema({
  first_name: {
    type: String,
    default: '',
    required: true
  },
  last_name: {
    type: String,
    default: '',
    required: true
  },
  id: {
    type: Number,
    default: '',
    required: true
  },
  username: {
    type: String,
    default: '',
    required: false
  },
  photo_url: {
    type: String,
    default: '',
    required: false
  },
  auth: {
    type: ObjectId,
    ref: 'Auth'
  }
});

module.exports = model('Auth', schema);
