## FT-HEADLINES

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[link to headlines financial times](https://headlines-financial-times.herokuapp.com/)

### Approach

- I first obtained an API Key from https://developer.ft.com and followed the setup.
  I made sure I can hit the API and tested the API by using PostMan and then started on the Node API to make sure I could again hit the API and get a request.

- Diagrammed out how the program should interact with the user and the API.

```
user              program                       API
  |                  |                           |
  |                  |                           |
  | -----accesses--->|--asks for articles------->|
  |                  |                           |
  |<--shows articles-|<--responds with article---|
  |                  |                           |
```

- Lay-out the basic front-end to make sure the basic styling and elements are in place.

- Hooked up the search input form to hit the api on submit and handle the response to update the front-end with any response so I could catch any errors.

- Research Origami-components and implemented to the header of the website

- Research Heroku, because first time to deploy on Heroku. This took a while, because after a lot of working out found out that I needed to configure Heroku for my API key.

### Instructions

- Clone this repository
- Run `npm install` to install the dependencies
- Make a .env file to store your Api key in a variable and call it FT_API_KEY like so: `FT_API_KEY = Your apiKey`
- Run `npm start` and go to localhost:3000 in your favorite browser
- To see tests run Cypress in the terminal with `./node_modules/.bin/cypress open`
  and go to integration/simple_spec file to see the tests.

### User Stories

```
As a User
So I can see which headlines the FT has
I would like to have all of them on one page
```

```
As a User
So I can read the article
I would like to click and be directed to the whole article
```

```
As a User
So I can search for headLines
I would like to submit a keyword
```

```
As a User
So I can see all the headlines containing my submitted keyword
I would like to be navigated to the search-results
```

### Technologies

- JavaScript
- Node.js
- Express
- Origami-components
- Cypress
- Heroku for deployment

### Still to do

- Pagination
- Local Storage
- More research in testing api
- Use SASS
