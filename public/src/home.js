function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedArray = books.filter((book) => book.borrows[0].returned == false);

  return borrowedArray.length;
}

function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  const result = [];
  const count = {};
  genre.forEach(function (index) {
    count[index] = (count[index] || 0) + 1;
  });
  for (let key in count) {
    result.push({
      name: key,
      count: count[key],
    });
  }
  result.sort((a, b) => (a.count < b.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}


function getMostPopularAuthors(books, authors) { let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
