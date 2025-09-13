// routes/posts.js
const express = require('express');
const router = express.Router();
const { body, param, validationResult } = require('express-validator');

// Use the db connection from req.db (injected from index.js)

// Validation helpers
const postValidators = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 255 }).withMessage('Title must be <= 255 chars'),
  body('content')
    .trim()
    .notEmpty().withMessage('Content is required')
    .isLength({ min: 5 }).withMessage('Content must be at least 5 characters'),
  body('author')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Author must be <= 100 chars')
];

// CREATE
router.post('/', postValidators, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { title, content, author } = req.body;
  const sql = 'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)';
  req.db.query(sql, [title, content, author || null], (err, result) => {
    if (err) return next(err); // send to global error handler
    res.status(201).json({ id: result.insertId, title, content, author: author || null });
  });
});

// READ all
router.get('/', (req, res, next) => {
  req.db.query('SELECT * FROM posts ORDER BY created_at DESC', (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
});

// READ one
router.get('/:id', param('id').isInt().withMessage('id must be an integer'), (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { id } = req.params;
  req.db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) return next(err);
    if (!results.length) return res.status(404).json({ error: 'Post not found' });
    res.json(results[0]);
  });
});

// UPDATE
router.put('/:id', [
  param('id').isInt().withMessage('id must be an integer'),
  ...postValidators
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { id } = req.params;
  const { title, content, author } = req.body;
  const sql = 'UPDATE posts SET title = ?, content = ?, author = ? WHERE id = ?';
  req.db.query(sql, [title, content, author || null, id], (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post updated' });
  });
});

// DELETE
router.delete('/:id', param('id').isInt().withMessage('id must be an integer'), (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { id } = req.params;
  req.db.query('DELETE FROM posts WHERE id = ?', [id], (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  });
});

module.exports = router;
