const express = require("express");
const router = express.Router();
const db = require("../db"); // adjust if your db connection file is named differently

// CREATE - Add a new blog post
router.post("/", (req, res) => {
  const { title, content } = req.body;
  const sql = "INSERT INTO posts (title, content) VALUES (?, ?)";
  db.query(sql, [title, content], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Post created", postId: result.insertId });
  });
});

// READ - Get all posts
router.get("/", (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// READ - Get a single post by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM posts WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: "Post not found" });
    res.json(results[0]);
  });
});

// UPDATE - Edit a post
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const sql = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
  db.query(sql, [title, content, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Post updated" });
  });
});

// DELETE - Remove a post
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM posts WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Post deleted" });
  });
});

module.exports = router;
