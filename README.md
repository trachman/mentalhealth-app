# INITIALIZING YOUR DEVELOPMENT ENVIRONMENT

## Tools Required for Launch

1. Git command line tool
2. Node.js
3. Node Package Manager (npm)

Before continuing, please ensure that updated versions of the above are installed on your local.
NOTE: If you already have all of the above feel free to skip ahead to the Initializing the Development Environment section.

<br/>

## Tool Install Instructions

Navigate to and follow the development instructions at the install locations below.

Node.js & Node Package Manager (npm) -> [Download Here](https://nodejs.org/en/download/).

The git command line tool comes pre-installed on most Linux and Mac machines, however, if you're using Windows navigate to -> [Git for Windows Installer](https://gitforwindows.org/).

In order to ensure the installation process was successful, in your terminal run:

```console
git version
node --version
npm --version
```

You are now ready to begin initializing your development environment.

<br/>

## Initializing the Development Environment

### Initializing the Frontend

In your terminal, run the following commands in the directory you wish to start development:

```console
git clone https://github.com/trachman/mentalhealth-app.git  
cd mentalhealth-app
npm init -y  
npm install  
npm start  
```

### Initializing the Backend

If the above was successful, in a separate terminal window from the mentalhealth-app directory run:

```console
cd backend
npm init -y
npm install
node index.js
```

<br/>

If all of the above was successful you should now see our boiler plate front-end/back-end template in your browser as well as have a functioning Node.js Express backend. You can now begin developing your teams project right away!
From everyone at the BOLT Team, Good luck and Happy Hacking :) !

If you have any questions or concerns dont hesitate to reach out to us @contactendpointhere.

<br/>

## IMPORTANT NOTE FOR ALL CONTESTANTS

By NO MEANS are you required to use this template, or even create any kind of web app whatsoever for this bootcamp! We encourage you to be as creative as possible and think outside the box during this competition. This template was provided solely in the event you wish to develop a web application and don't want to waste your valuable time creating and debugging one from scratch. Feel free to use ANY languages, frameworks, dependencies, environments, types of solutions, etc. in order to best answer the problem statement.

<br/>
<br/>
<br/>
<br/>
<br/>

# FEATURED BELOW IS CREATE-REACT-APP'S DOCUMENTATION

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
