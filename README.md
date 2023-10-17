# MERN STACK AMAZON E-COMMERCE WEBSITE

## Tech Used:

1. MongoDB (Database)
2. ExpressJS (Backend Framework)
3. ReactJS (Frontend Library/Framework)
4. NodeJS (Server Environment)
5. AWS S3 Bucket for Image Storage
6. Paypal Integration

## Features of the Project:

- User Authentication using JWT Tokens and Refresh Token with Password Reset Feature
- Admin Dashboard to Add, Update or Delete Products in Database
- Shopping Cart Functionality with Quantity Adjustments
- Product Searching by Name & Category
- Responsive Design on Mobile Devices

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/Shital769/amazon
$ cd amazon
```

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/amazon
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

# Steps

1. Install required tools
2. Create React App
3. Create Git Repository
4. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
5. Add Page Routing

   1. npm install react-router-dom
   2. create route for the hoem screen
   3. create router for product screen

6. Create Node.JS Server

   1. run npm init -y in root folder called backend
   2. update package.json set type:" module"
   3. add .js to imports in backend
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. Connect Express with MongoDB
   8. move products.js from frontend to backend
   9. create route for /api/products
   10. return products
   11. run nodemon server.js

7. Fetch Products from Backend
   1. set proxy in package.json file in frontend
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
