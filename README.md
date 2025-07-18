# 🏆 Leaderboard System – Backend (Node.js + Express + MongoDB)

This is the backend for the Leaderboard System. It provides RESTful APIs to manage users, claim points, and maintain point history using **Express.js** and **MongoDB**.

## 🌐 Live Backend URL

👉 [Backend on Render](https://leaderboard-system-backend-ushc.onrender.com/)

## 🔗 Frontend Repository

👉 [Leaderboard Frontend (React + Vite)](https://github.com/ravikumargupta07/leaderboard-system-frontend)

---

## 🚀 Tech Stack

- 🧠 Node.js  
- ⚙️ Express.js  
- 🗃️ MongoDB (with Mongoose)  
- 🌐 CORS  
- 📦 dotenv  

---

## 📌 API Endpoints

| Method | Endpoint              | Description                   |
|--------|------------------------|-------------------------------|
| GET    | `/api/users`           | Get all users                 |
| POST   | `/api/users`           | Add a new user                |
| POST   | `/api/users/:id/points`| Claim random points for user  |
| GET    | `/api/points-history`  | Get history of all points     |

---

## ⚙️ Features

- ➕ Add new users  
- 🎲 Claim random (1–10) points  
- 📈 Automatically updates user’s totalPoints  
- 🕒 Saves each point claim in a separate collection  
- 🔐 CORS configured for frontend connection  

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start the server
npm run start:dev


=> (For more details You Can visit to package.json file scripts section)
```
---
# 🌍 Environment Variables
Create a .env file with the following:
 
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=https://leaderboard-system-frontend.vercel.app
---

# 🛠 Deployment
Hosted on: Render

Make sure to allow CORS for your frontend domain

# 🧠 Note
Backend is optimized to handle multiple users.

Make sure Render's "Web Service" is set to auto-deploy from GitHub.

---

