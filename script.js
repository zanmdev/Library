let bookLibrary = [];


function Book(name,author,year, totalPages,hasBeenRead){
    this.name = name;
    this.author = author;
    this.year = year;
    this.hasBeenRead = hasBeenRead;
    this.totalPages = totalPages;
    
}

function addBookToLibrary(name,author,year,totalPages ,hasBeenRead){

    bookLibrary.push(new Book(name,author,year,totalPages ,hasBeenRead));
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
        card.id  = index;

        bookTitle.textContent = book.name;
        author.textContent = book.author;
        year.textContent = book.year;
        pages.textContent = book.pages;


        card.appendChild(bookTitle);
        card.appendChild(author);
        card.appendChild(year);
        card.appendChild(pages);

        console.log(book.hasBeenRead);
        if(book.hasBeenRead){
            card.classList.add("read");
            readButton.textContent = "Finished";
            readButton.classList.add("finish-btn");
        }else{
            card.classList.add("not-read");
            readButton.textContent = "Not Finished";
            readButton.classList.add("unfinish-btn");
        }
        removeButton.textContent = "Remove";
        buttonContainer.classList.add("buttons");
        buttonContainer.appendChild(readButton);
        buttonContainer.appendChild(removeButton);


        card.appendChild(buttonContainer);


        


        

        
        container.appendChild(card);
        

    });
}


function clearContainer(){
    let item = document.getElementById("books");
    while(item.firstChild){
        item.removeChild(item.firstChild);
    }
}
