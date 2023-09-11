/* 
    Product Inventory Management

    Given an array of product objects, where each object contains the following properties: name, category, price, and quantity. Write a function called getTotalInventoryValue that takes the array of product objects as input and returns the total value of the entire inventory.

*/

const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5 },
    { name: 'Shirt', category: 'Clothing', price: 20, quantity: 10 },
    { name: 'Book', category: 'Books', price: 15, quantity: 25 },
    { name: 'Headphones', category: 'Electronics', price: 50, quantity: 8 }
  ];

function getTotalInventoryValue(products) {
    let totalValue = 0;

    for (const product of products) {
        const productValue = product.price * product.quantity;
        totalValue += productValue;
    }
    return totalValue;
}

/*  
    User Validation

    Given an array of user objects, where each object contains the following properties: username and password. Write a function called isUserValid that takes the array of user objects and a username/password combination as input and returns true if the combination is valid, and false otherwise. 
  
  */

    const users = [
        { username: 'alice', password: 'pass123' },
        { username: 'bob', password: 'pass456' },
        { username: 'charlie', password: 'pass789' }
      ];

    function isUserValid(users, username, password) {
        for (const user of users) {
            if (user.username === username && user.password === password) {
                return true;
            }
        }
        return false;
    }
  
/* 
    Employee Salary Calculation

    Given an array of employee objects, where each object contains the following properties: name, position, hoursWorked, and hourlyRate. Write a function called calculateSalary that takes the array of employee objects as input and returns an array of employee objects with an additional property totalSalary, which represents the total salary earned by each employee (hoursWorked * hourlyRate). 
  
*/

const employees = [
    { name: 'Alice', position: 'Manager', hoursWorked: 40, hourlyRate: 30 },
    { name: 'Bob', position: 'Developer', hoursWorked: 35, hourlyRate: 25 },
    { name: 'Charlie', position: 'Intern', hoursWorked: 20, hourlyRate: 15 }
];

function calculateSalary(employees) {
    for (const employee of employees) {
        const totalSalary = employee.hoursWorked * employee.hourlyRate;

        employee.totalSalary = totalSalary;
    }
    return employees;
}

/*
  Library Book Checkout System

  You are building a library book checkout system. You are given two arrays: books and borrowers. Each book is represented by an object with properties title and author. Each borrower is represented by an object with properties name and books (an array of books borrowed by the borrower). Write a function called getAvailableBooks that takes the books and borrowers arrays as input and returns an array of available books that are not borrowed by any borrower.

*/

  const books = [
    { title: 'Book 1', author: 'Author 1'},
    { title: 'Book 2', author: 'Author 2'},
    { title: 'Book 3', author: 'Author 3'},
    { title: 'Book 4', author: 'Author 4'},
    { title: 'Book 5', author: 'Author 4'}
  ];

  const borrowers = [
    { name: 'Borrower 1', books: ['Book 4'] },
    { name: 'Borrower 2', books: ['Book 5'] }
  ];

function getAvailableBooks(books, borrowers) {
    const availableBooks = [];

    const borrowedTitles = new Set();

    for (const borrower of borrowers) {
        for (const bookTitle of borrower.books) {
            borrowedTitles.add(bookTitle);
        }
    }

    for (const book of books) {
        if (!borrowedTitles.has(book.title)) {
            availableBooks.push(book);
        }
    }
    return availableBooks;
}

/* 
    Data Analysis - Sales Report

    You are given an array of sales objects, where each object contains the following properties: date, product, and quantity. Write a function called getTotalSalesByDate that takes the array of sales objects and a date as input and returns the total quantity of products sold on that date. 

*/

const sales = [
  { date: '2023-01-01', product: 'Product A', quantity: 10 },
  { date: '2023-01-01', product: 'Product B', quantity: 5 },
  { date: '2023-01-02', product: 'Product A', quantity: 8 },
  { date: '2023-01-02', product: 'Product C', quantity: 3 }
];

function getTotalSalesByDate(sales, date) {
    let totalQuantity = 0;

    for (const sale of sales) {
        if (sale.date === date) {
            totalQuantity += sale.quantity;
        }
    }
    return totalQuantity;
}

module.exports = {
    getTotalSalesByDate
};


module.exports = {
    getTotalInventoryValue,
    isUserValid,
    calculateSalary,
    getAvailableBooks,
    getTotalSalesByDate
};