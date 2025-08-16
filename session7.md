# Session 7 - Backend File and Folder Structure

# Agenda

1. [Session Overview](#Session-Overview)
2. [Session Objectives](#Session-Objectives)
3. [Recommended Project Structure](#Recommended-Project-Structure)
4. [Route file Example](#Route-file-Example)
5. [Controller file Example](#Controller-file-Example)
6. [Server.js file](#server-file)
7. [Query Example](#Query-Example)
8. [Params Example](#Params-Example)
9. [Best Practices](#Best-Practices)
10. [Task](#Task)

## Session Overview

In this session, we will focus on restructuring backend project files and folders for better maintainability, scalability, and readability. Previously, we implemented CRUD operations using files instead of a database. Now, our goal is to refactor the code and apply best practices in structuring backend applications.

## Session Objectives

By the end of this session, you will:

- Understand how to structure a backend project properly.
- Learn the separation of concerns in backend development.
- Refactor your existing code into a well-organized structure.
- Improve code maintainability and scalability.

## Recommended Project Structure

Below is the recommended structure for organizing your backend files:

```
📦 project-root
├── 📁 controllers  # Handles business logic
│   ├── fileController.js
│   ├── userController.js
│
├── 📁 models       # Data models (if applicable)
│   ├── fileModel.js
│   ├── userModel.js
│
├── 📁 routes       # API routes
│   ├── fileRoutes.js
│   ├── userRoutes.js
│
├── 📁 middlewares  # Middleware functions (e.g., validation, authentication)
│   ├── authMiddleware.js
│   ├── errorHandler.js
│
├── 📁 utils        # Utility functions (helpers)
│   ├── fileHelper.js
│   ├── responseHelper.js
│
├── 📁 config       # Configuration files (e.g., environment variables)
│   ├── config.js
│
├── server.js       # Entry point of the application
├── package.json    # Project metadata and dependencies
└── README.md       # Documentation
```

## Controllers
Controllers are the functions of our API. They define the logic for our route handlers.
Data is imported (from files or databases) and used in the controller files.

The controller files are then exported to be accessed in the route files using `module.exports`.

## Routes
Routes contain all the endpoints of our API, along with the corresponding controller of a specfic endpoint. 

We use a `router` object to seperate our routes from the main `app` object to further organize our project, required from express by:
```js
const express = require("express")
const router = express.Router()
```
We import our controllers inside our route files to access route handlers.

**Note:** The order of route definitions in our routers matter, so we need to write the most specific routes first.

The routes are also exported using `module.exports` to be accessed in the main server file.

## Environment Variables
There are some varaibles that we don't want to be visible to others who see our code, such as API keys, tokens, etc. We use environment variables to hide these variables.

To use them, we first install `dotenv` package using:
```
npm i dotenv
```
Environment variables are written as key value pairs in a `.env` file usually inside the `config` folder, where we store any configurations and settings for our project.

Example of a `.env` file:
```js
PORT=3000
DB_HOST=localhost
DB_USER=myuser
DB_PASS=supersecret
JWT_SECRET=myjwtkey
API_KEY=abcdef123456
```

In our main server file we require it and use using:
```js
require('dotenv').config({ path: "write path here" });
console.log(process.env.PORT); // Output: 3000
```
## Best Practices

- **Separation of Concerns:** Each file should have a specific responsibility.
- **Error Handling:** Use middleware to handle errors properly.
- **Modular Code:** Make reusable utility functions and middlewares.
- **Consistent Naming:** Follow a clear naming convention for files and folders.

## Task

- Refactor your previous CRUD operations task by following this structure.
  (Refactor means to edit and use your old code **DON'T CREATE NEW ONE** )
- Create **API Test** on [Thunder Client or Postman]

### Bonus:

- Implement a middleware for error handling.
