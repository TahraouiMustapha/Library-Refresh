const myLibrary = [];



showBooks();



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
    const booksContainer = document.querySelector('.books-container');
    myLibrary.forEach( book => {
        booksContainer.appendChild(
            createBookCard(book)
        );
    })
}

function createBookCard( book ) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card'); 

        const titleElement = createParagraphElement( 'title' );
        titleElement.textContent = book.title ;
        cardDiv.appendChild( titleElement );

        const authorElement = createParagraphElement( 'author' );
        authorElement.textContent = `Author : ${book.author}` ;
        cardDiv.appendChild( authorElement );

        const numberPagesElement = createParagraphElement( 'numberPages' );
        numberPagesElement.textContent = `Pages : ${book.numberPages}` ;
        cardDiv.appendChild( numberPagesElement );

        const haveReadElement = createParagraphElement( 'haveRead' );
        haveReadElement.textContent = `Status :${book.haveRead}` ;
        cardDiv.appendChild( haveReadElement );


    return cardDiv;
}

function createParagraphElement( dataName ) {
    const p = document.createElement('p');
    p.classList.add(`book-${dataName}`);
    return p;
}
