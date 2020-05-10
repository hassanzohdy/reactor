# Router

Path: `reactor/router`

The router is basically responsible for handling all of application routes.

# Adding New Route

To add new route to our application we use the `add` method.

`add(path: string, component: ReactComponent, middleware: Function|Array|null): Router`

`src/modules/users/routes.js`

```js
import router from 'reactor/router';
import Login from './components/login';

router.add('/login', Login);
```

Here we import our router object, and we invoked the `add` method to add new route.

Which is `/login` and in the second argument we set the component class that will 
be called when the visitor hits that route.

# Middleware

As web applications grow up, sometimes we need to handle certain requests that will allow for example some users to be accessing the request, for example the account profile page should not be opened until the user is logged in.

So we can make a middleware to check if the user is logged in.

We'll create a new file called `auth.js` in `src/modules/users/middleware`

`src/modules/users/middleware/auth.js`

```js
export default function (route, history) {
    // do something
};
```

You can do whatever you want in the function to validate anything, the route is an object that contains all data that is passed to the [add](#adding-new-route) method.

So let's use Our [User](./user.md) Handler to check if user is logged in.

`src/modules/users/middleware/auth.js`

```js
import React from 'react';
import user from "reactor/user";
import { Redirect } from 'react-router-dom';

export default function (route, history) {
    if (! user.isLoggedIn()) {
        return <Redirect to="/login" />
    }
};
```

Here we check if the user is not logged in, then redirect the user to the login page.

Now let's add our `auth` middleware to our `/profile` page.

`src/modules/users/routes.js`

```js
import router from 'reactor/router';
import Auth from './middleware/auth';
import Login from './components/login';
import Profile from './components/profile';

router.add('/login', Login);
router.add('/profile', Profile, Auth); // here we added our third argument as middleware
```