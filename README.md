[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19871195&assignment_repo_type=AssignmentRepo)
# MERN Stack Integration Assignment
# 🧠 Categories Blog API & Frontend

A full-stack blog application built with modern web technologies. This project allows users to view blog posts by category, explore post details, and browse an intuitive frontend powered by React and TailwindCSS. The backend provides structured API endpoints for categories and posts.

---

## 🚀 Project Overview

This application demonstrates:
- Fetching blog categories from a backend API
- Dynamic rendering using React and TailwindCSS
- Responsive design with dark mode support
- Clean UI components like `CategoryCard`, `PostCard`, and `Sidebar`
- Organized file structure and reusable components

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, React Router
- **Backend:** Node.js, Express, MongoDB (for API & database)
- **Icons & UI:** Lucide React, React Icons

---

## 🧪 Features Implemented

✅ Browse categories  
✅ View posts by category  
✅ Responsive layout (mobile-friendly)  
✅ Dark/Light mode support  
✅ API integration with loading state  
✅ Component reusability with props  
✅ Clean UX with error handling  
✅ Link to LinkedIn or external sites

---

## ⚙️ Setup Instructions

### 📦 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-Chukwunonso10
cd blog-categories-app

cd client
npm install
npm run dev   # or npm start

Backend end set up
cd server
npm install
npm run dev

PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key

API DOCUMENTATIONS
  Get All Categories
GET /api/categories

🔹 Get Posts by Category
GET /api/categories/:categoryId/posts

🙋‍♂️ Author
MR JUDE
LinkedIn Profile



📃 License
This project is licensed under the MIT License — feel free to use and modify for learning and portfolio purposes.





















































This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 