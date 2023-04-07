# Adrian Lewis's Z-Prefix CRUD App

## Running the app
The app is wrapped in a docker container and assuming everything works properly, you should be able to run the following commands.

`docker-compose up`

Then, navigate to http://localhost:3000

To bring it down and remove docker images, you can run...

`docker-compose down --rmi all`

## If that doesn't work...
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

## Notes when using the website
The website does not have any cookies or local storage so refreshing will reset the state variables. This may cause you to see an empty page or some buggy behavior. If this happens, try navigating back to http://localhost:3000 and refreshing the page.

The website consists of 4 different pages Home, Login, MyInventory, and Details. The home page is where you will first arrive to and you will be able to see all items on the page, search for an item, and select any item even if you are not logged in. To log in, click the log in button on the navigation bar. The Login page will allow you to log in to an existing account or sign up and add an account. A list of seeded accounts can be seen in the dropdown.

<details>
<summary>Seeded User Accounts</summary>
  <br>
  Adrian Lewis 
    username: 'abc', password: '123'
  <br>
  Joe Shmoe (can't log in)
    username: null, password: null
  <br>
  Slim Shady 
    username: 'def', password: '123'
  
  <br>
  
  
  <br>
  
  
  <br>
  
  
  <br>
  
  
  {first_name: 'Lady Emilia Von Eldritch', last_name: 'the 17th', username: 'ghi', password: '123'},
  {first_name: 'Random', last_name: 'Person', username: 'jkl', password: '123'},
  {first_name: 'Random', last_name: 'Person', username: 'mno', password: '123'},
  {first_name: 'Random', last_name: 'Person', username: 'pqr', password: '123'},
  {first_name: 'Random', last_name: 'Person', username: 'stu', password: '123'},
  {first_name: 'Random', last_name: 'Person', username: 'vwx', password: '123'},
  {first_name: 'Random', last_name: 'Person', username: 'yz', password: '123'},
</details>

After logging in the user will be sent to the MyInventory page where they will be presented with all items that belong to the logged in user. On the MyInventory page, you can also add items to the personal inventory. 

If you click on an item card on the Home page or the MyInventory page, a details page will appear. The details page containse all information about the item including the item's name, quantity, description, and a random image that I selected. If a user is logged in, they have the ability to edit or delete an item from the details page. Editing an item will open up input fields for each editable section.

A visual of each of these features can be seen in the images below.

<details>
<summary>Images of Webpage</summary>
<br>
  Home Page:
  ![home_page](https://user-images.githubusercontent.com/97071804/230524039-8a74c6c0-2647-429e-894d-d1c9bc44c3bf.png)

  Login Page:
  ![login_page_login](https://user-images.githubusercontent.com/97071804/230523646-236aaff7-d771-4ea3-9084-e04d512572ad.png)
  ![login_page_signup](https://user-images.githubusercontent.com/97071804/230523655-d194b888-e36e-4811-981b-b9c60f591921.png)
  
  MyInventory Page:
  ![myinventory_page](https://user-images.githubusercontent.com/97071804/230523713-315c58b4-08d0-41fd-ae61-643343b89a8f.png)
![myinventory_page_add](https://user-images.githubusercontent.com/97071804/230523718-78c83af9-11f2-4979-a0cf-e518b7f8be3b.png)
  
  Details Page:
  ![details_page](https://user-images.githubusercontent.com/97071804/230523745-8d7f5b8f-ac54-47c5-848e-149d98c86898.png)
  ![details_page_edit](https://user-images.githubusercontent.com/97071804/230523757-1a790ed9-ea79-4ebf-9fb7-e5081f383950.png)
</details>
  
  
