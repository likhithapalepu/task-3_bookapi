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

## Interview Questions & Answers (from the task)
1. **What is REST?**  
   REST (Representational State Transfer) is an architectural style for designing networked applications — uses stateless HTTP methods to operate on resources identified by URIs.
2. **What are HTTP methods and their use?**  
   Common methods: `GET` (read), `POST` (create), `PUT/PATCH` (update), `DELETE` (remove).
3. **How do you handle routes in Express?**  
   Use `app.get`, `app.post`, `app.put`, `app.delete` with path strings and handler functions.
4. **What is middleware in Express?**  
   Middleware are functions that run during the request-response cycle; e.g., `express.json()` parses JSON bodies.
5. **How do you parse JSON in Express?**  
   Use `app.use(express.json())` to parse incoming JSON request bodies.
6. **What status codes do you use for CRUD?**  
   `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`.
7. **How would you handle errors in Express?**  
   Validate input, return appropriate status codes and messages, and optionally use error-handling middleware `app.use((err, req, res, next) => ...)`.
8. **What is CORS?**  
   Cross-Origin Resource Sharing — a browser mechanism that allows controlled access to resources from a different origin. Use the `cors` middleware to enable it.
9. **Explain request and response objects in Express.**  
   `req` contains request data (params, body, query); `res` is used to send back data/status to the client.
10. **How do you test API endpoints?**  
   Use tools like Postman, curl, or automated tests (Mocha, Jest, Supertest).

## Notes
- This project stores data in memory: all data will be lost when the server restarts.
- For production, connect to a real database (MongoDB, PostgreSQL, etc.) and add validation & logging.
