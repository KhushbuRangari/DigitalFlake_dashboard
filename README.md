[Screenshot_20240206_135322](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/68e8f7fe-f28d-4cc6-80d6-347f3ec93bc9)
![Screenshot_20240206_135308](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/91ae9ae0-a38d-46f2-926b-dd6f0b3e242d)
![Screenshot_20240206_135242](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/d87af137-205f-4928-9786-ab3229e7e729)
![Screenshot_20240206_135232](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/22fdf1c8-feb6-4fb3-89a6-1e6c491e2bb9)
![Screenshot_20240206_135202](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/2e99f3d3-d419-41cd-81f3-a8e8383a1f37)
![Screenshot_20240105_181301](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/a7fedbc2-7057-4e62-bdc4-e1c62854f03b)
![Screenshot_20240105_181201](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/916aac24-2bc2-4517-a0cf-9d9c7173d0c4)
![Screenshot_20![Login Page](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/2dddf4c8-5ada-482f-9abe-badd27ecc401)
240105_181145](https://github.com/KhushbuRangari/DigitalFlake_dashboard/assets/126225826/22cbe611-9148-4230-b9b7-bf084f5d5042)


Project Details: Ecommerce Admin with MERN Stack
Overview:
This project focuses on creating a comprehensive Ecommerce Admin application using the MERN (MongoDB, Express.js, React.js, Node.js) Stack. It provides functionalities for user authentication, category management, product management, and more, enabling users to efficiently manage their online store.
Functionalities:
1. User Authentication:
Allows users to register with a unique email and password.
Provides secure login and logout functionalities.
Supports password reset and forgot password features for enhanced user experience.
2. Category Management:
Enables users to add new categories with a name and description.
Retrieves and displays all existing categories for easy management.
3. Product Management:
Allows users to add new products with details such as name, pack size, price, and an optional image.
Retrieves and displays all existing products for easy viewing and editing.
Technologies Used:
1. Frontend:
React.js: A JavaScript library for building user interfaces, used for creating the frontend interface of the Ecommerce Admin.
React Router: Used for routing and navigation within the application.
React Toastify: A React notification library used for displaying alerts and notifications.
Context API: Utilized for state management within the application.
2. Backend:
Node.js: A JavaScript runtime used for building the backend server.
Express.js: A web application framework for Node.js, used for handling HTTP requests and routes.
Multer: A middleware for handling file uploads, used for uploading product images.
JWT (JSON Web Tokens): Used for user authentication and authorization.
3. Database:
MongoDB: A NoSQL database used for storing user, category, and product data.
4. Other Tools and Libraries:
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, used for modeling application data.
Cors: A middleware for enabling Cross-Origin Resource Sharing, used for allowing requests from the frontend to the backend.
How It's Done:
1. Frontend Development:
The frontend interface is built using React.js, with components such as Navbar, Sidebar, Home, Category, Product, AddCategory, AddProduct, Logout, and ForgotPassword.
React Router is used for navigation between different pages of the application.
Context API is utilized for managing global state, ensuring data consistency across components.
2. Backend Development:
The backend server is built using Node.js and Express.js, with routes defined for user authentication, category management, and product management.
JWT authentication is implemented for securing routes and ensuring authorized access to protected endpoints.
Multer middleware is used for handling file uploads, allowing users to upload product images.
3. Database Integration:
MongoDB is used as the database for storing user, category, and product data.
Mongoose is used for creating schemas and models, providing a structured way to interact with the MongoDB database.
I have created a small video to showcase the project :

The endpoint details are :
Endpoint Document: Ecommerce Admin with MERN Stack
1. User Authentication Endpoints:
- Register User 
 - URL: `/user/api/register`
 - Method: POST
 - Description: Allows users to register with a unique email and password.
 - Request Body: 
 - `email` (string, required): User's email address.
 - `password` (string, required): User's password.
 - Response: 
 - `message`: Registration success message.
 - `token`: JWT token for authentication.
- Login User 
 - URL: `/user/api/login`
 - Method: POST
 - Description: Allows users to log in with their registered email and password.
 - Request Body: 
 - `email` (string, required): User's registered email address.
 - `password` (string, required): User's password.
 - Response: 
 - `message`: Login success message.
 - `token`: JWT token for authentication.
- Reset Password 
 - URL: `/user/api/reset`
 - Method: POST
 - Description: Allows users to reset their password.
 - Request Body: 
 - `email` (string, required): User's registered email address.
 - `password` (string, required): New password.
 - Response: 
 - `message`: Password reset success message.
- Forgot Password 
 - URL: `/user/api/forgotPassword`
 - Method: POST
 - Description: Allows users to request a password reset link via email.
 - Request Body: 
 - `email` (string, required): User's registered email address.
 - Response: 
 - `message`: Password reset link sent successfully message.
2. Category Management Endpoints:
- Add Category 
 - URL: `/category/api/add`
 - Method: POST
 - Description: Allows authenticated users to add a new category.
 - Request Body: 
 - `categoryName` (string, required): Name of the category.
 - `categoryDescription` (string, required): Description of the category.
 - Response: 
 - `message`: Category added successfully message.
- Get All Categories 
 - URL: `/category/api/getAll`
 - Method: GET
 - Description: Retrieves all existing categories.
 - Response: 
 - Array of category objects containing `categoryName` and `categoryDescription`.
3. Product Management Endpoints:
- Add Product 
 - URL: `/product/api/add`
 - Method: POST
 - Description: Allows authenticated users to add a new product.
 - Request Body: 
 - `name` (string, required): Name of the product.
 - `packSize` (string, required): Pack size of the product.
 - `price` (string, required): Price of the product.
 - `imgURL` (file): Image of the product (optional).
 - `category` (string, required): ID of the category to which the product belongs.
 - Response: 
 - `message`: Product added successfully message.
- Get All Products 
 - URL: `/product/api/getAll`
 - Method: GET
 - Description: Retrieves all existing products.
 - Response: 
 - Array of product objects containing `name`, `packSize`, `price`, `imgURL`, `status`, and `category`.
Note: Authentication (JWT token) is required for accessing protected endpoints.

This Ecommerce Admin project showcases the power of the MERN Stack in building robust and scalable web applications. With user authentication, category management, and product management functionalities, it serves as a valuable tool for businesses looking to establish and manage their online presence effectively. Through the seamless integration of frontend and backend technologies, this project demonstrates the versatility and efficiency of modern web development practices.
