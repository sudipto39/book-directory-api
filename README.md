# 📚 Book Directory API

A simple Node.js and Express REST API for managing a book directory with MongoDB.  
Supports CRUD operations (Create, Read, Update, Delete) for books, including fields like **title, author, published year, and genre**.

---

## 🚀 Features
- Create a new book entry  
- Get all books or a single book by ID  
- Update book details  
- Delete a book  
- Error handling with custom middleware  

---

## 🛠️ Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **dotenv** for environment variables  

---

## 📂 Project Structure
server/
│
├── config/
│ └── db.js # Database connection setup
│
├── controller/
│ └── bookController.js # Book CRUD logic
│
├── models/
│ └── Book.js # Book schema/model
│
├── routes/
│ └── bookRoutes.js # API routes for books
│
├── utils/
│ ├── appError.js # Custom error handler
│ └── catchAsync.js # Async wrapper
│
├── .env # Environment variables
├── .gitignore # Ignored files
├── package.json # Dependencies
├── server.js # Main entry point
└── README.md 


---

## ⚙️ Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/book-directory-api.git
   cd book-directory-api/server
2. Install dependencies
   npm install
3. Add environment variables in .env
   PORT=3030
   MONGO_URI=mongodb://localhost:27017/bookDB
   
5. Start the server
   npm run dev

📌 API Endpoints
| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| GET    | `/api/v1/books`     | Get all books  |
| GET    | `/api/v1/books/:id` | Get book by ID |
| POST   | `/api/v1/books`     | Add a new book |
| PUT    | `/api/v1/books/:id` | Update a book  |
| DELETE | `/api/v1/books/:id` | Delete a book  |

✅ Example JSON Data
 {
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "publishedYear": 1999,
  "genre": "Programming"
 }

📬 Testing with Postman
1️⃣ Create a Book

POST http://localhost:3030/api/v1/books

Body (JSON):
 {
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "publishedYear": 2008,
  "genre": "Programming"
 }


2️⃣ Get All Books

GET http://localhost:3030/api/v1/books

3️⃣ Get Book by ID

GET http://localhost:3030/api/v1/books/<bookId>

4️⃣ Update a Book

PUT http://localhost:3030/api/v1/books/<bookId>

Body (JSON):

  {
  "title": "Clean Coder",
  "author": "Robert C. Martin",
  "publishedYear": 2011,
  "genre": "Programming"
  }

  5️⃣ Delete a Book

DELETE http://localhost:3030/api/v1/books/<bookId>

📝 License

This project is licensed under the MIT License.

---
