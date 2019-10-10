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
curl -X "POST" "https://node-employee-server.herokuapp.com/api/employees" \
-d $'{
  "name": "Larry Powers",
  "salary": "123"
}'
```
**Response**
```
{
  "success": true,
  "results": {
    "name": "Larry Powers",
    "salary": "123",
    "id": "7ba9cb85-542b-4dc4-a327-df8451c3e0d4"
  }
}
```

#### List all Employees
**Request**
```
curl "https://node-employee-server.herokuapp.com/api/employees"
```
**Response**
```
{
  "success": true,
  "results": [
    {
      "name": "Larry Powers",
      "salary": "123",
      "id": "7ba9cb85-542b-4dc4-a327-df8451c3e0d4"
    },
    {
      "name": "Austin Loki",
      "salary": "133",
      "id": "38e776f8-8134-4480-bb37-b862951c51a8"
    }
  ]
}
```

#### Get a specific Employee
**Request**
```
curl "https://node-employee-server.herokuapp.com/api/employees/7ba9cb85-542b-4dc4-a327-df8451c3e0d4"
```
**Response**
```
{
  "success": true,
  "results": {
    "name": "Larry Powers",
    "salary": "123",
    "id": "7ba9cb85-542b-4dc4-a327-df8451c3e0d4"
  }
}
```

#### Delete a specific Employee
**Request**
```
curl -X "DELETE" "https://node-employee-server.herokuapp.com/api/employees/e8042743-51ad-4632-b153-0ce5f7aa0049"
```
**Response**
```
{
  "status": "ok",
  "results": {
    "name": "Larry Mothers",
    "salary": "123",
    "id": e8042743-51ad-4632-b153-0ce5f7aa0049
  }
}
```