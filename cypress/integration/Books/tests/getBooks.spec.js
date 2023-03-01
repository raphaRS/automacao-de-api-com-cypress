import { expect } from 'chai';
import * as getBooks from '../requests/getBooks.request';

describe('Get books', () => {
  it('List all books', () => {
    getBooks.allBooks().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
    })
  });
});