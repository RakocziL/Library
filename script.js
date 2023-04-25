/* Test Button */
const testButton = document.getElementById("test");
testButton.addEventListener("click", ()=>{
    myLibrary.forEach(books => {
        console.log(books.title)
        console.log(books.read)
    });
})
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
    const newBook = new book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.value ==1? "Read":"Not Read");
    addToLibrary(newBook);
});

