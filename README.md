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


🔒 Security
Secrets (DB credentials, ports, etc.) are stored in .env.
.env is ignored by Git and not pushed to GitHub.
Example .env.example provided for others to replicate safely.

📚 Learning Goals
Strengthen backend development with Node.js & Express
Practice integrating MySQL databases
Learn to organize backend projects professionally
Prepare for future DevSecOps and Cloud deployment

🤝 Contributing
Contributions, issues, and feature requests are welcome.
Feel free to fork this project and submit a PR.



