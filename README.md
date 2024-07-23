# Sound Bazar

Sound Bazar is a dynamic platform designed to foster a vibrant community of music creators and enthusiasts. This platform allows creators to share their music productions, complete with detailed information and captivating images. Users can explore, play, like, comment on, and download these sounds, creating a rich, interactive experience for music lovers. Whether you're a new artist looking to showcase your latest work or an avid listener searching for fresh sounds, Sound Bazar offers a space to connect, engage, and celebrate the art of music.

## Overview

Sound Bazar goes beyond traditional music-sharing platforms by providing creators with a suite of tools and resources to enhance their profiles and track the performance of their uploads. The platform's intuitive design ensures ease of use for both creators and users, making it simple to navigate and find content of interest. With regular events and competitions, Sound Bazar also provides opportunities for emerging talents to gain recognition and collaborate with others in the industry.

### Key Features

- 🎯 **User Authentication**: Secure login and registration process using JSON Web Tokens (JWT). Ensures that user data and interactions are protected.
- 🎵 **Sound Uploading**: Allows creators to upload their sounds along with detailed descriptions and images, providing a comprehensive overview of their work.
- 🎧 **Audio Playback**: High-quality playback functionality with user-friendly controls, ensuring an optimal listening experience.
- 👍 **Like and Comment**: Users can interact with sounds by liking and commenting, fostering engagement and feedback.
- 📥 **Download Sounds**: Enables users to download sounds for offline use, making it convenient to enjoy content without an internet connection.
- 📱 **Responsive Design**: The platform is designed to be fully responsive, ensuring a seamless experience on both mobile and desktop devices.
- 🛠️ **Admin Panel**: Includes administrative functionalities for managing sound uploads, user profiles, and other critical aspects of the platform.
- 👤 **User Profiles**: Users can view and update their profile information, including personal details and uploaded content.
- 📊 **CRM Dashboard**: Provides tools for tracking and managing users and sounds, offering insights into platform usage and performance.
- 🏆 **Events and Competitions**: Regularly hosted events and competitions highlight emerging talents and provide additional exposure for creators.

## Technologies

### Frontend

Sound Bazar's frontend is built using a modern stack of technologies to ensure a smooth and engaging user experience.

- ⚛️ **React**: A JavaScript library for building user interfaces, allowing for the creation of dynamic and interactive components.
- ⚡ **Vite**: A next-generation build tool that offers fast development and optimized production builds, enhancing performance and efficiency.
- 📝 **TypeScript**: A superset of JavaScript that adds static typing, making the codebase more robust and maintainable.
- 🌟 **Tailwind CSS**: A utility-first CSS framework that provides a flexible and customizable approach to styling, allowing for rapid design iteration.
- 🧩 **Flowbite React**: A component library built on top of Tailwind CSS, offering pre-built components to accelerate development.
- 🌐 **Axios**: A promise-based HTTP client for making API requests, facilitating communication between the frontend and backend.
- 🚀 **React Router DOM**: A routing library for React that enables declarative routing, allowing for smooth navigation between different views.
- 🎛️ **React H5 Audio Player**: A customizable audio player component for React, providing users with control over audio playback.
- 📋 **React Hook Form**: A library for managing forms in React, offering easy-to-use validation and performance optimization.
- 🎨 **Emotion**: A library for writing CSS styles with JavaScript, allowing for dynamic styling based on application state.
- ⚠️ **SweetAlert2**: A replacement for JavaScript's popup boxes, offering customizable and accessible alerts.
- 📣 **React Toastify**: A library for adding notifications to the application, providing user feedback in a non-intrusive manner.
- 📉 **Wavesurfer.js**: A library for visualizing audio waveforms, enhancing the audio playback experience with interactive elements.
- 🏗️ **Framer Motion**: A motion library for React, allowing for the creation of animations and transitions to enrich the user interface.

### Backend

The backend of Sound Bazar is built with Express.js and MongoDB, providing a scalable and reliable server environment.

- 🛠️ **Express.js**: A minimalist web framework for Node.js, facilitating the creation of robust and efficient server-side applications.
- 📦 **MongoDB**: A NoSQL database for storing sound and user data, offering flexibility and scalability for handling large amounts of data.
- 🧩 **Mongoose**: An object modeling tool for MongoDB, providing schema definitions and query capabilities to streamline database interactions.
- 📝 **TypeScript**: Used on the backend for type safety and improved code quality, ensuring a consistent and reliable server environment.
- 🔐 **JWT (JSON Web Tokens)**: Used for secure authentication and authorization, protecting user data and interactions.
- 🔒 **bcrypt**: A library for hashing passwords securely, ensuring that user credentials are protected against unauthorized access.
- 🌐 **cors**: Middleware for enabling Cross-Origin Resource Sharing, allowing the frontend and backend to communicate securely across different domains.
- 📜 **morgan**: An HTTP request logger middleware for Node.js, providing insights into server activity and aiding in debugging and monitoring.
- 🔧 **dotenv**: A library for managing environment variables, allowing for secure configuration of application settings.
- ✅ **Joi**: A library for schema validation, ensuring that incoming data meets the required format and constraints.

## Installation

To get started with Sound Bazar, follow the instructions below to set up both the frontend and backend components.

### Backend Setup

1. **Install Dependencies**: Run `npm i` to install all required dependencies.
2. **Set Up Environment Variables**: Create a `.env` file based on the provided `.env.example` and configure your environment variables.
3. **Run the Server**: Use `npm run dev` to start the server on port 8080.

### Frontend Setup

1. **Install Dependencies**: Run `npm i` to install all required dependencies.
2. **Run the Client**: Use `npm run dev` to start the client on baseUrl = "http://localhost:8080/api/v1".

## Usage

### Frontend Usage

- 🔍 **Explore Sounds**: Navigate through the platform to discover new music productions. Browse by categories, tags, or search for specific sounds.
- 🎵 **Play Sounds**: Use the audio player to listen to sounds directly on the platform. Adjust playback settings and controls as needed.
- 👍 **Like and Comment**: Interact with sounds by liking and commenting. Share your thoughts and feedback with creators and other users.
- 📥 **Download Sounds**: Save sounds to your device for offline listening. Downloading is available for registered users.
- 🛠️ **Admin Panel**: Admin users can access the admin panel to manage sound uploads, review user activity, and perform other administrative tasks.

### Backend Usage

- 📡 **API Endpoints**: The backend provides RESTful APIs for managing sounds, users, and comments. Refer to the API documentation for details on available endpoints and usage.
- 🗃️ **Database Management**: MongoDB handles data storage for sounds, user profiles, and comments. Mongoose provides schema definitions and query capabilities.
- 🔐 **Authentication**: Secure authentication is managed using JWTs. Ensure that users are properly authenticated before accessing protected resources.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For more information, please contact:

Eliyahu Levi  
Email: [eliyahuofficialmusic@gmail.com](mailto:eliyahuofficialmusic@gmail.com)  
LinkedIn: [linkedin.com/in/eliyahuofficial](https://www.linkedin.com/in/eliyahuofficial/)

---

© 2024 Eliyahu Levi All Rights Reserved.
