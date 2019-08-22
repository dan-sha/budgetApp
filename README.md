# Budget tracking app

A MVP budget tracking app utilizing React and D3 for the front-end client, and MySQL DB.
Created as a pair at HackReactor for in-house hackathon.

Accepts inputs for date, description, amount, transaction type, category and account name, and saves information to a SQL database.

Stored information is displayed as a pie chart, showing distribution of funds based on category. It is also displayed in detail below input form as a descending list based on date.

Information can be filtered by category or account.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Credits

App written by Brittany Yee and Daniel Sha.
Environment setup made with [createapp.dev](https://createapp.dev/)
