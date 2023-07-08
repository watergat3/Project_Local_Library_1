function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id);
}

function findBookById(books, id) {
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
    const currentlyBorrowed = books.filter((book)=> book.borrows[0].returned == false);
    const currentlyReturned = books.filter((book) => book.borrows[0].returned == true);
    const result = [currentlyBorrowed, currentlyReturned];
    return result;
}

function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map(borrower => { 
    const result = accounts.find(account => borrower.id === account.id )
    result.returned = borrower.returned;
    return result;
   })
   return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
