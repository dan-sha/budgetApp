import React from "react";
import ReactDOM from "react-dom";
import "../dist/styles.css";
import Form from "./Form.jsx";
import List from "./List.jsx";
// import PieChart from "./PieChart.jsx";
const Axios = require("axios");
const d3 = require("d3");
const ReactD3 = require("react-d3-components");
import helpers from "../../server/Helpers/filter.js";
import format from "../../server/Helpers/format.js";
import { filter } from "minimatch";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: "",
      accounts: [],
      filtered: [],
      entries: [
        // {
        //   date: "",
        //   description: "",
        //   amount: "",
        //   transactionType: "",
        //   accountName: "",
        //   category: ""
        //   // setRadioButton: ""
        // }
      ]
    };

    //bind methods here:
    this.getEntries = this.getEntries.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.reRender = this.reRender.bind(this);
    this.filterCategories = this.filterCategories.bind(this);
    this.filterAccounts = this.filterAccounts.bind(this);
  }

  // methods below:
  componentDidMount() {
    this.getEntries((err, results) => {
      this.setState({
        entries: results,
        filtered: results
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
        entries: results,
        filtered: results
      });
    });
    this.getCategories();
  }

  filterCategories(selection) {
    let temp = helpers.filterEntries(this.state.entries, "Category", selection);
    this.setState({ filtered: temp });
  }

  filterAccounts(selection) {
    let temp = helpers.filterEntries(
      this.state.entries,
      "Account Name",
      selection
    );
    this.setState({ filtered: temp });
  }

  // var PieChart = ReactD3.PieChart;
  // var data = {
  //   label: 'somethingA',
  //   values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
  // };
  // var sort = null;

  render() {
    var PieChart = ReactD3.PieChart;
    var data = {
      label: "SomethingA",
      values: format.pieFormat(this.state.filtered)
    };
    var sort = d3.ascending;
    var tooltipPie = function(x, y) {
      let str = `${x.toString()}: $${y.toString()}`;
      return str;
    };
    // console.log(PieChart);
    let chart = null;
    if (this.state.entries.length === 0) {
      chart = (
        <div>
          <img src="goldencoin.png" height="25%" width="25%" />
        </div>
      );
    } else {
      chart = (
        <PieChart
          data={data}
          width={800}
          height={600}
          margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
          sort={sort}
          tooltipOffset={{ top: 530, left: 300 }}
          tooltipMode={"fixed"}
          tooltipHtml={tooltipPie}
        />
      );
    }

    return (
      <div>
        <header>
          <h1>Budget Tracker</h1>
          <h2>Balance: {format.findBalance(this.state.entries)}</h2>
        </header>

        <div class="chart">
          {chart}
          <div class="form">
            <Form
              entries={this.state.filtered}
              onSubmit={this.getEntries}
              reRender={this.reRender}
            />
          </div>
          <List
            entries={this.state.filtered}
            categories={this.state.categories}
            accounts={this.state.accounts}
            filterCategories={this.filterCategories}
            filterAccounts={this.filterAccounts}
          />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

// var PieChart = ReactD3.PieChart;

// var data = {
//         label: 'somethingA',
//         values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
// };

// var sort = null; // d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...

// ReactDOM.render(<PieChart
//                 data={data}
//                 width={600}
//                 height={400}
//                 margin={{top: 10, bottom: 10, left: 100, right: 100}}
//                 sort={sort}
//                 />,
//             document.getElementById('piechart')
// );
