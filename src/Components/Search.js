import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Paper, IconButton, InputBase, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import CompleteList from './CompleteList';

const styles = {
  root: {
    flexGrow: 1
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    marginLeft: '7%'
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  grid: {
    marginTop: '15%'
  }
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    const len = e.target.value.length;
    if (len >= 3) {
      const match0 = this.props.cities.filter(city =>
        city.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      const match1 = this.props.books
        .map(item => {
          return item.title;
        })
        .filter(name =>
          name.toLowerCase().startsWith(e.target.value.toLowerCase())
        );
      const match = [...match0, ...match1];
      this.setState({ match, value: e.target.value });
    } else {
      this.setState({ match: undefined, value: e.target.value });
    }
  };

  handleSubmit = e => {
    this.props.addQuery(this.state.value);
  };

  handleSelect = item => {
    this.setState({ value: item }, () => this.props.addQuery(this.state.value));
  };

  render() {
    const post = this.state ? <div>Post</div> : <div>No Post</div>;
    console.log(this.props);
    return (
      <div style={styles.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={styles.grid}
        >
          <Paper style={styles.root} elevation={8}>
            <InputBase
              autoFocus
              name="item"
              style={styles.input}
              placeholder="Search"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <IconButton
              onClick={this.handleSubmit}
              style={styles.iconButton}
              aria-label="Search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>

          <Paper style={styles.root} elevation={1}>
            <CompleteList
              list={this.state.match}
              handleSelect={this.handleSelect}
            />
          </Paper>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    books: state.books,
    bookQuery: state.bookQuery,
    cityQuery: state.cityQuery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addQuery: query => {
      dispatch({ type: 'ADD_QUERY', query });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
