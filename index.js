function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))

    // Handle fetch errors
    .catch(error => console.error('Error fetching books:', error)); 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; 
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});