const myLibrary = [];

function Book(title) {
    this.title = title
};

function addBookToLibrary(book) {
    const newBook = new Book(book);

    myLibrary.push(newBook);
};

/* addBookToLibrary("Harry Potter");
addBookToLibrary("The Silence of the Lambs");
addBookToLibrary("The Hobbit");
addBookToLibrary("Salem"); */

console.log(myLibrary);

function displayBooks(array) {
    const container = document.querySelector("#library-container");

    array.forEach(element => {
        const myDiv = document.createElement("div");
        myDiv.textContent = element.title;
        myDiv.classList.add("book");
        container.appendChild(myDiv);
    });
}

/* Add dialog / Modal */

const modalBtn = document.querySelector(".add-button");
const dialog = document.querySelector(".myDialog");
const myInput = document.querySelector("input");
const confirmBtn = document.querySelector(".confirm-button");

modalBtn.addEventListener("click", () => {
    dialog.showModal();
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    removeAllBooks();
    dialog.close(addBookToLibrary(myInput.value));
    displayBooks(myLibrary);
})

function removeAllBooks() {
    const removeBooks = document.querySelectorAll(".book");
    removeBooks.forEach(element => {
        element.remove();
    });
}


displayBooks(myLibrary);