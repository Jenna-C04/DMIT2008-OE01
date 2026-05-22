// Importing data from the file (in lieu of a database or API)
import expenses from "./expense-data.js";

// Grab relevant DOM elements
const expenseContainer = document.getElementById('expense-container');
const searchTerm = document.getElementById('searchbox');
const expenseForm = document.getElementById('expense-form-add');

// Render data
function renderExpenses(expenseData) {
    // First, Clear out existing HTML for the container, cause were about to re-render it
    expenseContainer.innerHTML = "";

    // then, take our array of data, then render a card for each
    expenseData.forEach(
        (expense) => {
            expenseContainer.innerHTML += 
            `
            <div class="card" id="${expense.id}">
                <div class="header">
                    <div>
                        <div class="title">${expense.title}</div>
                        <div class="meta category">${expense.category}</div>
                    </div>
                    <div class="amount">${expense.amount}</div>
                </div>
                <div class="meta date">${expense.date}</div>
                <div class="actions">
                    <button class="edit-btn" id="${expense.id}">Edit</button>
                    <button class="delete-btn" id="${expense.id}">Delete</button>
                </div>
            </div>
            `
        }
    ); 
}

// Call function to render
renderExpenses(expenses);

// Lets write all our code as inline first, then clean it up later
expenseForm.addEventListener(
    "submit", // argument 1: the name/type of the enven (e.g submit, change, click -> these are HTML built-ins)
    function(event) {   //argument 2: the logic/function that should fire (with the event being passed to it by default)
        event.preventDefault(); // event build-in; preventing default behavior on form basically means "Dont post data and dont reload"

    });