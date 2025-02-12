const { db } = require('../config/firebase');

const gameService = {
  async createGame(gameData) {
    const gameRef = db.collection('games').doc();
    await gameRef.set({
      ...gameData,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    return gameRef.id;
  },

  async updateGameState(gameId, newState) {
    const gameRef = db.collection('games').doc(gameId);
    await gameRef.update({
      boardState: newState,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  },

  async getGame(gameId) {
    const gameDoc = await db.collection('games').doc(gameId).get();
    return gameDoc.exists ? gameDoc.data() : null;
  }
};

module.exports = gameService;