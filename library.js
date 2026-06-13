class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
  }

  borrow() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`${this.title} has been borrowed.`);
    } else {
      console.log(`${this.title} is already borrowed.`);
    }
  }

  returnBook() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} was not borrowed.`);
    }
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    console.log(`\nBooks in ${this.name}:`);

    this.books.forEach(book => {
      console.log(
        `${book.title} by ${book.author} - ${
          book.isBorrowed ? 'Borrowed' : 'Available'
        }`,
      );
    });
  }

  borrowBook(title) {
    const book = this.books.find(book => book.title === title);

    if (book) {
      book.borrow();
    } else {
      console.log('Book not found.');
    }
  }

  returnBook(title) {
    const book = this.books.find(book => book.title === title);

    if (book) {
      book.returnBook();
    } else {
      console.log('Book not found.');
    }
  }
}

// Create library
const cityLibrary = new Library('City Library');

// Create books
const book1 = new Book('Atomic Habits', 'James Clear');
const book2 = new Book('Clean Code', 'Robert Martin');
const book3 = new Book('The Pragmatic Programmer', 'Andrew Hunt');

// Add books
cityLibrary.addBook(book1);
cityLibrary.addBook(book2);
cityLibrary.addBook(book3);

// Display books
cityLibrary.listBooks();

// Borrow a book
cityLibrary.borrowBook('Clean Code');

// Display updated list
cityLibrary.listBooks();
