const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const Game = require('../models/Game');

router.post('/create', async (req, res) => {
  try {
    const gameRef = db.collection('games').doc();
    const newGame = new Game(gameRef.id);
    await gameRef.set(JSON.parse(JSON.stringify(newGame)));
    res.status(201).json({ gameId: gameRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const gameRef = await db.collection('games').doc(req.params.id).get();
    if (!gameRef.exists) {
      return res.status(404).json({ error: 'Game not found' });
    }
    res.json(gameRef.data());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
