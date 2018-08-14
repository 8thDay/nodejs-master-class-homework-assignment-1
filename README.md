# Homework Assignment 1
For [The Node.js Master Class](https://pirple.thinkific.com)

## The Assignment:

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice.

2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.

## The Plan:

1. Include configuration settings for both development and production environments.
2. Use port 3000 for the development environment and 5000 for production.
3. Create two routes; `/hello` and `notFound`.
4. `/hello` route should return HTTP status code 200 and a payload containing a welcome message in JSON format
5. If a query string in the form `?name=foo` is sent to `/hello` a personalised message should be returned, else a generic message should be returned.
6. Requests to all other routes should return HTTP status code 404.

## Testing:

1. Starting the server
- `NODE_ENV=development node index.js` - Server starts on port 3000
- `NODE_ENV=production node index.js`  - Server starts on port 5000
- `node index.js`                      - Server starts on port 3000 by default

2. Making requests (development mode)
- GET or POST request to `localhost:3000/hello` - Returns status code 200 and { "welcome": "Welcome stranger!" }
- GET or POST request to `localhost:3000/foo` - Returns status code 404 and { "error": "404 Not Found" }
- GET or POST request to `localhost:3000/hello/foo` - Returns status code 404 and { "error": "404 Not Found" }
- GET or POST request to `localhost:3000/hello?name=Grace Hopper` - Returns status code 200 and { "welcome": "Welcome Grace Hopper!" }
- GET or POST request to `localhost:3000/foo?name=Grace Hopper` - Returns status code 404 and { "error": "404 Not Found" }
- GET or POST request to `localhost:3000/hello?name=Grace Hopper&rank=Rear admiral` - Returns status code 200 and { "welcome": "Welcome Grace Hopper!" }

3. Repeat above tests in production mode

**All above tests pass.**
