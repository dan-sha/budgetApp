//Form for user to enter in new expense
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      description: "",
      amount: "",
      transactionType: ""
    };
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Date
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              value=""
            />
          </label>
          <div>
          <label>
            Expense Description:
            <input type="text" value=""/>
          </label>
          </div>
          <div>
          <label>
            Enter Amount:
            <input type="text" value="" onChange={this.handleChange}/>
          </label>
          </div>
          <div onChange={this.handleChange}>
            <label>Transaction Type:</label>
            <label class="container">
              Debit
              <input
                type="radio"
                checked="checked"
                name="radio"
                value="debit"
              />
              <span class="checkmark" />
            </label>
            <label class="container">
              Credit
              <input type="radio" name="radio" value="credit" />
              <span class="checkmark" />
            </label>
          </div>
        </form>
        <button onClick={this.submitClick}></button>
      </div>
    );
  }
}

export default Form;
