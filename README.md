# Adrian Lewis's Z-Prefix CRUD App

## Running the App
The app is wrapped in a docker container and assuming everything works properly, you should be able to run the following commands.

`docker-compose up`

Then, navigate to http://localhost:3000

To bring it down and remove docker images, you can run...

`docker-compose down --rmi all`

## If that doesn't Work
If that doesn't work, I trust that my instructors can handle it... Just kidding. 

You should be able to run it as you would typically. A database will need to be created. I named mine `inventorydb`

The knex file will also need to be modified to have 'localhost' instead of 'db'
`connection: 'postgres://postgres:docker@localhost/inventorydb'`
