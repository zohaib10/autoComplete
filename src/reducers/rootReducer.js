const initialState = {
  cities: [
    'san jose',
    'santiago',
    'san francisco',
    'santa rosa',
    'san juan',
    'sabadell',
    'salamanca',
    'salt lake city',
    'salinas',
    'salem',
    'sausalito',
    'taipei',
    'tel aviv',
    'tempe',
    'termez',
    'temuco',
    'tiajuna',
    'tieling',
    'thousand oaks',
    'thunder bay',
    'tokyo',
    'tulsa'
  ],
  books: [
    {
      title: 'Don Quixote',
      author: 'Miguel De Cervantes'
    },
    {
      title: "Pilgrim's Progress",
      author: 'John Bunyan'
    },
    {
      title: 'Robinson Crusoe',
      author: 'Daniel Defoe'
    },
    {
      title: "Gulliver's Travels",
      author: 'Jonathan Swift'
    },
    {
      title: 'Tom Jones',
      author: 'Henry Fielding'
    },
    {
      title: 'Clarissa',
      author: 'Samuel Richardson'
    },
    {
      title: 'Tristram Shandy',
      author: 'Laurence Sterne'
    }
  ],
  cityQuery: [],
  bookQuery: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ADD_QUERY') {
    const found = state.cities.find(e => {
      return e === action.query.toLowerCase();
    });
    if (found !== undefined) {
      return {
        ...state,
        cityQuery: [...state.cityQuery, action.query]
      };
    } else {
      const book = state.books.find(item => {
        return item.title.toLowerCase() === action.query.toLowerCase();
      });
      if (book !== undefined) {
        return {
          ...state,
          bookQuery: [...state.bookQuery, book]
        };
      }
    }
  }
  return state;
};

export default rootReducer;
