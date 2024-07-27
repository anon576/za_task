# Task Manager API

## Overview

The Task Manager API is a basic RESTful API built with Node.js and Express. It allows you to manage tasks with operations such as retrieving all tasks, adding a new task, updating an existing task, and deleting a task.

## Project Structure

```
za_task/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
├── Handlers/TaskHandler.js
├── Routers/TaskRouter.js
```

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/anon576/za_task
   cd za_task
   ```

2. **Install Dependencies**

   Ensure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

3. **Start the Server**

   Run the following command to start the server:

   ```bash
   node server.js
   ```

   The server will be running on `http://localhost:3000`.

## API Endpoints

### 1. GET `/api/tasks`

Retrieve all tasks.

- **Request:**

  ```bash
  curl -X GET http://localhost:3000/api/tasks
  ```

- **Response:**

  ```json
  [
    {
      "id": 1,
      "title": "Task 1",
      "description": "Description 1",
      "status": "pending"
    },
    {
      "id": 2,
      "title": "Task 2",
      "description": "Description 2",
      "status": "completed"
    }
  ]
  ```

### 2. POST `/api/tasks`

Add a new task.

- **Request:**

  ```bash
  curl -X POST http://localhost:3000/api/tasks \
    -H "Content-Type: application/json" \
    -d @add_task.json
  ```

- **Response:**

  ```json
  {
    "id": 3,
    "title": "Task 3",
    "description": "Description 3",
    "status": "pending"
  }
  ```

### 3. PUT `/api/tasks/:id`

Update an existing task by its ID.

- **Request:**

  ```bash
  curl -X PUT http://localhost:3000/api/tasks/1 \
    -H "Content-Type: application/json" \
    -d @update_task.json
  ```

- **Response:**

  ```json
  {
    "id": 1,
    "title": "Updated Task 1",
    "description": "Updated Description 1",
    "status": "completed"
  }
  ```

### 4. DELETE `/api/tasks/:id`

Delete a task by its ID.

- **Request:**

  ```bash
  curl -X DELETE http://localhost:3000/api/tasks/3
  ```

- **Response:**

  ```json
  {
    "message": "Task deleted successfully"
  }
  ```
