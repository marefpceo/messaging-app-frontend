<a id='readme-top'></a>

# Messaging App Frontend

<center style='font-size:12pt'>

<a href='/CHANGELOG.md'>Changelog</a>

</center>

---

## Introduction

Frontend for mChat Messaging App, a messaging app project as part of The Odin Project curriculum.

## Technologies Used

[![My Skills](https://skillicons.dev/icons?i=nodejs,vite,react,tailwind)](https://skillicons.dev)

- [NodeJS][Nodejs-url] is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.

- [Vite][Vite-url] is a blazing fast frontend build tool powering the next generation of web applications.

- [ReactJS][React-url] is an open-source JavaScript library for building user interfaces (UIs), primarily for single-page applications.

- [Tailwind CSS][Tailwind-url] is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.

## Installation

The instructions below will guide you through installing the application locally.

### Perquisites

Verify that you have Node.js and NPM installed.

1. Open a terminal by pressing `Ctrl+Alt+T`.

2. **Node:**

   ```sh
   node -v (or --version)
   ```

   _If not installed, download and installation procedures can be found at [Node.js][Nodejs-url] website._

3. **NPM**

   ```sh
   npm -v (or --version)
   ```

   _If not installed, download and installation procedures can be found at [NPM][NPM-url] website._

### Installation Procedures

1. Open a terminal by pressing `Ctrl+Alt+T`.

2. Clone the repo
   ```sh
   git clone https://github.com/marefpceo/messaging-app-frontend.git
   ```
3. Change directory to `messaging-app-frontend`
   ```sh
   cd messaging-app-frontend
   ```
4. Install modules and dependencies
   ```sh
   npm install
   ```
5. Create an `.env` file in the root directory
   ```sh
   touch .env
   ```
6. Add the following variable and value to `.env`
   ```sh
   VITE_API_BASE_URL='http://localhost:3000'
   ```
   \*Local installation of the backend server is required. **[View server installation procedures here](../server/README.md)\***
7. Start the server in development mode.
   ```sh
   npm run dev
   ```

<p align='right'>(<a href='#readme-top'>Return to top</a>)</p>

[Nodejs-url]: https://nodejs.org/
[NPM-url]: https://www.npmjs.com/
[Vite-url]: http://vite.dev/
[React-url]: https://react.dev/
[Tailwind-url]: https://tailwindcss.com/
