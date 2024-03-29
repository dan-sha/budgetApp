//Form for user to enter in new expense
import React from "react";
import Axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      description: "",
      amount: "",
      transactionType: "",
      category: "",
      accountName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitEntryClick = this.submitEntryClick.bind(this);
  }

  handleChange(event) {
    let placeholder = {};
    placeholder[event.target.name] = event.target.value;
    this.setState(placeholder);
  }

  submitEntryClick(e) {
    e.preventDefault();
    let newobj = {};
    newobj.Date = this.state.date;
    newobj.Description = this.state.description;
    newobj.Amount = this.state.amount;
    newobj["Transaction Type"] = this.state.transactionType;
    newobj.Category = this.state.category;
    newobj["Account Name"] = this.state.accountName;

    Axios.post("/budget/addEntry", newobj)
      .then(() => {
        let temp = {
          date: "",
          description: "",
          amount: "",
          transactionType: "",
          category: "",
          accountName: ""
        };
        this.setState(temp);
      })
      .then(() => {
        this.props.reRender();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div class="container1">
        <div class="formline">
          <form onSubmit={this.submitFormHandler}>
            <label>
              Date:
              <input
                name="date"
                type="text"
                placeholder="mm/dd/yyyy"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </label>
            <div class="formline">
              <label>
                Expense Description:
                <input
                  name="description"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div class="formline">
              <label>
                Enter Amount:
                <input
                  name="amount"
                  type="text"
                  value={this.state.amount}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div class="formline" onChange={this.handleChange}>
              <label>Transaction Type:</label>
              <input
                name="transactionType"
                type="text"
                placeholder="Debit or Credit"
                value={this.state.transactionType}
                onChange={this.handleChange}
              />
            </div>
            <div class="formline">
              <label>
                Category:
                <input
                  name="category"
                  type="text"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div class="formline">
              <label>
                Account Name:
                <input
                  name="accountName"
                  type="text"
                  value={this.state.accountName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </form>
          <button onClick={this.submitEntryClick}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default Form;
