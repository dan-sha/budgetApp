import React from "react";
import ReactDOM from "react-dom";
import "../dist/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   user: username,
    //   categories: [];
    // };

    //bind methods here:
  }

  //methods below:
  componentDidMount() {}

  selectCategory() {}

  submitClick() {}

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
