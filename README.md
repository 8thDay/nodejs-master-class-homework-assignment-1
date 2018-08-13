# Homework Assignment 1
For [The Node.js Master Class](https://pirple.thinkific.com)

## The Assignment:

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice.

2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.

## The Plan:

1. Include configuration settings for both development and production environments
2. Allow connections over both HTTP and HTTPS
3. Use ports 3000 and 3001 for development environment and 5000 and 5001 for production
4. Create two routes; `/hello` and `notFound`
5. `/hello` route should return HTTP status code 200 and a payload containing a welcome message
6. If a query string in the form `?name=foo` is sent to `/hello`, a personalised message should be returned along with code 200
7. Requests to all other routes should return HTTP status code 404
