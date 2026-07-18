# AI Expense Tracker

An AI-powered Expense Tracker built using the MERN Stack that helps users manage their finances efficiently. The application allows users to track income and expenses, analyze spending patterns using AI, set budgets, and generate insightful financial reports.

---

## Project Status

**Current Progress:** Day 2 – UI Foundation Completed

Completed:

### Day 1 – Project Setup

* GitHub repository created
* React (Vite) frontend initialized
* Express.js backend initialized
* MongoDB Atlas setup
* Basic project structure created
* Initial README added

### Day 2 – UI Foundation

* Tailwind CSS configured
* React Router DOM integrated
* Responsive Navbar created
* Responsive Footer created
* Dashboard UI created
* Reusable Card component developed
* Main Layout implemented
* Dashboard summary cards added
* Recent Transactions section created (Static)
* Expense Overview placeholder added
* Responsive layout completed

---

## Features (Planned)

### User Authentication

* User Registration
* User Login
* JWT Authentication
* Password Encryption (bcrypt)
* Forgot Password

### Expense Management

* Add Expenses
* Edit Expenses
* Delete Expenses
* View Expense History
* Income Tracking

### Budget Management

* Monthly Budget
* Budget Progress
* Budget Alerts

### AI Features

* Natural Language Expense Entry
* Spending Analysis
* Personalized Savings Suggestions
* AI Monthly Financial Summary

### Reports

* Charts and Graphs
* CSV Export
* PDF Reports

### User Settings

* Profile Management
* Theme Settings
* Notifications

---

## Tech Stack

### Frontend

* React.js (Vite)
* React Router DOM
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

### AI

* Google Gemini API

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## Project Structure

```text
ai-expense-tracker/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Card.jsx
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── NotFound.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/MothukuriVyshnavi/ai-expense-tracker.git
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Development Progress

| Day    | Feature                 | Status    |
| ------ | ----------------------- | --------- |
| Day 1  | Project Setup           | Completed |
| Day 2  | UI Foundation           | Completed |
| Day 3  | Authentication UI       | Upcoming  |
| Day 4  | Authentication Backend  | Upcoming  |
| Day 5  | Database Models         | Upcoming  |
| Day 6  | Dashboard Enhancements  | Upcoming  |
| Day 7  | Review & Refactoring    | Upcoming  |
| Day 8  | Expense CRUD            | Upcoming  |
| Day 9  | Categories              | Upcoming  |
| Day 10 | Budget Module           | Upcoming  |
| Day 11 | Transactions            | Upcoming  |
| Day 12 | Charts                  | Upcoming  |
| Day 13 | Dashboard Improvements  | Upcoming  |
| Day 14 | Testing                 | Upcoming  |
| Day 15 | AI Integration          | Upcoming  |
| Day 16 | Natural Language Input  | Upcoming  |
| Day 17 | AI Insights             | Upcoming  |
| Day 18 | Budget Alerts           | Upcoming  |
| Day 19 | Monthly Report          | Upcoming  |
| Day 20 | Receipt OCR             | Upcoming  |
| Day 21 | AI Improvements         | Upcoming  |
| Day 22 | CSV Export              | Upcoming  |
| Day 23 | PDF Reports             | Upcoming  |
| Day 24 | Notifications           | Upcoming  |
| Day 25 | User Settings           | Upcoming  |
| Day 26 | Responsive Optimization | Upcoming  |
| Day 27 | Testing & Bug Fixes     | Upcoming  |
| Day 28 | Deployment              | Upcoming  |
| Day 29 | Documentation           | Upcoming  |
| Day 30 | Final Release           | Upcoming  |

---

## Project Goals

* Build a complete AI-powered Expense Tracker.
* Learn full-stack MERN development.
* Integrate AI using Google Gemini.
* Deploy the application.
* Create a portfolio-ready project for internships and placements.

---

## Author

**Mothukuri Naga Sai Vyshnavi**

GitHub: https://github.com/MothukuriVyshnavi

---

## License

This project is licensed under the MIT License.
