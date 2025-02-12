const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const { db } = require('./config/firebase');
require('dotenv').config();

const app = express();

const gameRoutes = require('./routes/game');

app.use(cors());
app.use(express.json());
app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinGame', async (gameId) => {
    socket.join(gameId);
    // You can now use realtime updates
    const gameRef = db.collection('games').doc(gameId);
    gameRef.onSnapshot((snapshot) => {
      if (snapshot.exists) {
        io.to(gameId).emit('gameUpdate', snapshot.data());
      }
    });
  });
});