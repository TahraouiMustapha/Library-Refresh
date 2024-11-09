const myLibrary = [];

function Book(title, author, numberPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.haveRead = haveRead;
    this.info = function() {
        let result = haveRead == true ?'have read':'not read yet';  
        return `${title} by ${author} , ${numberPages}, ${result}`;
    }    
}

function addBookToLibrary( title, author, numberPages, haveRead ) {
    let newBook = new Book( title, author, numberPages, haveRead );

    myLibrary.push(newBook);
}

// displays books
function showBooks() {
    myLibrary.forEach( book => {
        console.log(book);
    })
}

