require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Create DB connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Test DB connection
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL Database');
});


// Inject db into requests
app.use((req, res, next) => {
  req.db = db;
  next();
});


// Use posts CRUD routes
const postsRoutes = require("./routes/posts");
app.use("/api/posts", postsRoutes);


// Global error handler (must be after routes)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err); // server log (do not leak stack to clients)
  // If err has status, use it; otherwise 500
  const status = err.status || 500;
  const message = process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message;
  res.status(status).json({ error: message });
});


// Example route
app.get('/', (req, res) => {
  res.send('Blog API is running...');
});


// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
