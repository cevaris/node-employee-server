# node-employee-server
Employee Server writtin in Node JS


## Getting started

Install all packages


Start Typescript transpiler, so we can convert Typescript to Javascript on save.

`./node_modules/.bin/tsc --w`


Run the server locally and restart on save

`npm start`


Find the domain the server is currently deployed to in Heroku

`heroku domains | grep .com`


## HTTP API Docs

#### Create new Employee
**Request**
```
curl -X "POST" "https://node-employee-server.herokuapp.com/employees/create" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "name": "Larry Powers",
  "salary": "123"
}'
```
**Response**
```
{
  "status": "ok",
  "results": {
    "name": "other",
    "salary": "123",
    "id": 1002
  }
}
```

#### List all Employees
**Request**
```
curl "https://node-employee-server.herokuapp.com/employees" \
     -H 'Content-Type: application/json; charset=utf-8'
```
**Response**
```
{
  "status": "ok",
  "results": [
    {
      "name": "Mr Lobo",
      "salary": "123",
      "id": 1000
    },
    {
      "name": "Larry Powers",
      "salary": "123",
      "id": 1001
    }
  ]
}
```

#### Get a specific Employee
**Request**
```
curl "https://node-employee-server.herokuapp.com/employees/1001" \
     -H 'Content-Type: application/json; charset=utf-8'
```
**Response**
```
{
  "status": "ok",
  "results": {
    "name": "Larry Powers",
    "salary": "123",
    "id": 1001
  }
}
```

#### Delete a specific Employee
**Request**
```
curl -X "POST" "https://node-employee-server.herokuapp.com/employees/delete/1001" \
     -H 'Content-Type: application/json; charset=utf-8'
```
**Response**
```
{
  "status": "ok",
  "results": {
    "name": "Larry Mothers",
    "salary": "123",
    "id": 1001
  }
}
```