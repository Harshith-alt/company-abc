# ABC Company Website

## 💡 Project Overview
Dynamic responsive site with CMS for heading updates.

## 🧱 Tech Stack
- React + Tailwind
- Spring Boot
- PostgreSQL

## 🚀 How to Run Locally

### Backend
```bash
cd server
./mvnw spring-boot:run

```


---

## 🧑‍💻 Tech Stack

| Front-End       | Back-End        | Database     |
|----------------|------------------|--------------|
| React (Vite or CRA) | Spring Boot (3.x) | MySQL       |
| Tailwind CSS   | REST API (GET/POST) | JPA (Hibernate) |
| Axios          | Maven             |              |

---

## 🛠️ Setup Instructions

###  1. Clone the Repository

```bash
git clone https://github.com/Harshith-alt/company-abc.git
cd company-abc
```
### 2. Frontend
cd client
npm install
npm start

### 3. backend setup 
Java 17+
Maven
MySQL running
Create MySQL DB:  CREATE DATABASE abcdb;
### 4. Configure DB in server/src/main/resources/application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/abcdb

spring.datasource.username=root

spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
### 5. run springboot server
cd server
./mvnw spring-boot:run

### 6. API Documentation
| Endpoint       | Method | Description         |
| -------------- | ------ | ------------------- |
| /api/heading | GET  | Get current heading |
| /api/heading | POST | Update heading text |





