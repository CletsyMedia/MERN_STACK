# MERN Stack Authentication Project

This project demonstrates a full-stack authentication application using the MERN stack (MongoDB, Express, React, Node.js), along with additional technologies and tools for enhanced functionality and development efficiency.

![Screenshot](/frontend/src/assets/mern.png)

## Technologies Used

### MongoDB
- **Role:** NoSQL database for storing user data and authentication credentials.
- **Benefits:** Flexible schema, efficient querying, and scalability.

### Express.js
- **Role:** Framework for building server-side APIs and managing routing.
- **Benefits:** Simplifies request/response handling and middleware integration.

### React.js
- **Role:** Front-end library for building dynamic and interactive user interfaces.
- **Benefits:** Component-based architecture, enhances user experience.

### Node.js
- **Role:** JavaScript runtime for executing server-side code.
- **Benefits:** Asynchronous operations and server management.

### Tailwind CSS
- **Role:** Utility-first CSS framework for styling.
- **Benefits:** Customizable, responsive design, and rapid UI development.

### bcrypt
- **Role:** Library for hashing and securing passwords.
- **Benefits:** Protects against brute-force attacks and ensures secure password storage.

### nodemon
- **Role:** Tool for auto-restarting the server on code changes.
- **Benefits:** Streamlines development with automatic server restarts.

This project integrates MongoDB, Express.js, React.js, and Node.js to create a secure and dynamic authentication system, with Tailwind CSS for styling, bcrypt for password security, and nodemon for development efficiency.


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)

## Features
- User registration and login
- JWT-based authentication
- Secure password storage with bcrypt
- Environment variable management with dotenv
- Frontend built with React and Vite
- Backend built with Express and MongoDB

## Installation

### Prerequisites
- Node.js (v16 or later)
- MongoDB (running locally or accessible remotely)
- Nodemon
- Daisyui
- Tailwind CSS

## Scripts

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
    ```bash
    npm run server
    ```

### Frontend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd Fronend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
    ```bash
    npm run dev
    ```
### Running both backend and frontend:

   ```bash
   npm install concurrently
   and npm run dev
   ```
## Conclusion

This project integrates MongoDB, Express.js, React.js, and Node.js to build a secure and dynamic authentication system. Tailwind CSS enhances the styling, bcrypt ensures password security, and nodemon improves development efficiency.

Feel free to clone the repository and contribute to the project. I welcome enhancements, bug fixes, and new features. For contributions, please follow the standard pull request process.

Future enhancements are planned, including additional features and optimizations to further improve the application's performance and user experience. Stay tuned for updates!

