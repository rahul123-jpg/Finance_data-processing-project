# 💰 Finance Dashboard Backend API

A backend system built for managing financial records with role-based access control.
This project demonstrates REST API design, authentication, authorization, and data handling using Node.js and MongoDB.

---

## 🚀 Features

* User Registration & Login (JWT Authentication)
* Role-Based Access Control (Viewer, Analyst, Admin)
* Financial Records Management (CRUD)
* Dashboard Summary APIs (Income, Expense, Balance)
* Filtering & Sorting of Records
* Input Validation & Error Handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Thunder Client (API Testing)

---

## 📁 Project Structure

```
finance-backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── app.js
├── .gitignore
```

---

## 👤 User Roles

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Viewer  | Can view dashboard data              |
| Analyst | Can view records and summaries       |
| Admin   | Full access (create, update, delete) |

---

## 🔐 Authentication

* JWT-based authentication
* Token required for protected routes
* Use in headers:

```
Authorization: Bearer <your_token>
```

---

## 📌 API Endpoints

### 🔹 User Routes

| Method | Endpoint            | Description   |
| ------ | ------------------- | ------------- |
| POST   | /api/users/register | Register user |
| POST   | /api/users/login    | Login user    |

---

### 🔹 Record Routes

| Method | Endpoint         | Access         |
| ------ | ---------------- | -------------- |
| POST   | /api/records     | Admin          |
| GET    | /api/records     | Analyst, Admin |
| PUT    | /api/records/:id | Admin          |
| DELETE | /api/records/:id | Admin          |

---

### 🔹 Dashboard Routes

| Method | Endpoint               | Access         |
| ------ | ---------------------- | -------------- |
| GET    | /api/dashboard/summary | Analyst, Admin |

---

## 📊 Dashboard Features

* Total Income
* Total Expense
* Net Balance

---

## 🧪 Testing

APIs tested using Thunder Client.

### Sample Flow:

1. Register user
2. Login to get token
3. Add token in headers
4. Create financial records
5. Fetch records
6. View dashboard summary

---

## ⚙️ Setup Instructions

1. Clone repository

```
git clone <your_repo_link>
```

2. Install dependencies

```
npm install
```

3. Create `.env` file

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

4. Run server

```
npm run dev
```

---

## 💡 Key Learnings

* Implemented role-based authorization
* Designed REST APIs for real-world use
* Managed secure authentication using JWT
* Structured backend in scalable way


---

## ⭐ Conclusion

This project demonstrates a scalable backend system with proper structure, security, and real-world use cases like financial data handling and dashboard analytics.

---
