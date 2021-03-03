// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let result = null
  for(let i=0;i<authors.length;i++){
    if(authors[i].id === id){
      result = authors[i]
    }
  }
  return result
}

function findBookById(books, id) {
  let bookResult = null
  for(let i=0;i<books.length;i++){
    if(books[i].id === id){
      bookResult = books[i]
    }
  }
  return bookResult
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter(book => {
    return book.borrows.some(borrow => !borrow.returned)
  })
  const returned = books.filter(book => {
    return book.borrows.every(borrow => borrow.returned)
  })
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let i=0; i<book.borrows.length; i++) {
    let search = accounts.find(account=> book.borrows[i].id === account.id)
    if (search) {
      search.returned = book.borrows[0].returned;
      result.push(search)
    }
  }
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
