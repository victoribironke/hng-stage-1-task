# API Project

## Description

This project is an API built with Express.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/victoribironke/hng-stage-0-task
   ```

2. Navigate to the project directory:

   ```sh
   cd hng-stage-0-task
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
https://hng-stage-0-task-eta.vercel.app
```

---

## Endpoints

### 1. **Main endpoint**

Returns my email address, the current timestamp in the ISO 8601 format, and the repo's URL.

- **Endpoint**: `GET /`
- **Response**:
  - **Success** (`200`):
    ```json
    {
      "email": "victoribironke2019@gmail.com",
      "current_datetime": "2025-01-31T08:52:46.810Z",
      "github_url": "https://github.com/victoribironke/hng-stage-0-task"
    }
    ```

---

[Hire NodeJS developers!](https://hng.tech/hire/nodejs-developers)
