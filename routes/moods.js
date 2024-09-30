const express = require('express');
const router = express.Router();
const MoodLog = require('../models/MoodLog');

router.post('/log', async (req, res) => {
    const { userId, mood } = req.body;
    const newMoodLog = new MoodLog({ userId, mood });
    await newMoodLog.save();
    res.json({ message: 'Mood logged successfully' });
});

router.get('/daily-prompt', (req, res) => {
    const { mood } = req.query;
    let prompt;
    if (mood === 'stressed') {
        prompt = 'Take a 5-minute deep breathing exercise and try to focus on your breath.';
    } else if (mood === 'happy') {
        prompt = 'Embrace the positive energy! How about a gratitude meditation?';
    } else {
        prompt = 'Spend 3 minutes reflecting on how you feel.';
    }
    res.json({ prompt });
});

module.exports = router;