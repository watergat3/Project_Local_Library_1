function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id);
}

function sortAccountsByLastName(accounts) {
return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(accounts, books) {
let borrows = 0;

for(let i = 0; i < books.length; i++){
  for(let j = 0; j < books[i].borrows.length; j++) {
    if(accounts.id == books[i].borrows[j].id){
      borrows++;
    }
    }
  }
  return borrows;
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
