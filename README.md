# Debeers technical challenge

This application uses the blockchain.info websockets endpoint to stream transactions in realtime and the HTTP api to query specific Bitcoin addresses.

## Instructions to run the application

Please install NPM dependencies with `npm i` from the project root. This application was developed using node 8.9.0 and is untested on other versions. I have only developed and tested this using Chrome browser.

Now start the main application

- `npm start`
- navigate to localhost:8080 in your browser

In development mode all mutations and corresponding states created are logged in the browser console.

### Architecture

The application is a CSR (client side rendered) Vue.js application. The container/component Vue/VueX pattern is used. Containers have their state mapped to the redux store and components are stateless. 

### Error handling

Some basic error handling displays an error message to the user if there is a problem and the `ADDRESS_ONERROR` or `SOCKET_ONERROR` mutation is called.

![home page](https://raw.githubusercontent.com/alexbowen/debeers/master/error-state.png)

I would add a 'loading' state with an indicator to the content area area when requests are made and removed when resolved with more time.

### Testing

`npm test`

There are some simple unit tests, these are intended for demonstration and coverage would need to be greater in a real life application. The tests are implemented using the Jest tool. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
