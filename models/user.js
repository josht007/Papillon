const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  moodLogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MoodLog' }]
});

module.exports = mongoose.model('User', userSchema);
