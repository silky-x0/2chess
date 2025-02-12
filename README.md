# 2chess - Real-time Multiplayer Chess Game

A full-stack chess application with real-time gameplay using Socket.IO and Firebase.

## Project Structure
```
2chess/
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── firebase.js     # Firebase configuration
│   │   ├── models/
│   │   │   └── Game.js         # Game data model
│   │   ├── routes/
│   │   │   └── game.js         # Game API routes
│   │   └── index.js            # Main server entry point
│   ├── package.json            # Server dependencies
│   └── .env                    # Environment variables
├── .gitignore                  # Git ignore rules
├── .gitattributes             # Git attributes for line endings
├── LICENSE                    # MIT License
└── README.md                  # Project documentation
```

## Technology Stack

### Backend
- Node.js + Express for API server
- Socket.IO for real-time game updates
- Firebase Admin SDK for database and authentication
- CORS for cross-origin requests

### Database Schema
- Games Collection
  - Game ID
  - Players (white/black)
  - Board state
  - Current turn
  - Game status
  - Move history
  - Timestamps

## API Endpoints

### Game Routes
- `POST /api/games/create` - Create new game
- `GET /api/games/:id` - Get game by ID

### WebSocket Events
- `connection` - New client connected
- `joinGame` - Player joins a game room
- `gameUpdate` - Real-time game state updates

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd 2chess
```

2. Server Setup:
```bash
cd server
npm install
```

3. Firebase Configuration:
- Create a Firebase project
- Get your service account credentials
- Add them to .env as FIREBASE_SERVICE_ACCOUNT

4. Environment Configuration:
Create a `.env` file in the server directory:
```
PORT=3001
FIREBASE_SERVICE_ACCOUNT={your-firebase-credentials-json}
```

5. Start Development Server:
```bash
npm run dev
```

## Features Implemented

### Backend
- [x] Express server with API routes
- [x] Socket.IO real-time communication
- [x] Firebase Firestore integration
- [x] Game state management
- [x] Real-time game updates
- [x] Game room system
- [x] Cross-origin resource sharing

### Game Logic
- [x] Game model with board initialization
- [x] Player management
- [x] Game state tracking
- [x] Move history

## In Progress
- [ ] Frontend implementation
- [ ] Move validation
- [ ] Check/Checkmate detection
- [ ] User authentication
- [ ] Match history
- [ ] Rating system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
