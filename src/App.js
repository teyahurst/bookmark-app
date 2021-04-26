import React from 'react';
import AddBookmark from './components/AddBookmark';
import BookmarkApp from './components/bookmark-components/BookmarkApp';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      bookmarks: [],
      showAddForm: false
    };

  }

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';

    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer $2a$10$h.CQo6fnv730fFRJdlKhyOSM0nLSvC4MlJTgXtYQhNE75jjJpzQaq",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => {
        if(!response.ok){
          throw new Error('Something went wrong, try again later')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(error => {
        this.setStateJ({ 
          error: error.message
        })
      })

  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

render(){
  const page = this.state.showAddForm
              ? <AddBookmark />
              : <BookmarkApp bookmarks={this.state.bookmarks}/>
  

      return (
        <div className="App">
          { page }
        </div>
      )

  }
}

export default App;




