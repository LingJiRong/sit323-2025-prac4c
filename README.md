# SIT323/SIT737 - Task 4.2C: Enhanced Calculator Microservice

## Overview
This project builds upon Task 4.1P by adding advanced arithmetic operations to the calculator microservice. The service is developed using **Node.js** and **Express**, and now supports:
- Exponentiation (`power`)
- Square Root (`sqrt`)
- Modulo (`modulo`)

## Features
- RESTful API structure
- Input validation and error handling
- JSON response output

## Endpoints

### 1. Exponentiation

GET /power?base=2&exponent=3 
Response: { "result": 8 }

### 2. Square Root

GET /sqrt?num=16 Response: { "result": 4 }

### 3. Modulo

GET /modulo?num1=10&num2=3 Response: { "result": 1 }


---

## Error Handling
- Returns `400 Bad Request` if input values are missing or not valid numbers.
- Handles edge cases such as:
  - Square root of negative numbers
  - Missing query parameters

Example:

GET /sqrt?num=-9
Response: { "error": "Cannot calculate square root of a negative number." }


---

## How to Run

### Prerequisites
- Node.js installed
- Git installed (optional, for cloning the repo)

### Steps

1. **Clone the repository**  
git clone https://github.com/LingJiRong/sit323-2025-prac4c.git


2. **Navigate to the project folder**  
cd sit323-2025-prac4c

3. **Install dependencies**  
npm install

4. **Start the server**
node index.js  


5. **Test the API** using a browser or Postman:
   - http://localhost:3000/power?base=2&exponent=3
   - http://localhost:3000/sqrt?num=25
   - http://localhost:3000/modulo?num1=10&num2=3

---

## Author
Ling  
SIT323/SIT737 – Cloud Native Application Development  
Deakin University
