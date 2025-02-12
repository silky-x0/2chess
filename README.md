# 2chess - Real-time Multiplayer Chess Game

A full-stack chess application with real-time gameplay using Socket.IO and Firebase.

## Project Structure
```
2chess/
├── server/
│   ├── src/
│   │   ├── index.js         # Main server entry point
│   │   └── config/          # Configuration files
│   ├── package.json         # Server dependencies
│   └── .env                 # Environment variables
├── .gitignore              # Git ignore rules
├── .gitattributes          # Git attributes for line endings
└── README.md               # Project documentation
```

## Technology Stack

### Backend
- Node.js + Express
- Socket.IO for real-time communication
- Firebase Admin SDK for database
- CORS for cross-origin requests

### Infrastructure
- Environment variables management with dotenv
- Git configuration for cross-platform development

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/silky-x0/2chess.git
cd 2chess
```

2. Server Setup:
```bash
cd server
npm install
```

3. Environment Configuration:
Create a `.env` file in the server directory with:
```
PORT=3001
FIREBASE_SERVICE_ACCOUNT=[your-firebase-credentials]
```

4. Start Development Server:
```bash
npm run dev
```

## Features Implemented

### Backend
- [❌] Express server setup
- [❌] Socket.IO integration
- [❌] Firebase Admin SDK integration
- [❌] Real-time game updates
- [❌] Cross-origin resource sharing
- [❌] Environment configuration

### Real-time Features
- [❌] Game room creation
- [❌] Player connection handling
- [❌] Real-time game state updates

## In Progress
- [ ] Frontend implementation
- [ ] Chess game logic
- [ ] User authentication
- [ ] Game state persistence
- [ ] Move validation
- [ ] Match history

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
