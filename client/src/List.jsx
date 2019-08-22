//list to show all entries
import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeAccounts = this.onChangeAccounts.bind(this);
  }

  onChange(event) {
    this.setState({
      selected: event.target.value
    });
    console.log(event.target.value);
    this.props.filterCategories(event.target.value);
  }

  onChangeAccounts(event) {
    console.log(event.target.value);
    this.props.filterAccounts(event.target.value);
  }

  render() {
    return (
      <div class="list">
        <h3 class="transaction">Recent Transactions:</h3>
        <label class="labelname">
          Categories:
          <select
            class="dropdown"
            onChange={this.onChange}
            value={this.state.selected}
          >
            {this.props.categories.map((category, index) => {
              return (
                <option value={category.Bcat} key={index}>
                  {category.Bcat}
                </option>
              );
            })}
          </select>
        </label>
        <label class="labelname">
          Accounts:
          <select class="dropdown" onChange={this.onChangeAccounts}>
            {this.props.accounts.map(account => {
              return (
                <option value={account.Baccount}>{account.Baccount}</option>
              );
            })}
          </select>
        </label>
        <ol class="listbody">
          {this.props.entries.map(entry => {
            return (
              <li id="entrylist">
                <div>Date: {entry.Date} </div>
                <div>Description: {entry.Description}</div>
                <div>Amount: {entry.Amount}</div>
                <div>Type: {entry["Transaction Type"]}</div>
                <div>Category: {entry.Category}</div>
                <div>Account Name: {entry["Account Name"]}</div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default List;
