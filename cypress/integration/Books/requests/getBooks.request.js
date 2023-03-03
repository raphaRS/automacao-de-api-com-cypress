function allBooks() {
  return cy.request({
    method: 'GET',
    url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
    failOnStatusCode: false,
  })
}

export { allBooks };