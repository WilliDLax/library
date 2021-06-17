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
    return `${this.title} by ${this.author}, with ${this.pages} pages.`;
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
    "J.k Rowling",
    532,
    "read"
);
let book3 = new Book(
    "Catching fire",
    "J.k Rowling",
    126,
    "read"
);
let book4 = new Book(
    "Terror man",
    "Jung woo",
    896,
    "read"
);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);


myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.textContent = book.info();
    document.querySelector("body").appendChild(bookCard);

    let statusbar = document.createElement("div");
    statusbar.textContent = book.status;
    statusbar.addEventListener("click", () => {
        book.changeStatus();
        statusbar.textContent = book.status;
    });
    bookCard.appendChild(statusbar);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => {
        bookCard.style.display = "none";
        myLibrary.splice(myLibrary.indexOf(book),1);
        console.table(myLibrary);
    });
    bookCard.appendChild(deleteButton);
});


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
    document.querySelector("body").appendChild(bookCard);

    let statusbar = document.createElement("div");
    statusbar.textContent = book.status;
    statusbar.addEventListener("click", () => {
        book.changeStatus();
        statusbar.textContent = book.status;
    });
    bookCard.appendChild(statusbar);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
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