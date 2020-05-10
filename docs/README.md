# Reactor

This is the full documentation about Reactor.

# Core

The application core contains the following:

- [Reactor](./reactor.md): The Application Manager.
- [Config](./config.md): Application Configurations Manager.
- [Router](./router.md): Application Router Manager. 
- [Endpoint](./endpoint.md): Endpoint Service Controller.
- [Restful Endpoints](./restful-endpoints.md): Endpoint Service Controller.
- [User](./user.md): User Data Manipulator.
- [Cache Engine](./cache.md): Cache Engine for storing data locally.
- [Helpers](./helpers.md): List of utilities.   
- [Meta Data](./metadata.md): Web page meta data handler.
- [Module Aliasing](./module-aliasing.md): Module Aliasing.

# Forms

- [Form Handler](./forms/form.md)
- [Form Input](./forms/form-input.md)

# Endpoint

Any module contains a `services` directory, it simply contains all files 
that will send requests to some API using ajax request.

> We'll use `axios` here as ajax request handler

# Restful Endpoints

This class is used to create a full `Restful APIs` requests for:

- Fetching Records i.e `GET /users`
- Fetching one Record i.e `GET /users/1`
- Creating new Record i.e `POST /users`
- Updating Record i.e `PUT /users/1`
- Updating Part of Record i.e `PATCH /users/1`
- Deleting Record i.e `DELETE /users/1`

