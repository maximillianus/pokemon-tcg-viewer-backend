# Pokemon TCG Viewer Backend

This is the backend part of Pokemon TCG Viewer app. The backend just records request coming to the web application. The request can then be used as analytics.

To persist request, sqlite3 DB is used. There is a guide to install sqlite3 in Ubuntu in `install_sqlite3.sh`. Ensure sqlite3 db is setup before running the app.

The app can be run using pm2 process manager `npx pm2 start app.js`.


## Prerequisites

1. Ensure node is installed. This repo is developed using `v16.17.0`
2. Ensure npm is installed. This repo is developed using `v8.15.0`


## Installation

1. Clone this repo `git clone https://github.com/maximillianus/pokemon-tcg-viewer-backend.git`
2. Install sqlite3 using `install_sqlite3.sh`
3. Install Node and its dependencies: `npm i`


## Making request to DB
Make a POST request to `/request` endpoint. Expected format is:
```
{
    "uuid": "uuid",
    "search_text": "pikachu",
    "pokemon": "pikachu",
    "ip_address": "1.2.3.4",
}
```