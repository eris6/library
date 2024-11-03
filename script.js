const bookCards = document.getElementById("book-cards");
const newBook = document.getElementById("add-book-button");

let myLibrary = [];

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function iterateLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i].title);
        console.log(myLibrary[i].author);
        console.log(myLibrary[i].pages);
        console.log(myLibrary[i].read);
        console.log("-------------------")
    }
}


function addBookToLibrary(title, author, pages, read){
    let addedBook = new Book(title, author, pages, read);
    myLibrary.push(addedBook);

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
    cardPages.textContent = addedBook.pages;

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
        console.log('hi');
        bookCards.removeChild(card);
        myLibrary = myLibrary.filter((book) => book != addedBook);
        iterateLibrary();
    })

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
}


addBookToLibrary("Eros the Bittersweet", "Anne Carson", "170 pages", true);
addBookToLibrary("Crime and Punishment", "Fydor Dostoevsky", "565 pages", false);
addBookToLibrary("Bluets", "Maggie Nelson", "112 pages", true);
addBookToLibrary("The Hour of the Star", "Clarice Lispector", "120 pages", true);
addBookToLibrary("Close to the Knives", "David Wojnarowicz", "288 pages", true);
addBookToLibrary("Just Kids", "Patti Smith", "278 pages", false);
addBookToLibrary("Giovanni's Room", "James Baldwin", "159 pages", false);
addBookToLibrary("Customs","Solmaz Sharif","72 pages", true)

newBook.addEventListener('click', ()=>{
    dialog.showModal();
    iterateLibrary();
})


const dialog = document.querySelector("dialog");

const confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click", ()=>{

    const formTitle = document.getElementById("form-title").value;
    const formAuthor = document.getElementById("form-author").value;
    const formPages = document.getElementById("form-pages").value + " pages";
    const formExplanation = document.getElementById("form-read").checked;



    console.log("hi");
    console.log(formTitle);
    console.log(formAuthor);
    console.log(formPages);
    console.log(formExplanation);


    addBookToLibrary(formTitle, formAuthor, formPages, formExplanation);

})



const closeButton = document.getElementById("add-book-close-button");
closeButton.addEventListener("click", () => {
  dialog.close();
});
