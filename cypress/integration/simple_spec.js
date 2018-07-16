describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  });
});

describe('Visting homepage', function() {
  it('Visits homepage', function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/')
  });
});


describe('Homepage got right content', function() {
  it('finds the content "Theresa May "', function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/')
    cy.contains('Theresa May')
  });
});

describe('search function', function() {
  it('finds search icon', function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/')
    cy.contains('Search')
  });
});

describe("should display today's headlines", function() {
  it("finds content 'Trump'", function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/')
    cy.contains('Trump')
  })
})

describe("should display today's headlines", function() {
  it("finds content 'Brexit'", function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/')
    cy.contains('Brexit')
  })
})

describe('Financial Times', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('https://headlines-financial-times.herokuapp.com/')
    cy.title().should('include', 'FINANCIAL TIMES')
  })

})

describe('Search', function(){
  it('can search for keywords', function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/search?search=morocco')
    cy.contains('Morocco')
  });
});

describe('Search', function(){
  it('can search for keywords', function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/search?search=dogs')
    cy.contains('dogs')
  });
});
