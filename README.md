# King.js

Welcome to King.js, a real-time chess game where you can play against your friends or random opponents online!

## Features

- Real-time multiplayer chess gameplay.
- Play against friends or random opponents.
- User-friendly interface.
- Separate backend and frontend setup for easy deployment.

## Setup Instructions

To start playing King.js, follow these steps:
1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Start the backend server:

    ```bash
    tsc -b
    node dist/index.js
    ```

   This will start the backend server on the default port (`8000`).

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Start the frontend server:

    ```bash
    npm run dev
    ```

   This will start the frontend server and open the King.js application in your default web browser.

### Playing Chess

1. Once both backend and frontend servers are running, visit `http://localhost:5173` in your web browser to access the King.js application.

2. Enjoy playing real-time chess with your opponent!

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - WebSocket (for real-time communication)
  - Chess.js (for chess logic)

- **Frontend:**
  - React.js
  - WebSocket (for real-time communication)
  - Tailwind CSS (for styling)

## Things still remaining
1. Validate user that they move their own chess pieces.
2. Adding all moves to DB for making a persistent connection, helping us to make a fail-safe server development.
3. UI changes to make it more user-friendly and show moves to user.
4. Deploying it to cloud for public url.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact

If you have any questions or need further assistance, please contact us at support@King.js. We're happy to help!