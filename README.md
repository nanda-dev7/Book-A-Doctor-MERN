# 🩺 Book A Doctor - Full Stack MERN Application

A production-ready doctor appointment booking platform built using the MERN Stack. The application enables patients to book appointments, doctors to manage appointment requests, and administrators to approve doctor registrations through a role-based workflow.

## 🚀 Live Demo

### Frontend

https://book-a-doctor-two.vercel.app/login

### Backend API

https://book-a-doctor-mern-1.onrender.com

---

## ✨ Features

### Authentication & Security

* JWT Authentication
* Password Hashing using bcryptjs
* Protected Routes
* Role-Based Access Control (RBAC)
* User Session Management

### Patient Features

* User Registration & Login
* Browse Approved Doctors
* Book Appointments
* View Appointment History
* Receive Notifications
* Track Appointment Status

### Doctor Features

* Apply for Doctor Account
* Doctor Dashboard
* View Appointment Requests
* Approve Appointments
* Reject Appointments
* Receive Appointment Notifications

### Admin Features

* View Doctor Applications
* Approve Doctor Accounts
* Manage Registered Doctors
* Role-Based Administrative Access

### Notification System

* Doctor Approval Notifications
* New Appointment Notifications
* Appointment Status Updates

---

## 🏗️ Architecture

### Frontend

* React.js
* Vite
* Redux Toolkit
* React Router DOM
* Axios
* Ant Design

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcryptjs

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```text
Book-A-Doctor-MERN
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── routes
│   │   └── services
│   └── package.json
│
└── README.md
```

---

## 🔑 User Roles

### User

* Register/Login
* View Approved Doctors
* Book Appointments
* Manage Personal Appointments
* Receive Notifications

### Doctor

* Access Doctor Dashboard
* Manage Appointment Requests
* Update Appointment Status
* Receive Appointment Requests

### Admin

* Review Doctor Applications
* Approve Doctor Accounts
* Manage Doctors

---

## ⚙️ Local Installation

### Clone Repository

```bash
git clone https://github.com/nanda-dev7/Book-A-Doctor-MERN.git
cd Book-A-Doctor-MERN
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api/v1
```

Run Frontend

```bash
npm run dev
```

---

## API Modules

### Auth Module

* Register User
* Login User
* Current User
* Notifications
* Mark Notifications as Read

### Doctor Module

* Apply Doctor
* Get Doctor Information
* Get Approved Doctors

### Appointment Module

* Book Appointment
* Get User Appointments
* Get Doctor Appointments
* Update Appointment Status

### Admin Module

* Get All Doctors
* Approve Doctor Applications

---


---

## 🎯 Learning Outcomes

This project helped implement and understand:

* Full Stack MERN Development
* REST API Design
* Authentication & Authorization
* Role-Based Access Control
* MongoDB Relationships
* Redux State Management
* Deployment on Render & Vercel
* Environment Variables
* CORS Configuration
* Production Debugging

---

## 👨‍💻 Author

Vivekananda Reddy

GitHub:
https://github.com/nanda-dev7


---

## 📜 License

This project is created for educational, portfolio, and learning purposes.


---

## License

This project is for educational and portfolio purposes.
