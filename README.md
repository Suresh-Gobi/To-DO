# Todo App

## Technology Stack
This project is built using the **MERN Stack** along with **MySQL** as the database.

---

## Backend Setup

### 1. Create `.env` File
Create a `.env` file in the backend directory and add the following details:

```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=todo_db
DB_DIALECT=mysql
PORT=5000
```

### 2. Run the Following Commands
Open the terminal or command prompt in the backend folder and execute these commands:

#### Generate the Task Model
```
npx sequelize-cli model:generate --name Task --attributes title:string,description:text,completed:boolean --force
```

#### Run Database Migrations
```
npx sequelize-cli db:migrate
```

### 3. Start the Backend Server
```
npm start
```

---

## Frontend Setup

### Run the Frontend Application
Navigate to the frontend folder, open a terminal, and run:
```
npm run dev
```


