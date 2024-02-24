let books = [];

const addbox = () => {
    let modal = document.getElementById('modal');
    let closeModal = document.querySelector('.closemodal');

    modal.showModal();
    
    closeModal.addEventListener('click',()=>{
        modal.close();
    })

}

const add = () =>{
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const read = document.getElementById('checker');

    
    let book = {
        title : title.value,
        author : author.value,
        read : 'NO',
    }

    if(read.checked)
    {
        book.read='YES';
    }

    books.push(book);
    displayBook(book);
}

const displayBook = (book) =>{
    let books = document.querySelector('.addedbooks');
    let dispBook = document.createElement('div');
    dispBook.classList.add('books')
    let titleElement = document.createElement('p');
    let authorElement = document.createElement('p');
    let readElement = document.createElement('button');
    let remove = document.createElement('button');
    if(book.read ==='YES')
    {
        readElement.style.backgroundColor ='#9fff9c';

    }
    else 
        readElement.style.backgroundColor ='#ff9c9c';

    titleElement.innerText = book.title;
    authorElement.innerText = book.author;
    readElement.innerText = book.read;
    remove.innerHTML = 'Remove';

    books.appendChild(dispBook);
    dispBook.appendChild(titleElement);
    dispBook.appendChild(authorElement);
    dispBook.appendChild(readElement);
    dispBook.appendChild(remove);
}

