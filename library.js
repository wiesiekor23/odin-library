class Book {
    constructor(title, read) {
        this.title = title
        this.read = read;
    }

    changeReadStatus() {
        if (this.read == "Read") {
            this.read = "Not Read";
        } else {
            this.read = "Read";
        }
    }
};

class Library {
    constructor() {
        this.library = [];
    }

    addBook(title, read) {
        this.library.push(new Book(title, read))
    }

    removeBook(index) {
        this.library.splice(index, 1);
    }
}

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
        if (element.read == "Read") {
            readStatus.style.cssText = "color: darkblue;";
        } else {
            readStatus.style.cssText = "color: darkred;";
        }
        
        container.appendChild(bookDiv);
        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(statusDiv);
        statusDiv.appendChild(changeReadStatusBtn);
        statusDiv.appendChild(readStatus);
        bookDiv.appendChild(removeBtn);
    });
    
    changeStatus();
    removeBook();
}

function removeBook() {
    const removeBtn = document.querySelectorAll(".remove-button");
    
    removeBtn.forEach((button, index) => {
        button.addEventListener("click", () => {
            newLibrary.removeBook(index);
            displayBooks(bookLibrary);
        });
    });
}

function changeStatus() {
    const changeReadStatusBtn = document.querySelectorAll(".change-read-status");
    
    changeReadStatusBtn.forEach((button, index) => {
        button.addEventListener("click", () => {
            newLibrary.library[index].changeReadStatus();
            displayBooks(bookLibrary);
        })
    });
};

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
        dialog.close(newLibrary.addBook(myInput.value, mySelect.value));
        displayBooks(bookLibrary);
        document.getElementById("myModal").reset();
    })
};

document.getElementById("myDialog").addEventListener("close", () => {
    document.getElementById("add-button").blur();
});

const newLibrary = new Library();
const bookLibrary = newLibrary.library;
displayBooks(bookLibrary);
addModal();