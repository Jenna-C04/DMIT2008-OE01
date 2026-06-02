// Importing data from the file (in lieu of a database or API)
import expenses from "./expense-data.js";

// Grab relevant DOM elements
const expenseContainer = document.getElementById('expense-container');
const searchBox = document.getElementById('searchbox');
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

expenseForm.addEventListener("change", function (event) {console.log(event.target.value); });

// Lets write all our code as inline first, then clean it up later
expenseForm.addEventListener(
    "submit", // argument 1: the name/type of the enven (e.g submit, change, click -> these are HTML built-ins)
    function(event) {   //argument 2: the logic/function that should fire (with the event being passed to it by default)
        
        event.preventDefault(); // event build-in; preventing default behavior on form basically means "Dont post data and dont reload"
        
        // lets grab all our input elements/values
        const title = document.getElementById('title').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;
        
        //make a new expens if all the feilds are present & amount is a number        
        if (title && date && category && !isNaN(amount)){
            const newExpense = {
                // if object property name & variable are the same, you can just {value} instead
                id: expenses.length + 1,
                title,
                amount,
                date,
                category,
            };
               
            expenses.push(newExpense);
            renderExpenses(expenses);
        }

        expenseForm.reset();
    });

// let handle search filtration!
//  + the search box element as an object (already done!)
//  + attach an event listenter to change / input
//  + somehow filter the cards (i.e the expense array) based on the text in the text box

searchBox.addEventListener(
    "input",
    function(event) {
        const searchTerm = event.target.value;
        const filteredExpenses = expenses.filter(
            (expense) => expense.title.toLocaleLowerCase().includes(searchTerm)
        )
        renderExpenses(filteredExpenses);
    }
);

// Lets handle edititng / deleting
expenseContainer.addEventListener(
    "click", 
    function(event) { 
        // event.target will be exactly what got clicked within the container
        // always the container itself
        if(event.target.classList.contains("delete-btn")){
            // get id of the expense card
            const expenseId = parseInt(event.target.id);
            // then find where the object is in the array
            const expensIndex = expenses.findIndex(
                (expense) => expense.id === expenseId
            );
            // Now we have the index! we can delete whats at that index in the array
            if (expensIndex !== -1) {             // findIndex returned -1 if it cant find a matching item
                expenses.splice(expensIndex, 1); // "starting at {expense index}, delete that thing"
                renderExpenses(expenses)
            }
        } else if (event.target.classList.contains("edit-btn")){
            // populate the form inputs w/ data from the element/card
            //somehow figure out a way to save back to that element
            // 1 + 2 get id of card
            const expenseId = parseInt(event.target.id);
            const expenseToEdit = expenses.find(    // Find the actual object
                (expense) => expense.id === expenseId // We still want a matching id
            );

            if (expenseToEdit) {
                document.getElementById('title').value = expenseToEdit.title;
                document.getElementById('amountdate').value = expenseToEdit.amountdate;
                document.getElementById('date').value = expenseToEdit.date;
                document.getElementById('category').value = expenseToEdit.category;
                document.getElementById('id').value = expenseToEdit.id;

                // bonus QOL : change button text depending on what we're doing
                document.getElementById('submitter').innerText = "Save";
            }
        }
    }
);