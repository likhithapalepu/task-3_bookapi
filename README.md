# Book API (Task 3)

Simple **in-memory** REST API to manage books using **Node.js** and **Express**.
This project is created to satisfy the Task 3 requirements.

## Files
- `server.js` - Express server with CRUD endpoints
- `package.json` - Node project config (run `npm install` to install dependencies)

## Setup & Run
1. Make sure Node.js (v14+) and npm are installed.
2. Extract the project and run in the project folder:
   ```bash
   npm install
   npm start
   ```
3. The server runs on `http://localhost:3000` by default.

## API Endpoints
- `GET /books` - Get all books (200)
- `GET /books/:id` - Get a single book by id (200) or 404 if not found
- `POST /books` - Create a book. Body: `{ "title": "...", "author": "..." }` (201 on success, 400 if invalid)
- `PUT /books/:id` - Update a book. Body: `{ "title": "...", "author": "..." }` (200) or 404
- `DELETE /books/:id` - Delete a book (200) or 404

## Example using `curl`
- Add a book:
  ```bash
  curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title":"1984","author":"George Orwell"}'
  ```
- Get books:
  ```bash
  curl http://localhost:3000/books
  ```
- Update book:
  ```bash
  curl -X PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d '{"title":"New Title"}'
  ```
- Delete book:
  ```bash
  curl -X DELETE http://localhost:3000/books/1
  ```



## Notes
- This project stores data in memory: all data will be lost when the server restarts.
- For production, connect to a real database (MongoDB, PostgreSQL, etc.) and add validation & logging.
