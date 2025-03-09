# TalkFlow - A Real-time Chat Application

**TalkFlow** is a real-time, full-stack chat application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create accounts, send messages, and interact with others in real-time. The app is designed to provide a seamless, responsive chat experience with features like user authentication, private messaging, and more.

---

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Real-time Messaging**: Messages are sent and received instantly with WebSocket support (using Socket.IO).
- **Private Messaging**: Users can send direct messages to one another.
- **Message History**: Users can view message history in the chat interface.
- **Responsive UI**: Built with React and styled to be fully responsive across devices.

---

## Technologies Used

- **MongoDB**: NoSQL database for storing user and message data.
- **Express**: Web framework for Node.js to handle routing and backend logic.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime environment for the server-side logic.
- **Socket.IO**: Enables real-time, bi-directional communication between the client and server.
- **JWT (JSON Web Tokens)**: For user authentication and secure token-based sessions.

---

##preview(live URL of TalkFlow)

URL-  https://talkapp-3y1z.onrender.com/

## Installation

To run **TalkFlow** locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or later)
- MongoDB (or use a cloud-based MongoDB service like MongoDB Atlas)

### Clone the Repository

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Praveen-kumar1Singh/talkflow.git
    ```

2. Navigate to the project folder:

    ```bash
    cd talkflow
    ```

### Backend Setup (Server)

1. Navigate to the backend directory:

    ```bash
    cd server
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` folder and add your environment variables:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

   The backend server will now run on `http://localhost:5000`.

### Frontend Setup (Client)

1. Navigate to the frontend directory:

    ```bash
    cd client
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the frontend server:

    ```bash
    npm run start
    ```

   The frontend will now run on `http://localhost:3000`.

---

## Usage

- Open two browser windows or tabs to test the real-time messaging.
- You can create a new account or log in with an existing account.
- Once logged in, you can start sending messages to others in real-time.
- Use the search bar to find other users and send them private messages.
  
---

## Screenshots

![Home Screen]...
![Chat Screen]...

---

## Contributing

If you would like to contribute to **TalkFlow**, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

---

## License

This project is licensed under the MIT License - 

---

## Acknowledgements

- Thanks to the open-source community for their tools and libraries.
- Special thanks to [Socket.IO](https://socket.io/) for making real-time communication possible.

---

## Contact

If you have any questions or suggestions, feel free to reach out to:

- Email: praveenkumarsingh9714@gmail.com
- GitHub: https://github.com/Praveen-kumar1Singh

---

Happy chatting with TalkFlow! 🚀
