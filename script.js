const bookCards = document.getElementById("book-cards");


const myLibrary = [];

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.index=myLibrary.length;
}

function addBookToLibrary(title, author, pages, read){
    let addedBook = new Book(title, author, pages, read);
    myLibrary.push(addedBook);
}



function iterateLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        const card = document.createElement("div");
        bookCards.appendChild(card);
        card.classList.add("card")


        const title = document.createElement("div");
        title.textContent = myLibrary[i].title;
        
        const author = document.createElement("div");
        author.textContent = myLibrary[i].author;

        const pages = document.createElement("div");
        pages.textContent = myLibrary[i].pages;


        const read = document.createElement("div");

        if(myLibrary[i].read){read.textContent = "Read"}
        else{read.textContent = "Not Read"}

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        const deleteButton = document.createElement("div");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "-"
        card.appendChild(deleteButton);

        deleteButton.addEventListener("click", ()=>{
            bookCards.removeChild(card);
        })
    }
}

addBookToLibrary("Crime and Punishment", "Fydor Dostoevsky", "565 pages", false);
addBookToLibrary("Eros the Bittersweet", "Anne Carson", "170 pages", true);
iterateLibrary();
