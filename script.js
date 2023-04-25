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


myLibrary.forEach(books => {
    console.log(books.title)
    console.log(books.read)
});






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