import React, { Component } from 'react';

import { Paper, List, ListItem, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';

const styles = {
  paper: {
    marginTop: 20
  }
};

class Results extends Component {
  handleResults = () => {
    if (this.props.bookQuery.length || this.props.cityQuery.length) {
      return (
        <List component="nav">
          {this.props.cityQuery.map(item => {
            const name = 'City Name: ' + item;
            return (
              <ListItem>
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
          {this.props.bookQuery.map(item => {
            const title = 'Title: ' + item.title;
            const author = 'Author: ' + item.author;
            return (
              <ListItem>
                <ListItemText primary={title} />
                <ListItemText primary={author} />
              </ListItem>
            );
          })}
        </List>
      );
    } else {
      return (
        <List component="nav">
          <ListItem>
            <ListItemText primary="No Searches Yet" />
          </ListItem>
        </List>
      );
    }
  };

  render() {
    console.log(this.props);
    return <Paper style={styles.paper}>{this.handleResults()}</Paper>;
  }
}

const mapStateToProps = state => {
  return {
    bookQuery: state.bookQuery,
    cityQuery: state.cityQuery
  };
};

export default connect(mapStateToProps)(Results);
