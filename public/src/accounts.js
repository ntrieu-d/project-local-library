// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let details = null
  for(let i=0; i<accounts.length; i++){
    if (accounts[i].id === id){
      details = accounts[i]
    }
  }
  return details
}

function sortAccountsByLastName(accounts) { 
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  for(let i=0;i<books.length;i++){
    for(let j=0;j<books[i].borrows.length;j++){
      if(books[i].borrows[j].id === account.id){
        total++
      }
    }
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account
  let filteredBooks = books.filter(book => {
    return book.borrows.some(borrow => borrow.id === id && !borrow.returned)
  })
  return filteredBooks.map(book => {
    book.author = authors.find(author => author.id === book.authorId)
    return book
  })
}

/*function getBooksPossessedByAccount(account, books, authors) {
  const filteredBooks = []
  for(let i=0;i<books.length;i++){
    if(isCheckedOut(books[i].borrows, account)){
      filteredBooks.push(books[i])
    }
  }
  for(let i = 0; i < filteredBooks.length; i++) {
    filteredBooks[i].author = findAuthorById(filteredBooks[i].authorId, authors)
  }
  return filteredBooks
}

function findAuthorById(id, authors) {
  for(let i = 0; i < authors.length; i++) {
    if(authors[i].id === id) return authors[i]
  }
}

function isCheckedOut(borrows, account) {
  for(let i = 0; i < borrows.length; i++) {
    return borrows[i].id === account.id && !borrows[i].returned
  }
}*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
