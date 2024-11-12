const myLibrary = [
    new Book('defautl', 'author1', 345, false)
];

const newBookBtn = document.querySelector('#new-book-btn');
const myDialog = document.querySelector('dialog');

showBooks();

//for new book btn in main
newBookBtn.addEventListener("click", () =>
    myDialog.showModal()
);

//for adding a new book btn in the dialog
const addNewBookBtn = document.querySelector('#add-new-book');
addNewBookBtn.addEventListener('click', () => {
    const titleInput = document.querySelector('input[name="book_title"]');
    const authorInput = document.querySelector('input[name="book_author"]');
    const numberPagesInput = document.querySelector('input[name="book_numberPages"]');
    //get the radio elements
    const haveReadRadios = document.querySelectorAll('input[name="book_haveRead"]');

    if(titleInput.value != '' && authorInput.value!='') {
        addBookToLibrary(
            titleInput.value, 
            authorInput.value, 
            numberPagesInput.value,
            haveReadRadios[0].checked === true ? true : false
        )
        showBooks();
    } 
});
const closeDialogBtn = document.querySelector('#closeBtn');
closeDialogBtn.addEventListener("click", () => 
    myDialog.close()
)

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
    // booksContainer.innerHTML = '';
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
        let doYouHaveReadAnswer = book.haveRead === true ? 'have read' : 'not yet';
        haveReadElement.textContent = `Status : ${doYouHaveReadAnswer}` ;
        cardDiv.appendChild( haveReadElement );


    return cardDiv;
}

function createParagraphElement( dataName ) {
    const p = document.createElement('p');
    p.classList.add(`book-${dataName}`);
    return p;
}
