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

  submitEntryClick() {
    let newobj = {};
    newobj.Date = this.state.date;
    newobj.Description = this.state.description;
    newobj.Amount = this.state.amount;
    newobj["Transaction Type"] = this.state.transactionType;
    newobj.Category = this.state.category;
    newobj["Account Name"] = this.state.accountName;

    Axios.post("/budget/addEntry", newobj)
      .then(() => {
        this.setState({
          date: "",
          description: "",
          amount: "",
          transactionType: "",
          category: "",
          accountName: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
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
          <div>
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
          <div>
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
          <div onChange={this.handleChange}>
            <label>Transaction Type:</label>
            <input
              name="transactionType"
              type="text"
              value={this.state.transactionType}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>
              Category:
              <input
                name="category"
                type="text"
                value={this.state.category}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
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
        <button onClick={this.submitEntryClick} />
      </div>
    );
  }
}

export default Form;
