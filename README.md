# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 🚀 About Me
Hi I'm Fikran, i'm a front end developer.


## Documentation

Set Up React App with TypeScript
Make sure you have Node.js and npm (Node Package Manager) installed on your computer. If you don't have them installed, you can download them from the official website: https://nodejs.org/

Now, you need to install some additional dependencies to work with GitHub API and handle HTTP requests:

## Axios

```javascript
npm install axios
```

Set Up GitHub API Access
To interact with the GitHub API, you need to generate a personal access token. Follow these steps to create one:

1. Go to your GitHub account settings (https://github.com/settings/profile).
2. Click on "Developer settings" from the left sidebar.
3. Choose "Personal access tokens" under "Developer settings."
4. Click "Generate new token" and follow the instructions. Make sure to grant the "public_repo" scope to have access to public repositories.
5. Copy the generated token, as you will need it in your React app.

inside the src folder: UserSearch.tsx and UserRepositories.tsx.

```javascript
const accessToken = 'YOUR_GITHUB_ACCESS_TOKEN'; // Replace with your actual GitHub access token
```
