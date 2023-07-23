# Books

## Description
https://trello.com/b/O24dhHGE/booksapp
## Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the `package.json` files in the `client` and `server` folders.

### Common

1. ESLatest
2. [Git](https://git-scm.com/doc)
3. [REST API](https://www.restapitutorial.com/lessons/restquicktips.html)
4. [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token)
5. [npm](<https://en.wikipedia.org/wiki/Npm_(software)>)
6. [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
7. [ESLint](https://eslint.org/docs/user-guide/getting-started)
8. [joi](https://www.npmjs.com/package/joi)
9. [dayjs](https://day.js.org/)

### Frontend

1. [React](https://reactjs.org/docs/getting-started.html)
2. [Vite](https://vitejs.dev/)
3. [React Redux](https://redux.js.org/introduction/getting-started)
4. [React Hook Form](https://react-hook-form.com/get-started)
5. [history](https://www.npmjs.com/package/history)

### Backend

1. [Node.js](https://nodejs.org/en/)
2. [Fastify](https://www.fastify.io/docs/v3.24.x/)
3. [Knex](https://knexjs.org/)
4. [Objection](https://vincit.github.io/objection.js/)
5. [axios](https://www.npmjs.com/package/axios)
6. [bcrypt](https://www.npmjs.com/package/bcrypt)
7. [nodemon](https://www.npmjs.com/package/nodemon)
8. [dotenv](https://www.npmjs.com/package/dotenv)
9. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
10. [jest](https://www.npmjs.com/package/jest)

### Database

1. [PostgreSQL](https://www.postgresql.org/download/ 'PostgreSQL')

## Installation

## Conventions for Development Workflow

- **CI**: Continuous Integration
- **Git**: Version control system
- **Pull Request flow**: Workflow for proposing and reviewing code changes

### Ticket Naming Convention

Format: `<project-prefix>-<issue-number>: <ticket-title>`

Example: `books-5: Add Clinician Dashboard`

### Branch Naming Convention

Format: `<type>/<project-prefix>-<issue-number>-<short-desc>`

Types: `task`, `fix`

Examples:

- `task/books-5-add-clinician-dashboard`
- `task/books-12-add-clinician-flow`
- `fix/books-16-fix-clinician-flow`

### Commit Message Convention

Format: `<project-prefix>-<issue-number>: <modifier> <description>`

Modifiers: `+` (add), `*` (edit), `-` (remove)

Examples:

- `books-5: + title for dashboard`
- `books-12: * dashboard title`
- `books-16: - dashboard title`
