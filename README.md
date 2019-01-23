To Run:
    1. Clone or Download Repository
    2. Go to the directory using terminal
    3. Type "npm install"
          a. This will install all the dependencies
    4. Type "npm start"
          a. This will start the development server


Dependencies Used:
    1. React
    2. Redux
    3. Material-ui (core & icons)
    4. React-Router


  The Design:
    1. I use the boilerplate provided by create-react-app and removed their CSS files
    2. Added my components to the Components folder
        a. Search
            - This is the main component which contains the search box and uses mapStateToProps and mapDispatchToProps to communicate with the Redux store
            - This is a class based component which filters the results based on the first three letters in search box and passes those props to the functional component CompleteList.js for them to be displayed
            - I am also passing a function handleSelect as props to CompleteList.js for it to modify the state based on the option that the user selects
        b. CompleteList
            - This functional component takes care of outputting the matching results of the first three letters in the form of a list.
            - Once a user clicks on one of those choices we call the handleSelect function with the value of the item that is clicked. The function sets the state in the Search.js component and dispatch the ADD_QUERY action
        c. Navbar
            - This is also a functional component which basically uses Link from 'react-router-dom' to connect the user to the Results page and the main Search page
        d. Results
            - This is also a class based component which maps the results of the searched queries and displays them in the form of a list.
    3. App.js - Component
          - This is where the BrowserRouter is setup from 'react-router-dom' which links us to the two different routes to render the components
    4. index.js
          - I setup the Redux store here using the createStore function from 'redux'
    5. reducers
          - The reducers folder only contains one file which is the rootReducer.js. My initialState is setup here and I decided to add the dataset provided in here in books and cities. I also have two empty arrays here which are later updated with the results of our queries.  
          - I only have one action "ADD_QUERY" and before updating any of my two result arrays I check to see which array the payload(query) from the action needs to be added to. I search for a match within the two arrays and upon finding a match it adds it to the correct result array.


    Things I could have done better:
      1. The paper element surrounding the CompleteList.js form needs to be styled so it does not show all the time.
      2. When the auto complete shows matching result the hover does not highlight the entire width of the paper.
      3. I know that this code can be condensed to fewer lines.

      Questions I had:
          1. I was confused regarding if we were to limit the number of times the user can query?
              - Could be done by keeping tack of what has been searched - for example if we have a city stored in our cityQuery (result) array (if cityQuery.length ==  1) we would only map the books to props and vice-versa
              
