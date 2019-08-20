//Form for user to enter in new expense
import React from ('react');

const ExpenseForm = props => (
  <div>
    <form>
      <label>Date</label>
      <label>
        Expense Description:
        <input type="text" onChange={event => this.handleChange(event)} />
      </label>
      <label>
        Enter Amount:
        <input type="text" onChange={event => this.handleChange(event)} />
      </label>
      <label>Transaction Type:</label>
      <label class='container'>Debit
        <input type="checkbox" checked="checked"></input>
        <span class="checkmark"></span>
      </label>
      <label class='container'>Credit
        <input type="checkbox"></input>
        <span class="checkmark"></span>
      </label>
    </form>
  </div>
);

export defaults Form;