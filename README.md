# Smart Bookmark Manager

A modern **full-stack Bookmark Manager** that allows users to save, manage, and organize their favorite links with a clean, responsive UI.

Built with the MERN stack and designed with production-ready UI/UX principles.

---

## Live Demo

* 🌐 **Live Website:** https://smart-bookmark-manager-lovat.vercel.app
* 🔗 **Backend API:** https://smart-bookmark-manager-1qy8.onrender.com
* 📂 **GitHub Repository:** https://github.com/Purva152004/smart-bookmark-manager

---

## Features

### 🔹 Core Features

*  Add bookmark (title + URL)
*  View all bookmarks
*  Edit bookmark
*  Delete bookmark
*  Copy URL to clipboard
*  Search bookmarks

###  UI/UX Features

*  Dark / Light mode toggle
*  Fully responsive (mobile-first)
*  Glassmorphism sticky navbar
*  Modern card layout
*  Smooth hover animations
*  Professional footer

###  Technical Highlights

* RESTful API design
* MongoDB with Mongoose
* Error handling
* Clean component architecture
* Production-ready CSS structure

---

## Tech Stack

**Frontend**

* React (Vite)
* CSS3 (Modern responsive styling)
* Axios
* Lucide React Icons

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors

---

## Project Structure

```
smart-bookmark-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Bookmark.js
│   ├── routes/
│   │   └── bookmarkRoutes.js
│   ├── server.js
│   ├── .env
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── BookmarkForm.jsx
│   │   │   └── BookmarkList.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── .env
│
└── README.md
```
---

##  Installation & Setup

###  Backend Setup

```bash
cd backend
npm install
```
```bash
npm run dev
```
Backend runs on:
```
http://localhost:5000
```
---

### Frontend Setup

Open new terminal:

```bash
cd frontend
npm install
npm run dev
```
Frontend runs on:
```
http://localhost:5173
```
---

## API Endpoints

Base URL:
```
/api/bookmarks
```

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | `/`      | Add bookmark      |
| GET    | `/`      | Get all bookmarks |
| PUT    | `/:id`   | Update bookmark   |
| DELETE | `/:id`   | Delete bookmark   |

---

## Responsive Design

The application is fully responsive and optimized for:

* ✅ Mobile devices
* ✅ Tablets
* ✅ Laptops
* ✅ Large screens
---

## Deployment

The application is deployed using modern cloud platforms for scalability and reliability.

**Frontend**

* Hosted on **Vercel**

**Backend**

* Hosted on **Render**

**Database**

* Managed with **MongoDB Atlas**
