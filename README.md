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

8. Manage State By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from useReducer

9. Add bootstrap UI Framework

   1. npm install react-bootstrap bootstrap
   2. update app.js

10. Create Product and Rating Component

    1. create Rating component
    2. create Product component
    3. use Rating component in Product component

11. Create Product Details Screen

    1. fetch product from backend
    2. create 3 columns for image, info and action

12. Create Loading and Message Component

    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
    5. display error messages

13. Implement Add To Cart

    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart Button click handler

14. Complete Add To Cart

    1. check exist item in the cart
    2. check count in stock in backend

15. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column

16 . Complete Cart Screen

1.  click handler for increment/decrement item
2.  click handler for remove item
3.  click handler for checkout

4.  Create SignIn Screen
    1.  create sign in form
    2.  add email and password
    3.  add signin button
