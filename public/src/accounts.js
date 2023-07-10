function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id);
}

function sortAccountsByLastName(accounts) {
return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
 const userId = account.id;
  
 let accumulator = 0;
 const total = books.reduce((acc, book) => {
   const borrowRecord = book.borrows;
   const mapIds = borrowRecord.map((record) => record.id);
   if (mapIds.includes(userId)) acc++;
   return acc;
 }, accumulator);
 
 return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
    .map(book => { const author = authors.find(author => author.id === book.authorId)
      book.author = author; 
      return book;         
 })  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
