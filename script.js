const bookCards = document.getElementById("book-cards");
const newBook = document.getElementById("add-book-button");
const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirmBtn");

let myLibrary = [];

class Book{
    constructor(title, author, pages, read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
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
    createCard(addedBook);
}


function createCard(addedBook){
    const card = document.createElement("div");
    card.classList.add("card");
    bookCards.appendChild(card);

    colorSet = ["#AA7DB1", "#EC154F", "#096735", "#F26722", "#5BBD4E", 
        "#12213F", "#066866", "#0291B5", "#9E7626", "#65491B", "#B700E1", "#3E0092", "#5B01AE",
    "#8D01D3", "#81322A", "#C45E46", "#A38579", "#AA594E", "#114847", "#900C0F", "#646665", "#424739"];


    card.style.backgroundColor=colorSet[Math.floor(Math.random() * colorSet.length)];

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
        bookCards.removeChild(card);
        myLibrary = myLibrary.filter((book) => book != addedBook);
    })

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
}

newBook.addEventListener('click', ()=>{
    document.getElementById("form-title").value = null;
    document.getElementById("form-author").value = null;
    document.getElementById("form-pages").value = null;
    dialog.showModal();
    validateForm();
})

confirmBtn.addEventListener("click", ()=>{


    const formTitle = document.getElementById("form-title");
    const formAuthor = document.getElementById("form-author");
    const formPages = document.getElementById("form-pages");
    const formExplanation = document.getElementById("form-read").checked;
    
    const formTitleValue = formTitle.value;
    const formAuthorValue = formAuthor.value;
    const formPagesValue = formPages.value + " pages";

    if (formTitleValue!== "" && formAuthorValue !== "" && formPagesValue !== "" && formPages.checkValidity()){
        addBookToLibrary(formTitleValue, formAuthorValue, formPagesValue, formExplanation);
    }
    
    
})

const closeButton = document.getElementById("add-book-close-button");
closeButton.addEventListener("click", () => {
  dialog.close();
});

function validateForm(){
    const pageNumber = document.getElementById("form-pages");

const inputElements = document.querySelectorAll("input");



inputElements.forEach((ele) => {
    if (!ele.valid){
        ele.style.border = "10px solid #900";
    }

    ele.addEventListener("input", (event) => {
        if (ele.validity.valid && !ele.validity.valueMissing){
            ele.style.border = "none";
        }
        else{
            ele.style.border = "10px solid #900";
        }
        
    })
})

pageNumber.addEventListener("input", (event) => {
    const formPages = document.getElementById("form-pages");
    const pageNumberError = document.getElementById("form-pages-error");
    if (formPages.value < 1){
        const pageNumberError = document.getElementById("form-pages-error");
        pageNumberError.textContent = "Page number value needs to be greater than zero!";
        formPages.setCustomValidity("Must be greater than zero!");
    }
    else{
        formPages.setCustomValidity("");
    }



    if (pageNumber.validity.valid && pageNumber.value > 0){
        pageNumber.style.border = "none";
        pageNumberError.textContent = "";
        pageNumberError.style.padding = "0%";
    }
    else{
        pageNumber.style.border = "10px solid #900";
        pageNumberError.textContent = "Page number value needs to be greater than zero!";
        pageNumberError.style.backgroundColor = "#900";
        pageNumberError.style.padding = "5%";
        pageNumberError.style.borderRadius = "30px";
    }
})
}


addBookToLibrary("Eros the Bittersweet", "Anne Carson", "170 pages", true);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", "565 pages", false);
addBookToLibrary("Bluets", "Maggie Nelson", "112 pages", true);
addBookToLibrary("The Hour of the Star", "Clarice Lispector", "120 pages", true);
addBookToLibrary("Close to the Knives", "David Wojnarowicz", "288 pages", true);
addBookToLibrary("Just Kids", "Patti Smith", "278 pages", false);
addBookToLibrary("Giovanni's Room", "James Baldwin", "159 pages", false);
addBookToLibrary("Customs","Solmaz Sharif","72 pages", true)


validateForm();


