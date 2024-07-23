# Backend-Project-Sound-Bazar


## Project: Express.js Server with MongoDB

This project is a reliable and scalable server built with Express.js. It manages user and card data, using MongoDB for storage. The server includes middleware for logging, error handling, and cross-origin resource sharing (CORS). It's designed to be easy to maintain and expand, making it suitable for various uses.

## Features

### 1. Users Management
- **Registration**: Users can register by providing necessary details, which are validated and stored securely in the database.
- **Authentication**: Secure user authentication using JWT (JSON Web Tokens).
- **Password Hashing**: Passwords are hashed using bcrypt to ensure security.
- **User Profile**: Fetch and update user profile information.

### 2. Sound-Cards Management
- **Create Cards**: Users can create new cards with specific attributes.
- **Comments Cards**: Users can create comments on cards and view the comments on each card.
- **Read Cards**: Fetch a list of all cards or details of a specific card.
- **Update Cards**: Update information on existing cards.
- **Delete Cards**: Remove cards from the database.

### 3. Database Integration
- **MongoDB**: Data is stored in a MongoDB database using Mongoose for schema definitions and queries.

### 4. Middleware and Utilities
- **CORS**: Enabled cross-origin resource sharing using the `cors` package.
- **Logging**: HTTP request logging using `morgan` for easier debugging and monitoring.
- **Environment Variables**: Configuration management using `dotenv`.

### 5. Validation and Error Handling
- **Input Validation**: Request data validation using Joi to ensure data integrity.
- **Centralized Error Handling**: Consistent error responses and error logging.

### 6. Developer Experience
- **TypeScript**: TypeScript is used for type checking and improved code quality.
- **Chalk and Figlet**: Used for enhancing console output and server start messages.

### 7. Additional Tools
- **Underscore**: Utility library for data manipulation and functional programming.
- **bcrypt**: Secure password hashing.
- **jsonwebtoken**: JWT-based authentication.

## Getting Started

1. **Install Dependencies**: Run `npm i` to install all required dependencies.
2. **Set Up Environment Variables**: Create a `.env` file based on the provided `.env.example` and configure your environment variables.
3. **Run the Server**: Use `npm run dev` to start the server on port 8080.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Special thanks to the creators of Express.js, MongoDB, Mongoose, and all the open-source libraries used in this project.

## Contact

For more information, please contact:

Eliyahu Levi  
Email: [eliyahuofficialmusic@gmail.com](mailto:eliyahuofficialmusic@gmail.com)  
LinkedIn: [linkedin.com/in/eliyahuofficial](https://www.linkedin.com/in/eliyahuofficial/)

---

© 2024 Eliyahu Levi All Rights Reserved.
