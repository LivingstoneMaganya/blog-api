📝 Blog API – Node.js + Express + MySQL

A simple RESTful Blog API built with Node.js, Express, and MySQL.  
This project is part of my Full Stack Development + DevSecOps learning journey and demonstrates how to design a clean, secure, and scalable backend.

---

## 🚀 Features
- RESTful API endpoints
- MySQL database integration
- Express.js server
- Environment variable support with `.env`
- Organized folder structure (routes, controllers, models)
- Secure credentials handling (`.env` + `.gitignore`)

---

## ⚙️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Environment Management:** dotenv  
- **Version Control:** Git + GitHub  


---

## 📦 Installation & Setup

1. Clone this repository
   ```bash
   git clone https://github.com/livingstonemaganya/blog-api.git
   cd blog-api
2. Install dependencies
   ```bash
   npm install
3. Setup Environment Variables
Create a .env file in the root folder:

   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=blog_db
   PORT=3000

4. Create the database

   mysql -u root -p 
   CREATE DATABASE blog_db;

5. Start the server

   node src/index.js


The server runs at http://localhost:3000

API Endpoints

| Method | Endpoint | Description            |
| ------ | -------- | ---------------------- |
| GET    | `/`      | Test server is running |
| GET    | `/posts` | Fetch all blog posts   |
| POST   | `/posts` | Create a new blog post |


## 🔒 Security Best Practices

This project follows basic security principles to keep credentials and data safe:

- Environment Variables: Sensitive values (DB credentials, ports) are stored in a `.env` file and never committed to GitHub.  
- `.gitignore`: The `.env` file is included in `.gitignore` to prevent accidental leaks.  
- Database User: Use a dedicated database user with limited privileges instead of the root account in production.  
- Passwords: Always use **strong, unique passwords** for your database.  
- **Future Enhancements**:  
  - Add input validation & sanitization (to prevent SQL injection).  
  - Implement authentication (JWT / OAuth2).  
  - Deploy with SSL/TLS enabled for secure communication.  


## 📚 Learning Goals
- Strengthen backend development with Node.js & Express  
- Practice integrating MySQL databases  
- Learn to organize backend projects professionally  
- Prepare for future **DevSecOps** and **Cloud** deployment  


## 🤝 Contributing
Contributions, issues, and feature requests are welcome.  

- Fork the repo  
- Create a new branch (`git checkout -b feature-name`)  
- Commit your changes (`git commit -m "Added new feature"`)  
- Push to the branch (`git push origin feature-name`)  
- Open a Pull Request  



