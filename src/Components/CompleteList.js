import React from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';

const CompleteList = props => {
  let posts = '';
  posts = props.list ? (
    props.list.length ? (
      <List>
        {props.list.map(item => (
          <ListItem key={item} button>
            <ListItemText
              primary={item}
              onClick={() => props.handleSelect(item)}
            />
          </ListItem>
        ))}
      </List>
    ) : (
      <ListItem>
        <ListItemText primary="No Match Found" />
      </ListItem>
    )
  ) : null;
  return <div>{posts}</div>;
};

export default CompleteList;
