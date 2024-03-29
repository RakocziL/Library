/* Test Button */
const testButton = document.getElementById("test");
testButton.addEventListener("click", ()=>{
    myLibrary.forEach(books => {
        createNewCard(books.title, books.author, books.pages, books.read);
    });
})


/* OnLoad */
function testLoad(){
    myLibrary.forEach(books => {
        createNewCard(books.title, books.author, books.pages, books.read);
    });
}

window.onload=testLoad;


/* PopUp Window events */
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popupContainer = document.getElementById('popup-container');

openPopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

popupContainer.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});

/* Base Library Function */
let myLibrary = []

function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addToLibrary(book){
    myLibrary.push(book);
}

const theDude = new book("theDude", "Jenőő", 200,true)
const theMan = new book("theMen", "Pista", 100,false)
const theFat = new book("theFat", "Klapaty", 50, true)


addToLibrary(theDude)
addToLibrary(theFat)
addToLibrary(theMan)


/* Creating a New Book with PopUp Window */
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) =>{
    event.preventDefault();
    const newBook = new book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.value ==1? true:false);
    addToLibrary(newBook);
    createNewCard(newBook.title, newBook.author, newBook.pages, newBook.read==1 ? true:false);

    bookTitle.value="";
    bookAuthor.value="";
    bookPages.value="";
    bookRead.value="1";
    popupContainer.style.display = 'none';

});

/* Creating New Library Cards */
var cardContainer = document.getElementById("cardContainer");
function createNewCard(title, author, pages, read){
    /* Creating Elements */
    var newCard = document.createElement("div");
    var newCardTitle = document.createElement("p");
    var newCardAuthor = document.createElement("p");
    var newCardPages = document.createElement("p");
    var newCardSwitch = document.createElement("label");
    var newInput = document.createElement("input");
    var newSpan = document.createElement("span");
    var newCardButton = document.createElement("button");
    var newDeleteIcon = new Image();

    /* Setting src for icons */
    newDeleteIcon.src = "icons/delete.svg"

    /* Setting the type of the input */
    newInput.type = "checkbox";

    /* Adding classes */
    newCard.className = "libraryCard";
    newCardTitle.className = "cardTitle";
    newCardAuthor.className = "cardAuthor";
    newCardPages.className = "cardPages";
    newCardSwitch.className = "cardSwitch";
    newInput.className = "checkBox"
    newSpan.className = "switch";
    newCardButton.className = "deleteButton";

    /* Appending Children  */
    cardContainer.appendChild(newCard);
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardAuthor);
    newCard.appendChild(newCardPages);
    newCard.appendChild(newCardSwitch);
    newCard.appendChild(newCardButton)
    newCardSwitch.appendChild(newInput);
    newCardSwitch.appendChild(newSpan);
    newCardButton.appendChild(newDeleteIcon);

    /* Adding Content */
    newCardTitle.textContent = title;
    newCardAuthor.textContent = "by "+author;
    newCardPages.textContent ="Pages: "+pages;
    newInput.checked = read;

    /* Adding Events to Delete Button */
    newCardButton.addEventListener("mouseover", ()=>{
        newDeleteIcon.src = "icons/empty.svg";
        newCardButton.style.transform = "scale(1.2)";
    });
    newCardButton.addEventListener("mouseleave", ()=>{
        newDeleteIcon.src = "icons/delete.svg";
        newCardButton.style.transform = "";
    });
    newCardButton.addEventListener("click", ()=>{
        newCard.remove();
        var x = 0;
        myLibrary.forEach(books =>{
            if(books.title == title && books.author == author && books.pages == pages && books.read == read){
                myLibrary.splice(x, 1);
            }
            x++;
        });
    });

    /* Adding Event to the Read Switch */
    newInput.addEventListener("input", ()=>{
        myLibrary.forEach(books =>{
            if(books.title == title && books.author == author && books.pages == pages && books.read == read){
                books.read = newInput.checked;
            }
        });
    });
}
