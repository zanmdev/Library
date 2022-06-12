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
}


function showBooksArray(){

    clearContainer()

    let index = -1;
    bookLibrary.forEach(book => {
        index++;
        let card = document.createElement("div");
        card.classList.add("book");
        card.id  = index;
       

        let text = document.createElement("p");
        text.innerText = book.name
        card.appendChild(text);

        let container = document.getElementById("books");
        container.appendChild(card);
        

    });
}


function clearContainer(){
    let item = document.getElementById("books");
    while(item.firstChild){
        item.removeChild(item.firstChild);
    }
}
