const bookCards = document.getElementById("book-cards");
const newBook = document.getElementById("add-book-button");
const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirmBtn");

let myLibrary = [];

function Book(title, author, pagesRead, pagesUnread, read){
    this.title=title;
    this.author=author;
    this.pagesRead=pagesRead;
    this.pagesUnread=pagesUnread;
    this.read=read;
}

function iterateLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i].title);
        console.log(myLibrary[i].author);
        console.log(myLibrary[i].pagesRead);
        console.log(myLibrary[i].pagesUnread);
        console.log(myLibrary[i].read);
        console.log("-------------------")
    }
}


function addBookToLibrary(title, author, pagesRead, pagesUnread, read){
    let addedBook = new Book(title, author, pagesRead, pagesUnread, read);
    myLibrary.push(addedBook);
    createCard(addedBook);
}


function createCard(addedBook){
    const card = document.createElement("div");
    card.classList.add("card");
    bookCards.appendChild(card);

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent="-"
    card.appendChild(deleteButton);

    const cardTitle = document.createElement("div");
    cardTitle.textContent = addedBook.title;
    const cardAuthor = document.createElement("div");
    cardAuthor.textContent = addedBook.author;
    const cardPages = document.createElement("div");
    cardPages.textContent = addedBook.pagesRead + " / " + addedBook.pagesUnread + " pages";
    const cardRead = document.createElement("div");

    if(addedBook.read){
        cardRead.classList.add("read-button");
        cardRead.textContent = "Already read";    
    }

    else{
        cardRead.classList.add("unread-button");
        cardRead.textContent = "Not read yet";
    }

    cardRead.addEventListener("click", ()=>{
        if (cardRead.textContent == "Already read"){
            cardRead.classList.remove("read-button");
            cardRead.classList.add("unread-button");
            cardRead.textContent = "Not read yet";
            addedBook.read = false;

        }
        else{
            cardRead.classList.remove("unread-button");
            cardRead.classList.add("read-button");
            cardRead.textContent = "Already read";
            addedBook.read = true;

        }
    })

    deleteButton.addEventListener("click", ()=>{
        bookCards.removeChild(card);
        myLibrary = myLibrary.filter((book) => book != addedBook);
        iterateLibrary();

    })

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
}

newBook.addEventListener('click', ()=>{
    document.getElementById("form-title").value = null;
    document.getElementById("form-author").value = null;
    document.getElementById("form-pages-to-read").value = null;
    document.getElementById("form-pages-read").value = null;
    dialog.showModal();
})

confirmBtn.addEventListener("click", ()=>{
    const formTitle = document.getElementById("form-title").value;
    const formAuthor = document.getElementById("form-author").value;
    const formPagesRead = document.getElementById("form-pages-read").value 
    const formPagesUnread = document.getElementById("form-pages-to-read").value;
    const formExplanation = document.getElementById("form-read").checked;
    addBookToLibrary(formTitle, formAuthor, formPagesRead, formPagesUnread, formExplanation);

})

const closeButton = document.getElementById("add-book-close-button");
closeButton.addEventListener("click", () => {
  dialog.close();
});


addBookToLibrary("Eros the Bittersweet", "Anne Carson", 170, 170, true);
addBookToLibrary("Crime and Punishment", "Fydor Dostoevsky", 436, 565, false);
addBookToLibrary("Bluets", "Maggie Nelson", 112, 112, true);
addBookToLibrary("The Hour of the Star", "Clarice Lispector", 120, 120, true);
addBookToLibrary("Close to the Knives", "David Wojnarowicz", 288, 288, true);
addBookToLibrary("Just Kids", "Patti Smith", 125, 278, false);
addBookToLibrary("Giovanni's Room", "James Baldwin", 34, 159, false);
addBookToLibrary("Customs","Solmaz Sharif",60, 72, true)
