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
  it('finds the content "FINANCIAL TIMES "', function() {
    cy.visit('https://headlines-financial-times.herokuapp.com/')
  });
});
