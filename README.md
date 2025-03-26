# E-Commerce Website

An online marketplace that connects nearby shops and stores, allowing customers to purchase products seamlessly.

## Features

- User authentication (Sign up, Login, Logout)
- Role-based access for Customers, Sellers, and Rental Users
- Product listing and shopping experience
- Secure authentication using JWT
- MongoDB as the database

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

## Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-repo/e-commerce-website.git
cd e-commerce-website
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Server

```sh
node server.js
```

### 5️⃣ Run the Frontend (Optional for Static Frontend)

Simply open the `index.html` file in a browser.

## API Endpoints

### 🔹 Authentication Routes

| Method | Endpoint   | Description           |
| ------ | ---------- | --------------------- |
| POST   | /signup    | Register new user     |
| POST   | /login     | Authenticate user     |
| GET    | /dashboard | Access user dashboard |

### 🔹 Example User Signup Request

```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "userType": "customer"
}
```

## Troubleshooting

### 🔸 Port Already in Use Error

If you see `EADDRINUSE`, stop the process using:

```sh
kill -9 $(lsof -t -i:5000)
```

Then restart the server.

### 🔸 MongoDB Connection Issues

Ensure that your MongoDB URI is correctly set in the `.env` file and MongoDB is running.

## Future Enhancements

- Integrate Firebase for authentication
- Implement a checkout and payment system
- Add real-time notifications

## License

This project is licensed under the MIT License.
