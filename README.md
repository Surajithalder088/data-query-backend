# Mock AI-Powered Data Query API

## Overview

This is a lightweight backend service that simulates an AI-powered data query system. It allows users to send natural language queries and receive pseudo-SQL translations along with mock responses.

## Features

- Convert simple natural language queries to pseudo-SQL.
- Provide mock responses for different query types.
- Include basic authentication.
- Simulate AI query breakdown explanations.

---

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

sh
# Clone the repository
git clone https://github.com/Surajithalder088/data-query-backend.git
cd mock-ai-query-api

# Install dependencies
npm install


### Start the Server

sh
node server.js


Server runs on http://localhost:3000.

---

## API Documentation

live server is runnig on  https://data-query-backend.onrender.com

### Authentication

All end points require an valid authenticate user, so a loggedin used can access query simulations endpoints.

for login visit this end point *post* https://data-query-backend.onrender.com/api/user/login  with email &password

for register visit this end point *post* https://data-query-backend.onrender.com/api/user/signup  with email &password

### Endpoints

#### 1. *POST /api/query* - Process Query
https://data-query-backend.onrender.com/api/query

- Accepts a natural language question.
- Returns a pseudo-SQL query and mock response.

*Request:*

json
{
  "question": "What is the total sales?"
}


*Response:*

json
{
  "sqlQuery": "SELECT SUM(price * quantity) FROM Orders",
  "mockResult": { "total_sales": 5000 }
}


#### 2. *POST /api/explain* - Explain Query
https://data-query-backend.onrender.com/api/explain

- Returns the SQL query and a brief explanation of its intent.

*Request:*

json
{
  "question": "Give me the average sales per month?"
}


*Response:*

json
{
  "intent": "average sales per month",
  "sqlQuery": "SELECT AVG(total) FROM (SELECT SUM(price * quantity) AS total FROM Orders GROUP BY strftime('%Y-%m', date))",
  "explanation": "This query calculates the average monthly revenue by summing sales per month and averaging them."
}


#### 3. *POST /api/validate* - Validate Query
https://data-query-backend.onrender.com/api/validate

- Checks if the query type is supported.

*Request:*

json
{
  "question": "Who are the top 5 customers?"
}


*Response:*

json
{
  "valid": true
}


---

## Sample Queries

- "What is the total sales?"
- "How many customers do we have?"
- "What is the average sales per month?"
- "Which product sold the most?"
- "Show me the revenue breakdown by month."
- "Who are the top 5 highest spending customers?"

---

## Future Enhancements

- Integrate real database query execution using Prisma.
- Add NLP for better query understanding.
- Expand query support for more business insights.

---

## License

MIT License