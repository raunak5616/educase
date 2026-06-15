# Educase GitHub Profile Analyzer API

An Express.js API that fetches a GitHub user's profile and repositories, calculates summary insights, and stores the analyzed result in MySQL.

## Submission Links

- GitHub repository: https://github.com/raunak5616/educase
- Live deployed API URL: Add your deployed URL here

## Features

- Analyze a GitHub profile by username
- Store analyzed profile metrics in MySQL
- Fetch all analyzed profiles
- Fetch one analyzed profile by username

## Tech Stack

- Node.js
- Express.js
- MySQL
- Axios
- Dotenv

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/raunak5616/educase.git
cd educase
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add:

```env
PORT=5000
MYSQL_PUBLIC_URL=your_public_mysql_connection_url
MYSQL_URL=your_mysql_connection_url
MYSQLHOST=localhost
MYSQLPORT=3306
MYSQLUSER=root
MYSQLPASSWORD=your_password
MYSQL_DATABASE=educase
```

4. Create the database table using [database/schema.sql](/E:/educase/educase/database/schema.sql:1).

5. Start the server:

```bash
npm start
```

## API Base URL

Local:

```text
http://localhost:5000
```

Production:

```text
Add your deployed API URL here
```

## API Endpoints

### `POST /api/profiles/analyze/:username`

Fetches GitHub data for `:username`, calculates insights, stores them in the database, and returns the analyzed result.

Example:

```bash
curl -X POST http://localhost:5000/api/profiles/analyze/octocat
```

### `GET /api/profiles`

Returns all saved analyzed profiles.

Example:

```bash
curl http://localhost:5000/api/profiles
```

### `GET /api/profiles/:username`

Returns one saved analyzed profile by username.

Example:

```bash
curl http://localhost:5000/api/profiles/octocat
```

## Response Fields

Each analyzed profile stores:

- `username`
- `followers`
- `following_count`
- `public_repos`
- `total_stars`
- `total_forks`
- `most_used_language`
- `account_age`
- `analyzed_at`

## Database Schema

The schema export is included here:

- [database/schema.sql](/E:/educase/educase/database/schema.sql:1)

## Postman Collection

An optional Postman collection is included here:

- [postman/educase-api.postman_collection.json](/E:/educase/educase/postman/educase-api.postman_collection.json:1)

## Notes

- `MYSQL_PUBLIC_URL` is preferred for local development when using Railway-hosted MySQL.
- If a username already exists in your table and you want fresh values, re-run the analyze endpoint after clearing or updating that row.
