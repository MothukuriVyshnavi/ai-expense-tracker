# AI Expense Tracker

An AI-powered Expense Tracker built using the MERN Stack that helps users manage their finances efficiently. The application allows users to track income and expenses, analyze spending patterns using AI, set budgets, and generate insightful financial reports.

---

## Project Status

**Current Progress:** Day 3 – Authentication UI Completed

### Completed

### Day 1 – Project Setup

* GitHub repository created
* React (Vite) frontend initialized
* Express.js backend initialized
* MongoDB Atlas setup
* Initial project structure created
* Initial README file created

### Day 2 – UI Foundation

* Tailwind CSS configured
* React Router DOM configured
* Navigation Bar created
* Footer created
* Dashboard layout created
* Responsive layout structure added

### Day 3 – Authentication UI

* Login page created
* Register page created
* Forgot Password page created
* Client-side form validation implemented
* Show/Hide password functionality
* Navigation between authentication pages
* Responsive authentication pages
* Authentication UI tested

---

## Features

### User Authentication

* User Registration (UI)
* User Login (UI)
* Forgot Password (UI)
* Form Validation
* Show/Hide Password
* Responsive Authentication Pages

### Expense Management (Planned)

* Add Expenses
* Edit Expenses
* Delete Expenses
* View Expense History
* Income Tracking

### Budget Management (Planned)

* Monthly Budget
* Budget Progress
* Budget Alerts

### AI Features (Planned)

* Natural Language Expense Entry
* Spending Analysis
* Personalized Savings Suggestions
* AI Monthly Financial Summary

### Reports (Planned)

* Charts and Graphs
* CSV Export
* PDF Reports

### User Settings (Planned)

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

### AI (Planned)

* Google Gemini API

### Deployment (Planned)

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
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── NotFound.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

## Completed Pages

### Home

* Landing page

### Dashboard

* Dashboard layout

### Login

* Email field
* Password field
* Show/Hide password
* Client-side validation
* Navigation to Register
* Navigation to Forgot Password

### Register

* Name field
* Email field
* Password field
* Confirm Password field
* Terms & Conditions checkbox
* Client-side validation
* Show/Hide password
* Navigation to Login

### Forgot Password

* Email field
* Validation
* Back to Login navigation

---

## Installation

### Clone Repository

```bash
git clone https://github.com/MothukuriVyshnavi/ai-expense-tracker.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

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
```

---

## Development Progress

| Day    | Feature                | Status    |
| ------ | ---------------------- | --------- |
| Day 1  | Project Setup          | Completed |
| Day 2  | UI Foundation          | Completed |
| Day 3  | Authentication UI      | Completed |
| Day 4  | Authentication Backend | Pending   |
| Day 5  | Database Models        | Pending   |
| Day 6  | Dashboard Backend      | Pending   |
| Day 7  | Expense CRUD APIs      | Pending   |
| Day 8  | Categories             | Pending   |
| Day 9  | Budget Module          | Pending   |
| Day 10 | AI Integration         | Pending   |

---

## Current Progress Summary

Completed:

* Project initialization
* MERN project structure
* Tailwind CSS setup
* Navigation Bar
* Footer
* Dashboard UI
* Login UI
* Register UI
* Forgot Password UI
* Form validation
* Show/Hide password
* Navigation between authentication pages
* Responsive design
* UI testing

---

## Upcoming Tasks

* Build Authentication Backend
* JWT Authentication
* Password Encryption using bcrypt
* MongoDB User Model
* Expense Management APIs
* Budget Module
* AI Integration
* Reports and Analytics
* Deployment

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

GitHub: https://github.com/MothukuriVyshnavi/ai-expense-tracker

---

## License

This project is licensed under the MIT License.
