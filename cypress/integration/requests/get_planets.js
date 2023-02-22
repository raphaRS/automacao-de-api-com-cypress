function allPlanets() {
    return cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/planets',
    })
  }

  export { allPlanets,  };