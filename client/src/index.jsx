import React from "react";
import ReactDOM from "react-dom";
import "../dist/styles.css";
// import { runInThisContext } from "vm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      accounts: '',
      selectedCategory: ''

    };

    //bind methods here:
    this.selectCategory = this.selectCategory.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  //methods below:
  componentDidMount() {
    getCategories();
    this.setState({
      categories: 
    })
  }

  getCategories(callback) {
    Axios.get('/categories')
      .then(response => {
        console.log(response);
        callback(null, response.data.categories)
      })
      .catch((err) => {
        console.log(err);
      })

  }

  selectCategory(event) {
    this.setState({
      selectedCategory: event.target.value;
    })
  }


  submitClick(event) {
    this.setState({
      value: event.target.value;
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Hello Budget App</h1>
        </header>

        <div>
          <Search
            categories={this.props.categories}
            selectCategory={this.selectCategory}
            submitClick={this.submitClick}
          />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
