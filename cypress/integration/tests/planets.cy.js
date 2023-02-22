import * as get_planets from '../requests/get_planets';

describe('Get a informations of Tatooine', () => {
    it('Obtain the name of Planet', () => {
      //Exemplo de request com o metodo importado
      get_planets.allPlanets().should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.results[1].name).to.be.eql("Tatooine");
      });
    });

    it('Get the terrain of Tatooine', () => {
      //Exemplo de request com o metodo dentro do teste
      cy.request({
        method: 'GET',
        url: 'https://swapi.dev/api/planets/orquidario',
        failOnStatusCode: false,
      }).should((response) => {
        expect(response.status).to.be.eql(200);
        expect(response.body.results[0].terrain).to.be.eql("desert")
      });
    });

    it('Get the climate in Tatooine', () => {
    //Exemplo de como separar o array do retorno da api
      get_planets.allPlanets().should((response) => {
        const responseCompleto = response;
        const bodyDoResponse = responseCompleto.body;
        const arrayDesejado = bodyDoResponse.results[0];
        const indiceEsperado = arrayDesejado.climate; 
        expect(response.status).to.be.eql(200);
        expect(indiceEsperado).to.be.eql("arid")
      });
    });
  });