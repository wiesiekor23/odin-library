const myLibrary = [];

function Book(title, read) {
    this.title = title
    this.read = read;
};

function addBookToLibrary(book, read) {
    const newBook = new Book(book, read);

    myLibrary.push(newBook);
};

function displayBooks(array) {
    const container = document.querySelector("#library-container");
    container.innerHTML = "";
    
    array.forEach(element => {
        const bookDiv = document.createElement("div");
        const removeBtn = document.createElement("button");
        const ChangeReadStatusBtn = document.createElement("button");
        
        bookDiv.textContent = element.title + " " + element.read;
        removeBtn.textContent = "Remove Book";
        ChangeReadStatusBtn.textContent = "Change Read Status";

        bookDiv.classList.add("book");
        removeBtn.classList.add("remove-button");
        ChangeReadStatusBtn.classList.add("change-read-status");
        
        container.appendChild(bookDiv);
        bookDiv.appendChild(removeBtn);
        bookDiv.appendChild(ChangeReadStatusBtn);
    });
    
    removeBook();
    changeStatus();
}

function removeBook() {
    const removeBtn = document.querySelectorAll(".remove-button");
    
    removeBtn.forEach((button, index) => {
        button.addEventListener("click", () =>{
            removeBookFromArray(myLibrary, index);
            displayBooks(myLibrary);
        });
    });    
}

function removeBookFromArray(array, index) {
    array.splice(index, 1);
}

function changeStatus() {
    const changeReadStatusBtn = document.querySelectorAll(".change-read-status");
    
    changeReadStatusBtn.forEach((button, index) => {
        button.addEventListener("click" , () => {
            myLibrary[index].changeReadStatus();
            displayBooks(myLibrary);
        })
    });
};

Book.prototype.changeReadStatus = function() {
    if (this.read == "Read") {
        this.read = "Not Read";
    } else {
        this.read = "Read";
    }
}

/* Add dialog / Modal */

function addModal() {
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
        dialog.close(addBookToLibrary(myInput.value, mySelect.value));
        displayBooks(myLibrary);
    })
};

addBookToLibrary("Harry Potter", "Not Read");
addBookToLibrary("The Silence of the Lambs", "Read");
addBookToLibrary("The Hobbit", "Not Read");
addBookToLibrary("Salem", "Read");

displayBooks(myLibrary);
addModal();