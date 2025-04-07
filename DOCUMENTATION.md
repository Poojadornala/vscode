# Code Documentation

## Files Overview

### index.html
Defines the structure of the Expense Tracker UI including:
- Header
- Summary display
- Input form
- Filter field
- Transaction list

### style.css
Contains styling for the entire application:
- Responsive layout
- Clean, mobile-friendly design
- Color coding for readability

### script.js
Handles all functionality:
- Form submission and input validation
- Transaction rendering and deletion
- Summary calculation
- Local storage persistence
- Filtering by category

## Key Functionalities

- **renderTransactions()**: Renders the transaction list and summary.
- **deleteTransaction(index)**: Deletes a transaction and updates localStorage.
- **updateStorage()**: Saves data to localStorage.
- **Event Listeners**:
  - Form submission: Adds new transactions.
  - Filter input: Filters transactions by category.

## Storage

- Transactions are saved in `localStorage` under the key `transactions`.

---

This documentation is meant to help understand the structure and logic of the codebase.
