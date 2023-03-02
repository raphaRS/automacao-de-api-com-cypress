import * as deleteBooks from '../requests/deleteBooks.request';
import * as getBooks from '../requests/getBooks.request';
import * as postBooks from '../requests/postBooks.request';

describe('Delete books', () => {
  it('Delete book', () => {
    getBooks.allBooks().then((responseAllBooks) => {
      const idBookToDelete = responseAllBooks.body[0].id;
      deleteBooks.deleteBook(idBookToDelete).should((responseDeleteBook) => {
        expect(responseDeleteBook.status).to.eq(200);
      })
    })
  });

  it('Add and delete book', () => {
    postBooks.addBook().then((responseAddBook) => {
      const idBookToDelete = responseAddBook.body.id;
      deleteBooks.deleteBook(idBookToDelete).should((responseDeleteBook) => {
        expect(responseDeleteBook.status).to.eq(200);
      })
    })
  });
});