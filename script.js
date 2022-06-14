let bookLibrary = [];


function Book(name,author,year, totalPages, pagesRead,hasBeenRead){
    this.name = name;
    this.author = author;
    this.year = year;
    this.hasBeenRead = hasBeenRead;
    this.totalPages = totalPages;
    this.pagesRead = pagesRead;
}

function addBookToLibrary(name,author,year,totalPages, pagesRead ,hasBeenRead){

    bookLibrary.push(new Book(name,author,year,totalPages, pagesRead ,hasBeenRead));
    showBooksArray();
}


function showBooksArray(){

    clearContainer()

    let index = -1;
    bookLibrary.forEach(book => {
        index++;

        let card = document.createElement("div");
        let bookTitle = document.createElement("p");
        let author = document.createElement("p");
        let year = document.createElement("p");
        let pages = document.createElement("p");
        let buttonContainer = document.createElement("div");
        let readButton = document.createElement("button");
        let removeButton = document.createElement("button");
        let container = document.getElementById("books");

        
        card.classList.add("book");
        bookTitle.classList.add("book-title");
        author.classList.add("author");
        year.classList.add("year");
        card.id  = index;
       

        text.innerText = book.name


        card.appendChild(text);

        
        container.appendChild(card);
        

    });
}


function clearContainer(){
    let item = document.getElementById("books");
    while(item.firstChild){
        item.removeChild(item.firstChild);
    }
}
