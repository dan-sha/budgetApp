import React from "react";
import ReactDOM from "react-dom";
import "../dist/styles.css";
import Form from "./Form.jsx";
import List from "./List.jsx";
const Axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: "",
      accounts: [],
      entries: [
        {
          date: "",
          description: "",
          amount: "",
          transactionType: "",
          accountName: "",
          category: ""
          // setRadioButton: ""
        }
      ]
    };

    //bind methods here:
    this.getEntries = this.getEntries.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.reRender = this.reRender.bind(this);
  }

  // methods below:
  componentDidMount() {
    this.getEntries((err, results) => {
      this.setState({
        entries: results
      });
    });
    this.getCategories();
    this.getAccounts();
  }

  getEntries(callback) {
    Axios.get("/budget/all")
      .then(response => {
        callback(null, response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getCategories() {
    Axios.get("/budget/allCategories").then(data => {
      let tempObj = { categories: data.data };
      this.setState(tempObj);
    });
  }

  getAccounts() {
    Axios.get("/budget/allAccounts").then(data => {
      console.log(data);
      let tempObj2 = { accounts: data.data };
      this.setState(tempObj2);
    });
  }

  reRender() {
    this.getEntries((err, results) => {
      this.setState({
        entries: results
      });
    });
    this.getCategories();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Hello Budget App</h1>
        </header>

        <div>
          {/* <Search
              categories={this.props.categories}
              selectCategory={this.selectCategory}
              submitClick={this.submitClick}
            /> */}
          <Form onSubmit={this.getEntries} reRender={this.reRender} />
          <List
            entries={this.state.entries}
            categories={this.state.categories}
            accounts={this.state.accounts}
          />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
