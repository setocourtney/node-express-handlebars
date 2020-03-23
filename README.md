# node-express-handlebars

Deployed to Heroku: https://pick-your-burger.herokuapp.com/

Burger logger application using MySQL, Node, Express, Handlebars and a homemade ORM following MVC design.

## User Interface

For local deployment app can be started with running: 

```
node server.js

```

* Users input the names of burgers they'd like to eat
* User submits a burger's name, burger will disiplay on the left side of the page -- waiting to be devoured.
* When the user clicks "Devour it!" button, the burger will move to the right side of the page.
* Database stores every burger and whether it has been devoured or not.

## Database Configuration

├── Database: burgers_db
│   └── Table: burgers
│       └── Fields:
│             ├── id (auto increment)
│             ├── burger_name (varchar)
│             ├── devoured (boolean to indicate if eaten or not)
│             └── timestamp (current time stamp)


## Directory


├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       └── burger.jpg
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
