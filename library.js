const myLibrary = [];

function Book(title) {
    this.title = title
};

function addBookToLibrary(book) {
    const newBook = new Book(book);

    myLibrary.push(newBook);
};

addBookToLibrary("Harry Potter");
addBookToLibrary("The Silence of the Lambs");
addBookToLibrary("The Hobbit");
addBookToLibrary("Salem");

console.log(myLibrary);