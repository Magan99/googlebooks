import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Search from "./Search";
import Saved from "./Saved";
import './../../components/Header/Header.css'

import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Header} from "../../components/Header";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title:"",
  
  };


  
  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook meToDataBasethod to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      // console.log(this.state.title);
      API.getBooksFromGoogle(this.state.title)
        .then(res => this.setState({books: res.data.items}))
        .catch(err => console.log(err));
    }
  };

  saveBookToDataBase = (book) => {
    console.log('iddd', book)
    API.saveBook({
      title: book.volumeInfo.title,
      author: book.volumeInfo.author,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink

    })
        .then(res => console.log('got it'))
        .catch(err => console.log(err));



  }

  render() {

    const {books} = this.state
    console.log('books', books)

    // if (!this.state.books) {
    //   return <span>Loading...</span>
    // }

    return (
      <div className="container">

            <Jumbotron > 
              <h2>Search Books</h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
 
            {this.state.books.length > 0 ? (
              <ul>
                {this.state.books.map(book => (
                  <li key={book.id}>
                      <img src={book.volumeInfo.imageLinks === undefined ? 'http://placehold.it/200x200' : book.volumeInfo.imageLinks.thumbnail} />
                        {book.volumeInfo.title} by {book.volumeInfo.authors === undefined ? 'John Doe' : book.volumeInfo.authors[0]}
                        {book.volumeInfo.description}
                      <a href={book.volumeInfo.infoLink}>
                        <button>View</button>
                      </a>
                      
                      

                      
                    <button  onClick={() => this.saveBookToDataBase(book)}>Save</button>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </li>
                ))}
              </ul>
            ):
            (

              <h3>No Results to Display</h3>
            )}

      </div>
    );
  }
}

export default Books;
