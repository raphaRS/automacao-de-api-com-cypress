import * as get_planets from '../requests/get_planets';

describe('Get a infomations Tatooine', () => {
    it('Planet Tatooine', () => {
      //Exemplo de request com o metodo importado
      get_planets.allPlanets().should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.results[0].name).to.be.eql("Tatooine");
      });
    });

    it('Get terrain of Tatooine', () => {
      //Exemplo de request com o metodo dentro do teste
      cy.request({
        method: 'GET',
        url: 'https://swapi.dev/api/planets',
        failOnStatusCode: false,
      }).should((response) => {
        expect(response.status).to.be.eql(200);
        expect(response.body.results[0].terrain).to.be.eql("desert")
      });
    });

    it('Get climate Tatooine', () => {
    //Exemplo de como separar o array do response
      get_planets.allPlanets().should((response) => {
        const responseTatooine = response.body.results;
        const climate = responseTatooine[0].climate;
        expect(response.status).to.be.eql(200);
        expect(climate).to.be.eql("arid")
      });
    });
  });