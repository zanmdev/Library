let bookLibrary = [];
let addBook = document.querySelector(".add-btn");
let removeButtons = document.querySelectorAll("remove-btn");

let modal = document.querySelector(".modal");
let close = document.querySelector(".close-btn");
let modalAdd = document.querySelector(".modal-add");

let container = document.querySelector("#books");

addBook.addEventListener("click", () =>{
    modal.style.display = "block";
});

close.addEventListener("click", () =>{
    modal.style.display = "none";
});



modalAdd.addEventListener("click",()=>{
    modal.style.display = "none";
    
    let inputTitle = document.querySelector("#title").value;
    let inputYear = document.querySelector("#year").value;
    let inputAuthor = document.querySelector("#author").value;
    let inputPages = document.querySelector("#pages").value;
    let inputRead = document.querySelector("#read").checked;
    addBookToLibrary(inputTitle, inputAuthor,inputYear,inputPages,inputRead);
});

container.addEventListener("click" ,(e)=>{
    if(e.target.classList.contains("remove-btn")){
        removeBook(e.target.parentElement.parentElement.id);
    }

    if (e.target.id === "unfinish-btn"){
        e.target.id = "finish-btn";
        e.target.textContent = "Finished";
        setReadStatus(e.target.parentElement.parentElement.id);
    }else if(e.target.id ==="finish-btn"){
        e.target.id = "unfinish-btn";
        e.target.textContent = "Not Finished";
        setReadStatus(e.target.parentElement.parentElement.id);
    }
});

function Book(name,author,year,totalPages,hasBeenRead){

    this.name = name;
    this.author = author;
    this.year = year;
    this.totalPages = totalPages;
    this.hasBeenRead = hasBeenRead;
    
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
        pages.textContent = book.totalPages;


        card.appendChild(bookTitle);
        card.appendChild(author);
        card.appendChild(year);
        card.appendChild(pages);

        
        if(book.hasBeenRead){
            card.classList.add("read");
            readButton.textContent = "Finished";
            readButton.id = "finish-btn";
        }else{
            card.classList.add("not-read");
            readButton.textContent = "Not Finished";
            readButton.id ="unfinish-btn";
        }

        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

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

function removeBook(index){
    bookLibrary.splice(index,1);
    clearContainer()
    showBooksArray();
}

function setReadStatus(index){
    bookLibrary[index].hasBeenRead = bookLibrary[index].hasBeenRead  == true ? false : true;
}