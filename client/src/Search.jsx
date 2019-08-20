import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  render() {
    //console.log here to check props before passing down
    return (
      <div className="search">
        <select onChange={this.props.selectCategory}>
          {this.props.categories &&
            this.props.categories.map(category => {
              return <option value={category.id}>{category.name}</option>;
            })}
        </select>
        <button onClick={this.props.submitClick}>Select</button>
      </div>
    );
  }
}

export default Search;
