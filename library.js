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
        const titleDiv = document.createElement("div");
        const statusDiv = document.createElement("div");
        const changeReadStatusBtn = document.createElement("button");
        const readStatus = document.createElement("div");
        const removeBtn = document.createElement("button");

        titleDiv.textContent = element.title
        changeReadStatusBtn.textContent = "Change Read Status";
        readStatus.textContent = element.read;
        removeBtn.textContent = "Remove Book";

        bookDiv.classList.add("book");
        titleDiv.classList.add("book-title");
        statusDiv.classList.add("status");
        changeReadStatusBtn.classList.add("change-read-status");
        readStatus.classList.add("read-status");
        removeBtn.classList.add("remove-button");
        
        container.appendChild(bookDiv);
        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(statusDiv);
        statusDiv.appendChild(changeReadStatusBtn);
        statusDiv.appendChild(readStatus);
        bookDiv.appendChild(removeBtn);
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
        document.getElementById("myModal").reset();
    })
};

document.getElementById("myDialog").addEventListener("close", () => {
    document.getElementById("add-button").blur();
});


addBookToLibrary("Harry Potter", "Not Read");
addBookToLibrary("The Silence of the Lambs", "Read");
addBookToLibrary("The Hobbit", "Not Read");
addBookToLibrary("Salem", "Read");

displayBooks(myLibrary);
addModal();