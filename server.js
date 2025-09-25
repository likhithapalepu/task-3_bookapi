const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory books array
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];
let nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;

// GET /books - return all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET /books/:id - return a single book
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// POST /books - add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }
  const book = { id: nextId++, title, author };
  books.push(book);
  res.status(201).json(book);
});

// PUT /books/:id - update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });
  if (title) books[idx].title = title;
  if (author) books[idx].author = author;
  res.json(books[idx]);
});

// DELETE /books/:id - remove a book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });
  const removed = books.splice(idx, 1);
  res.json({ removed: removed[0] });
});

// Simple health check
app.get('/', (req, res) => res.send('Book API is running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
