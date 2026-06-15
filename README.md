# 🩺 Book A Doctor - MERN Stack Application

A full-stack doctor appointment booking platform built using the MERN Stack.

## 🚀 Features

### Authentication & Authorization

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role Based Access Control (RBAC)

### User Features

- View Approved Doctors
- Apply as Doctor
- Book Appointments
- View Appointment History
- Receive Notifications

### Doctor Features

- Doctor Dashboard
- View Appointment Requests
- Approve Appointments
- Reject Appointments

### Admin Features

- View Doctor Applications
- Approve Doctors
- Manage Doctors

### Notifications

- Doctor Approval Notifications
- Appointment Request Notifications
- Appointment Status Notifications

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Ant Design

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

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
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/nanda-dev7/Book-A-Doctor-MERN.git
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
npm run dev
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

- Register User
- Login User
- Current User
- Notifications

### Doctor Module

- Apply Doctor
- Get Doctor Info
- Get Approved Doctors

### Appointment Module

- Book Appointment
- User Appointments
- Doctor Appointments
- Update Appointment Status

### Admin Module

- Get All Doctors
- Approve Doctor

---

## Future Improvements

- Online Payments
- Video Consultation
- Doctor Search & Filters
- Appointment Cancellation
- Email Notifications
- Profile Images
- Dashboard Analytics

---

## Author

**Vivekananda Reddy**

GitHub:
https://github.com/nanda-dev7

---

## License

This project is for educational and portfolio purposes.
