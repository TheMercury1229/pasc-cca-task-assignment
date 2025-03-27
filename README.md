# To-Do Application Backend Assignment

## Overview
Your task is to build a backend server for a simple To-Do application using **Node.js**, **Express.js**, and **Prisma ORM** with a **PostgreSQL** database. The application should support basic CRUD operations for tasks and implement **JWT-based authentication**. The project must follow the **MVC (Model-View-Controller) architecture**.

## Requirements
- Use **Node.js** and **Express.js** for server-side development.
- Use **Prisma ORM** for database interactions.
- Use **PostgreSQL** as the database (cloud-based database such as [Neon.tech](https://neon.tech) is recommended).
- Implement **JWT authentication** for user authentication and authorization.
- Follow the **MVC architecture**.
- Perform basic **CRUD operations** on tasks (Create, Read, Update, Delete).
- Make a **public repository** on GitHub and push your code.
- Submit the repository link in the given Google Form.
- Refer to **Prisma documentation** or other relevant package documentation for guidance.

## Functional Requirements
- **User Authentication**
  - Users should be able to **sign up** and **log in**.
  - Authentication should be implemented using **JWT (JSON Web Token)**.

- **Task Management**
  - Users should be able to **add** a task.
  - Users should be able to **fetch** all their tasks.
  - Users should be able to **update** a task.
  - Users should be able to **delete** a task.
  - Tasks should be linked to a specific user.

## API Endpoints
### User
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login

### Task
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all tasks
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Technical Requirements
- **Node.js & Express.js** for server-side development.
- **Prisma ORM** for database operations.
- **PostgreSQL** as the database.
- **Neon.tech** or any cloud-based PostgreSQL instance.
- **JWT for authentication**.
- **Follow MVC architecture**.
- Proper API routes following RESTful principles.
- Use **Git** and create a public repository on **GitHub**.

## Database Schema (Prisma)
```prisma
// schema.prisma

model User {
  id        String  @id @default(uuid())
  email     String  @unique
  password  String
  tasks     Task[]
}

model Task {
  id          String   @id @default(uuid())
  title       String
  description String?
  completed   Boolean  @default(false)
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Folder Structure (Example)
```
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   ├── taskController.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── taskRoutes.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   ├── config
│   │   ├── database.js
│   ├── app.js
│   ├── server.js
├── prisma
│   ├── schema.prisma
├── .env
├── package.json
├── README.md
```

## Submission Guidelines
1. Complete the assignment by **2nd April 2025**.
2. Push the code to a **public repository** on **GitHub**.
3. Submit the repository link via the given **[Google Form](https://forms.gle/rEBqUJKkNQcq3Q6TA)**. 

## Helpful Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [JWT Guide](https://jwt.io/introduction/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Neon.tech - Cloud PostgreSQL](https://neon.tech/)

## Evaluation Criteria
- Correct implementation of **CRUD operations** for tasks.
- **JWT-based authentication** implementation.
- Proper **MVC architecture** structure.
- Code readability and best practices.
- API response handling and error management.
- Deployment on a **cloud PostgreSQL** server.

Good luck, and happy coding! 🚀

