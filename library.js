let myLibrary = [];

function Book(
    title,
    author,
    pages,
    status
){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}`;
}
Book.prototype.pageNumber = function(){
    return `${this.pages} pages`;
}

Book.prototype.changeStatus = function(){
    if(this.status === "read"){this.status = "unread";}
    else{this.status = "read";}
}

const newBookButton = document.getElementById("new-book");
const bookForm = document.getElementById("book-form");

newBookButton.addEventListener("click", ()=> {
    bookForm.style.display = "block";
});

let book1 = new Book(
    "Harry Potter",
    "J.k Rowling",
    456,
    "read"
);
let book2 = new Book(
    "Hunger games",
    "Susane Collins",
    532,
    "unread"
);
let book3 = new Book(
    "Terror man",
    "Jung woo",
    896,
    "unread"
);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

//display sample books
myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.textContent = book.info();
    document.getElementById("library").appendChild(bookCard);

    let numberOfPages = document.createElement("p");
    numberOfPages.textContent = book.pageNumber();
    bookCard.appendChild(numberOfPages);

    let statusbar = document.createElement("div");
    statusbar.classList.add("status-bar");
    statusbar.textContent = book.status;
    statusbar.addEventListener("click", () => {
        book.changeStatus();
        statusbar.textContent = book.status;
    });
    bookCard.appendChild(statusbar);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
        bookCard.style.display = "none";
        myLibrary.splice(myLibrary.indexOf(book),1);
        console.table(myLibrary);
    });
    bookCard.appendChild(deleteButton);
});

//add a book to the library
function addToLibrary(){
    let book = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("status").options[document.getElementById("status").selectedIndex].value
    );
    myLibrary.push(book);

    let bookCard = document.createElement("div");
    bookCard.textContent = book.info();
    bookCard.classList.add("card");
    document.getElementById("library").appendChild(bookCard);

    let numberOfPages = document.createElement("p");
    numberOfPages.textContent = book.pageNumber();
    bookCard.appendChild(numberOfPages);

    let statusbar = document.createElement("div");
    statusbar.classList.add("status-bar");
    statusbar.textContent = book.status;
    statusbar.addEventListener("click", () => {
        book.changeStatus();
        statusbar.textContent = book.status;
    });
    bookCard.appendChild(statusbar);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "delete";
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        bookCard.style.display = "none";
    });

    bookForm.style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", addToLibrary);

const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => {
    bookForm.style.display = "none";
});