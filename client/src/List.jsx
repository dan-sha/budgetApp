//list to show all entries
import React from "react";

const List = props => {
  return (
    <div>
      <h3>Recent Transactions:</h3>
      <ol>
        {props.entries.map(entry => {
          return (
            <li>
              Date: {entry.Date}
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
};

export default List;
