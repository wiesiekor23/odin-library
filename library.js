const myLibrary = [];

function Book(title, read) {
    this.title = title
    this.read = read;
};

function addBookToLibrary(book, read) {
    const newBook = new Book(book, read);

    myLibrary.push(newBook);
};

addBookToLibrary("Harry Potter");
addBookToLibrary("The Silence of the Lambs");
addBookToLibrary("The Hobbit");
addBookToLibrary("Salem");

console.log(myLibrary);

function displayBooks(array) {
    const container = document.querySelector("#library-container");
    container.innerHTML = "";

    array.forEach(element => {
        const myDiv = document.createElement("div");
        const myBtn = document.createElement("button");
        myDiv.textContent = element.title + " " + element.read;
        myBtn.textContent = "Remove Book";
        myDiv.classList.add("book");
        myBtn.classList.add("remove-button");
        
        
        container.appendChild(myDiv);
        myDiv.appendChild(myBtn);
    });
    
    removeBook();
}

function removeBook() {
    const removeBtn = document.querySelectorAll(".remove-button");
    
    removeBtn.forEach((button, index) =>{
        button.addEventListener("click", () =>{
            removeBookFromArray(myLibrary, index);
            displayBooks(myLibrary);
        });
    });    
}

function removeBookFromArray(array, index) {
    array.splice(index, 1);
}

/* Add dialog / Modal */

const modalBtn = document.querySelector(".add-button");
const dialog = document.querySelector(".myDialog");
const myInput = document.querySelector("input");
const mySelect = document.querySelector("select");
const confirmBtn = document.querySelector(".confirm-button");

modalBtn.addEventListener("click", () => {
    dialog.showModal();
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    removeAllBooks();
    dialog.close(addBookToLibrary(myInput.value, mySelect.value));
    displayBooks(myLibrary);
})


function removeAllBooks() {
    const removeBooks = document.querySelectorAll(".book");
    removeBooks.forEach(element => {
        element.remove();
    });
}


Book.prototype.changeReadStatus = function() {
    if (this.read == "Read") {
        this.read = "Not Read";
    } else {
        this.read = "Read";
    }
}

const book1 = new Book("Hyperion", "Read");
book1.changeReadStatus();

displayBooks(myLibrary);