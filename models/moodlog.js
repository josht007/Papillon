const mongoose = require('mongoose');

const moodLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  mood: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MoodLog', moodLogSchema);
