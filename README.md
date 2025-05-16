# 2chess - Real-time Chess Game

A real-time multiplayer chess game built with Node.js, Socket.IO, and Chess.js.

## Project Structure
```
2chess/
├── views/
│   └── index.ejs          # Chess game interface
├── public/
│   └── js/
│       └── chessGame.js   # Client-side game logic
├── app.js                 # Server entry point
├── package.json
└── README.md
```

## Technology Stack

### Core
- Node.js + Express.js for server
- Socket.IO for real-time gameplay
- Chess.js for game logic
- EJS for templating

### Features
- Real-time multiplayer chess
- Drag and drop piece movement
- Role-based gameplay (white/black/spectator)
- Automatic board flipping for black player
- Unicode chess pieces
- Move validation

## Game Features

### Implemented
- [x] Two-player game support
- [x] Spectator mode
- [x] Real-time move updates
- [x] Valid move enforcement
- [x] Player turn management
- [x] Drag and drop interface
- [x] Responsive chessboard

### Socket Events
- `playerRole` - Assigns white/black role
- `spectatorRole` - Assigns spectator status
- `move` - Handles piece movements
- `boardState` - Syncs game state
- `invalid Move` - Handles invalid moves

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/silky-x0/2chess.git
cd 2chess
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node app.js
```

4. Access the game:
- Open `http://localhost:3000` in your browser
- First player gets white pieces
- Second player gets black pieces
- Additional connections become spectators

## Dependencies
- express: ^5.1.0
- socket.io: ^4.8.1
- chess.js: ^1.2.0
- ejs: ^3.1.10

## Technical Details

### Client-Side
- Manages game UI and piece movement
- Handles drag and drop interactions
- Updates board visualization
- Communicates with server via Socket.IO

### Server-Side
- Manages player connections
- Validates moves using Chess.js
- Broadcasts game state updates
- Handles player roles and turns

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

