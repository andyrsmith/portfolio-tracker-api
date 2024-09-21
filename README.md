# Finanical Tracker API

This is a API to store data containing debt and investments to track month to month progress.

## Requirements

The following are required to run the application

- Node v20.16 or above
- Mongo DB server
- NPM 10.8 or above

## How to setup

1. Create a .env file in root of project and add the following variables
    DBCONNECTION="IP:PORT"
    DBNAME="name"
2. run `npm i`
3. Start up Mongo DB and create new database with the name used in .env file
4. Run `npm run dev`

## Database Scheme

Database consist of one collection called accounts.  The scheme for the accounts is the following
- name: "Name of Account"
- type: "Type of Account.  Example I for Investments or D for debts"
- balance: "Current Balance of account"
- contribution: "Amount contributed since last record"
- date: "Date amount was recorded"

## API Endpoints

### GET Monthly Accounts

GET `/v1/get-monthly-amounts` Retrieves all of the records in the database

#### Request Example

empty

#### Response Example

```
{
    "status": "success"
    "data": [
        {
            "_id": "123455",
            "name": "eTrade",
            "type": "I",
            "balance": 45000,
            "contribution": 350,
            "date": "2024-09-15T04:00:00.000Z"
        }
    ]
}
```

### POST Monthly Accounts

POST `/v1/create-monthly-amount` Creates a new monthly amount record

#### Request Example

```
{
    "name": "eTrade",
    "type": "I",
    "balance": 45000,
    "contribution": 350,
    "date": "2024-09-15"
}
```

#### Response Example

```
{
    "status": "success"
    "data": 
        {
            "_id": "123455",
            "name": "eTrade",
            "type": "I",
            "balance": 45000,
            "contribution": 350,
            "date": "2024-09-15T04:00:00.000Z"
        }
} 
```

### PUT Monthly Acounts

PUT `/v1/update-monthly-amount` Updates an amount previously created

#### Request Example

```
{
    "_id": "66dda201",
    "name": "Vanguard",
    "balance": 9500,
    "type": "I",
    "contribution": 200,
    "date": "2024-08-17"
}
```

#### Response Example

```

{
  "status": "success",
  "data": {
    "_id": "66dda201",
    "name": "Vanguard",
    "balance": 9500,
    "type": "I",
    "contribution": 600,
    "date": "2024-08-17T00:00:00.000Z",
    "__v": 0
  }
}
```

### DELETE Monthly Amount

DELETE `/v1/delete-monthly-amount/:id` Deletes an amount for the given ID

#### Request Example

Empty

#### Response Example

```
{
  "status": "deleted"
}
```

## Todos

- Add Security because there is none currently. Don't run this on a public server
