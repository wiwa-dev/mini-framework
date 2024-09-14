
# Project Startup Guide

This project uses **Node.js**, **Express**, and **Livereload** to create a server with automatic static file refresh.

## Prerequisites

Before getting started, ensure that the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Project Structure

Here’s the main project structure:  

```
/mini-framework
│
├──doc/                 # Directory containing the documentation's framework
├── src/                # Directory containing static files (HTML, CSS, JS, etc.)
├── server.js           # Main file to start the server
├── package.json        # Configuration file for npm dependencies
├── package-lock.json   # Configuration file for dependencies versions

└── script.sh          # Bash script to initialize and start the project
```

## Installing Dependencies

Before starting the server, you need to install the required dependencies.

1. Open your terminal in the project root directory.
2. Run the following command:

   ```bash
   npm install
   ```

This will install all the necessary dependencies defined in the `package.json` file, including **Express** and **Livereload**.

## Starting the Server

Once the dependencies are installed, you can start the server using the `following steps`.

### Steps to Start:

1. Run the following bash script:

   ```bash
   npm run mini
   ```

   This script will:

   - Install dependencies (if not already installed)
   - Start the Express server

2. The server should now be running on port `8080`. You can access it by opening your browser and navigating to the following URL:

   ```
   http://localhost:8080
   ```


## NPM Scripts

In the `package.json` file, there is a script called `mini` that can be used to run the server. You can also manually start the server using the following command:

```bash
npm run mini
```

---

## Troubleshooting

- If you encounter module errors, ensure all dependencies are installed correctly with `npm install`.
- If the server fails to start or automatic refresh doesn’t work, check the script execution permissions by running:

  ```bash
  chmod +x script.jsh
  ```

---

## Conclusion

The server is now set up and ready to run with automatic static file refresh. You can continue developing with ease, thanks to Livereload for improved productivity.
