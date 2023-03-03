import * as postBooks from '../requests/postBooks.request';

describe('Post books', () => {
  it('Add book', () => {
    postBooks.addBook().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("title of the book");
    })
  });
});