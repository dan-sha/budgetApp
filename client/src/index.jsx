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
    //this.selectCategory = this.selectCategory.bind(this);
    this.submitClick = this.submitClick.bind(this);
    //this.setRadioButton = this.setRadioButton.bind(this);
  }

  // methods below:
  componentDidMount() {
    this.getEntries((err, results)=>{
      this.setState({
        entries: results
      })
    });
  }

  getEntries(callback) {
    Axios.get("/budget/all")
      .then(response => {
        console.log(response);
        callback(null, response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // selectCategory(event) {
  //   this.setState({
  //     selectedCategory: event.target.value
  //   });
  // }

  submitClick(event) {
    console.log(event.target);
    // this.setState({
    //   value: event.target.value
    // });
  }

  // setRadioButton(event) {
  //   this.setState({
  //     value: event.target.value
  //   });
  // }

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
          <Form onSubmit={this.getEntries} submitClick={this.submitClick} />
          <List entries={this.state.entries}/>

        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
