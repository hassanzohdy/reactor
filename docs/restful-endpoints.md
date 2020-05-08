 # Restful Endpoints

Path: `reactor/restful-endpoint.js`
 
This class is used to create a full `Restful APIs` requests for:

- Fetching Records i.e `GET /users`
- Fetching one Record i.e `GET /users/1`
- Creating new Record i.e `POST /users`
- Updating Record i.e `PUT /users/1`
- Updating Part of Record i.e `PATCH /users/1`
- Deleting Record i.e `DELETE /users/1`

# Methods

Here is the documentation of the Restful Endpoint methods

### List

`list(params: object)`

Return list of records

### get

`get(id: number, params: object)`

### post

`create(data: object|FormData)`

### put

`update(id: number, data: object|FormData)`

### patch

`patch(id: number, data: object|FormData)`

### delete

`delete(id: number)`


