# Configurations

Path: `reactor/config`

Each application has its own configurations, in this chapter we'll take about how to handle these configurations


# How it works

`The Configurator` file exports and object that allows you to:

- `set` single value 
- `set` key/value pairs
- `get` single value


All data that should be stored in `The Configurator` should be stored in `src/shared/config.js` file which will import `The Configurator` to inject our configurations.

# Usage

In our `src/index.js` we can directly import our config file at the beginning of the file.

`src/index.js`
```js
import from 'shared/config'; 

// ...
```

And in our `shared/config.js`


```js
import config from 'reactor/config';

config.set({
    name: 'Hasan'
});
```

Here we set an object to our configurations which contains `name` as key.

To use it later, we can import the config file in anywhere else in our application.

`src/App.js`

```js
import config from 'reactor/config';

let name = config.get('name'); // Hasan

// add another configurations, which is not recommended as we should
// store all of our configurations in `shared/config` file

// another way for adding values in configurations.
config.set('email', 'hassanzohdy@gmail.com');
```

> Don't forget we're using [Module Aliasing](./module-aliasing.md).