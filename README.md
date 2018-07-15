## FT-HEADLINES

[link to headlines financial times](https://headlines-financial-times.herokuapp.com/)

### Approach

I first obtained an API Key from https://developer.ft.com/ and followed the setup.
I made sure I can hit the API by using PostMan and then started on the Node API to make sure I could again hit the API and get a request.

Lay-out the basic front-end to make sure the basic styling and elements are in place.

Hooked up the search input form to hit the api on submit and handle the response to update the front-end with any response so I could catch any errors.

### Instructions

* Clone this repository
* Run ```npm install``` to install the dependencies
* Run ```npm start``` and go to localhost:3000 in your favorite browser
* To see tests run Cypress in the terminal with ```./node_modules/.bin/cypress open```
and go to integration/simple_spec file to see the tests.

### User Stories

```
As a User
So I can see which headlines the FT has
I would like to all of them on one page
```

```
As a User
So I can read the article
I would like to click and be directed to the whole article
```

```
As a User
So I can search for a headLines
I would like to submit a keyword
```

```
As a User
So I can see all the headlines containing my submitted keyword
I would like to be navigated to a page with the search-results
```
