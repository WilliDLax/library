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
    return `${this.title} by ${this.author}, with ${this.pages} pages. ${this.status}`;
}

const newBookButton = document.getElementById("new-book");
const bookForm = document.getElementById("book-form");

newBookButton.addEventListener("click", ()=> {
    bookForm.style.display = "block";
});

/*let book1 = new Book(
    "Harry Potter",
    "J.k Rowling",
    456,
    "read"
);

myLibrary.push(book1);
myLibrary.push(book1);
myLibrary.push(book1);
myLibrary.push(book1);

/*function showLibrary(){
    myLibrary.forEach((book) => {
        let bookCard = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";
        bookCard.textContent = book.info();
        bookCard.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            bookCard.style.display = "none";
        });
        bookCard.classList.add("card");
        document.querySelector("body").appendChild(bookCard);
    });
}*/


function addToLibrary(){
    let book = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("status").value
    );
    myLibrary.push(book);
    let bookIndex = myLibrary.indexOf(book);

    let bookCard = document.createElement("div");
    bookCard.textContent = book.info();
    bookCard.classList.add("card");
    document.querySelector("body").appendChild(bookCard);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        myLibrary.splice(bookIndex,1);
        bookCard.style.display = "none";
        console.table(myLibrary);
    });

    bookForm.style.display = "none";
    console.table(myLibrary);
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", addToLibrary);

const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => {
    bookForm.style.display = "none";
});