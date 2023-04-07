# Adrian Lewis's Z-Prefix CRUD App

## Running the App
The app is wrapped in a docker container and assuming everything works properly, you should be able to run the following commands.

`docker-compose up`

Then, navigate to http://localhost:3000

To bring it down and remove docker images, you can run...

`docker-compose down --rmi all`

## If that doesn't Work...
You should be able to run it as you typically would. 

A database will need to be created. I named mine `inventorydb`

The knex file development section will also need to be modified to have 'localhost' instead of 'db'

`connection: 'postgres://postgres:docker@localhost/inventorydb'`

Once your database is set up properly, you can navigate to the backend directory. There you should run the following.

```
npm install
npm run reset
npm start
```

This will install all npm packages, migrate and seed the database, and then start up the server.

Once the server is up and running, you can navigate to the frontend directory and run the following commands.

```
npm install
npm start
```
This will install necessary packages and then start up port 3000. Navigating to http://localhost:3000 should give you a working webpage.

## Notes When using the website
The website does not have any cookies or local storage so refreshing will reset the state variables. This may cause you to see an empty page or some buggy behavior. If this happens, try navigating back to http://localhost:3000 and refreshing the page.



