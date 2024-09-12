const myLibrary = [];
const dialog = document.querySelector("dialog");
const add = document.querySelector(".adding");
const create = document.querySelector("dialog .create");
const cancel = document.querySelector("dialog .cancel");

class Book { 
    constructor(title, pages, author, read, price) {
        this.author = author;
        this.pages = pages;
        this.title = title;
        this.read = read;
        this.price = price;
    }
}

const book1 = new Book("Republic", 484, "Plato", "Yes", "458");
AddtoLibrary(book1);
const book2 = new Book("Nicomachean Ethics", 528, "Aristotle", "Yes", 234)
AddtoLibrary(book2);
const book3 = new Book("Theaetetus",423 ,"Plato","Yes", 183)
AddtoLibrary(book3);
showBooks();

function AddtoLibrary(book){
    if(!myLibrary.some(existingBook => existingBook.title === book.title && existingBook.author === book.author)){
    myLibrary.push(book);
    }
}

function showBooks(){
    const container = document.querySelector(".Shelf");
    container.textContent = "";
    myLibrary.forEach((element, index) => {
        const book = document.createElement("div");
        
        const name = document.createElement("div");
        name.textContent = "Name of the Book : " + element.title;
        name.classList.add("property");
        book.appendChild(name);

        const pages = document.createElement("div");
        pages.textContent = "Number of pages : " +  element.pages;
        pages.classList.add("property");
        book.appendChild(pages);

        const author = document.createElement("div");
        author.textContent = "Name of author : " +  element.author;
        author.classList.add("property");
        book.appendChild(author);

        const price = document.createElement("div");
        price.textContent = "Price of The Book : " +  "₹" + element.price;
        price.classList.add("property");
        book.appendChild(price);

        const read = document.createElement("div");

        const readDiv = document.createElement("div");
        readDiv.textContent = "Have you read it?";
        readDiv.classList.add("reads");
        read.appendChild(readDiv);

        const readbtn = document.createElement("button");
        readbtn.textContent = (element.read ? "Yes" : "No");
        readbtn.style.backgroundColor = (element.read ? "green" : "red");
        readbtn.style.borderStyle = "solid";
        readbtn.style.borderWidth = "2px";
        readbtn.style.borderColor = (element.read ? "green" : "red");
        readbtn.style.width = "4rem";
        readbtn.style.marginLeft = "1rem";
        readbtn.style.height = "2rem";
        readbtn.style.color = "white";
        readbtn.classList.add("reads", "readbuttons");
        read.appendChild(readbtn);

        readbtn.addEventListener("click", () => {
            if(readbtn.textContent === "Yes"){
                readbtn.textContent = "No";
                readbtn.style.backgroundColor = "red";
                readbtn.style.borderColor = "red";
            }
            else{
                readbtn.textContent = "Yes";
                readbtn.style.backgroundColor = "green";
                readbtn.style.borderColor = "green";
            }
        })
        read.style = "display:flex; flex-direction:row"
        read.classList.add("property");
        book.appendChild(read);

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.classList.add("property", "buttons");
        

        deletebtn.dataset.bookIndex = index;

        deletebtn.addEventListener("click", (e) => {
            const index = Number(e.target.dataset.bookIndex);
            if (index >= 0 && index < myLibrary.length) {
                myLibrary.splice(index, 1);
                showBooks(); 
            }
        });

        deletebtn.style = "padding:1rem 3rem; background-color:#5A86AD; border-style:solid; border-width: 0.2rem; border-color:#5A86AD"

        book.append(deletebtn);

        book.style = "padding : 2rem; border-style:solid; border-width: 0.2rem; display:grid; grid-template-columns:repeat(1, 1fr); gap:2rem; background-color:#FF7F50; border-color :  #98FB98"
        book.classList.add("book");
        container.appendChild(book);
    });
}

add.addEventListener("click", () => {
    dialog.showModal();
});

create.addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const pages = document.querySelector("#pages").value;
    const author = document.querySelector("#author").value;
    const price = document.querySelector("#price").value;
    const read = document.querySelector("#read").checked;

    if (name && pages && author && price) { 
        const book = new Book(name, pages, author, read, price);
        AddtoLibrary(book);

        const form = document.querySelector("form");
        form.reset();

        dialog.close();
        showBooks();
    } else {
        alert("Please fill out all fields.");
    }
});


cancel.addEventListener("click", () => {
    dialog.close();
})