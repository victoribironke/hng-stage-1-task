# API Project

## Description

This project is an API built with Express.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/victoribironke/hng-stage-1-task
   ```

2. Navigate to the project directory:

   ```sh
   cd hng-stage-1-task
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Start

To start the project without hot reload, run:

```sh
npm start
```

## Start

To start the project with hot reload, run:

```sh
npm run dev
```

# API Documentation

## Base URL

```plaintext
https://hng-stage-1-task-five.vercel.app
```

---

## Endpoints

### 1. **Classify number**

Returns some properties of the number and a fun fact.

- **Endpoint**: `GET /api/classify-number`
- **Query Parameters**:
  - `number` (required): The number to classify.
- **Response**:
  - **Success** (`200`):
    ```json
    {
      "number": "153",
      "is_prime": false,
      "is_perfect": false,
      "properties": ["armstrong", "odd"],
      "digit_sum": 9,
      "fun_fact": "153 is a narcissistic number."
    }
    ```

---

[Hire NodeJS developers!](https://hng.tech/hire/nodejs-developers)
