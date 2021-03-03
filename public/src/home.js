// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts){
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter((book)=>book.borrows[0].returned === false)
  return borrowed.length
}

function getMostCommonGenres(books) {
  let map = {}
  books.forEach(book => {
   if(map[book.genre]) {
     map[book.genre]++
    } else {
     map[book.genre] = 1
    }
  })
  let genres = Object.entries(map).map(([name, count]) => {
   return { name, count }
})
  return genres.sort((a, b) => b.count - a.count).slice(0,5)
}

function getMostPopularBooks(books) {
  let map = {}
  books.forEach(book =>{
    map[book.title] = book.borrows.length
  })
  let popBooks = Object.entries(map).map(([name, count]) =>{
    return {name, count}
  })
  return popBooks.sort((a,b)=>b.count-a.count).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let map = {}
  books.forEach(book => {
    if(map[book.authorId]) {
      map[book.authorId]+= 1*book.borrows.length
    }else{
      map[book.authorId]= book.borrows.length
    }
  })

  let newMap = {}
  
  for(const authorId of Object.keys(map)){
    for(let i=0;i<authors.length;i++){
      if(authorId == authors[i].id){
        newMap[`${authors[i].name.first} ${authors[i].name.last}`] = map[authorId]
      }
    }
  }

  results = Object.entries(newMap).map(([name, count])=>{
    return {name, count}
  })
  
  return results.sort((a,b) => b.count - a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
