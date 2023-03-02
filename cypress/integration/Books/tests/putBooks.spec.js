import * as putBooks from '../requests/putBooks.request'
import * as getBooks from '../requests/getBooks.request'
import * as postBooks from '../requests/postBooks.request'

describe('Put Books', () => {
  it('Change a book', () => {
    getBooks.allBooks().then((responseAllBooks) => {
      const idBookToEdited = responseAllBooks.body[0].id
      putBooks.changeBook(idBookToEdited).should((responseChangeBook) => {
        expect(responseChangeBook.status).to.eq(200);
        expect(responseChangeBook.body).to.be.not.null;
        expect(responseChangeBook.body.title).to.eq('title of the book edited');
      })
    })
  });

  it('Add and change a book', () => {
    postBooks.addBook().then((responseAddBook) => {
      const idBookToEdited = responseAddBook.body.id
      putBooks.changeBook(idBookToEdited).should((responseChangeBook) => {
        expect(responseChangeBook.status).to.eq(200);
        expect(responseChangeBook.body).to.be.not.null;
        expect(responseChangeBook.body.title).to.eq('title of the book edited');
      })
    })
  });
});