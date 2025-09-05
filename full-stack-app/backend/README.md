# Backend Application

This is the backend part of the full-stack application built with Node.js and Express.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd full-stack-app/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` directory and add your environment variables. For example:
   ```
   PORT=5000
   DATABASE_URL=<your-database-url>
   ```

4. **Run the application**:
   ```
   npm start
   ```

## API Endpoints

- **GET /**: Returns a welcome message.
- **Other endpoints**: (Add details about other API endpoints here as they are developed)

## Folder Structure

- `src/app.js`: Entry point of the application.
- `src/controllers`: Contains the logic for handling requests.
- `src/routes`: Defines the routes for the application.
- `src/models`: Contains the data models used in the application.

## Technologies Used

- Node.js
- Express
- MongoDB (or any other database you choose)

## License

This project is licensed under the MIT License.