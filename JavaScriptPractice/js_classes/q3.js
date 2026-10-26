"use strict";

class Book {
    // Initialize book properties
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    // Issue the book if it is available
    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`"${this.title}" has been issued successfully.`);
        }
    }

    // Return the book if it was issued
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" is already available.`);
        } else {
            this.isIssued = false;
            console.log(`"${this.title}" has been returned successfully.`);
        }
    }

    // Display book details
    displayDetails() {
        return `Title: ${this.title} | Author: ${this.author} | ISBN: ${this.isbn}`;
    }
}

// Create an array of book objects
const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Atomic Habits", "James Clear", "ISBN002"),
    new Book("Clean Code", "Robert C. Martin", "ISBN003", true),
    new Book("The Hobbit", "J.R.R. Tolkien", "ISBN004")
];

// Display all available books
console.log("Available Books:");

const availableBooks = books.filter(book => !book.isIssued);

availableBooks.forEach(book => {
    console.log(book.displayDetails());
});

// Search for a book using ISBN
const searchISBN = "ISBN002";

const bookToIssue = books.find(book => book.isbn === searchISBN);

if (bookToIssue) {
    bookToIssue.issueBook();
} else {
    console.log("Book with the given ISBN was not found.");
}

// Display available books after issuing
console.log("\nAvailable Books After Issuing:");

books
    .filter(book => !book.isIssued)
    .forEach(book => {
        console.log(book.displayDetails());
    });