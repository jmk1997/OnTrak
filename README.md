# MySQL React Node Express
# Description

This starter template is using create-react-app and is using the MERN stack. Not Mongodb but MySQL. If you wish to use a different DB, take a look at the [express database integration docs](https://expressjs.com/en/guide/database-integration.html).

# Using Yarn

From the root directoy and the client directory install dependencies by running

`yarn`

Once the dependencies have been installed from both directories, you can start the template from the root directory by running

`yarn run dev`

# Configuring dev environment keys

Inside the server/config directory you can add a `dev.js` file to hold your db information or things like API keys while you develop. This repo is already set to .gitignore `dev.js` but if you name your file something different just don't forget to update your .gitignore. 

# Heroku Deploy Option

There is a heroku-postbuild script included in the template if you choose to deploy to Heroku. [This article](https://daveceddia.com/deploy-react-express-app-heroku/) by Dave Ceddia covers the reasoning pretty well. But basically it tells heroku to install the react-scripts needed to build the React app. By default the react-scripts are not installed in production. 







