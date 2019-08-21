//list to show all entries
import React from 'react';

const List = (props) => {
  console.log('here!!')
  console.log(props.entries);
  return (
    <div>
      <h3>Recent Transactions:</h3>
      <ol>
        {props.entries.map(entry => {
          return <li>Date: {entry.Bdate}
          <div>Description: {entry.Bdesc}</div>
          <div>Amount: {entry.Bamount}</div>
          <div>Type: {entry.Btransaction}</div></li>
        })}
      </ol>
    </div>
  )
}

export default List;