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


  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", description: "", image: "",link: "",})
  //     )
  //     .catch(err => console.log(err));
  // };

  // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
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

  render() {

    const {books} = this.state
    console.log('books', books)

    return (
      <div className="container">

            <Jumbotron> 
              <h1>Search Books</h1>
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
 
            {books.length ? (
              <ul>
                {books.map(book => (
                  <li key={book.id}>
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                        {book.volumeInfo.description}
                      </strong>
                      <a href={book.volumeInfo.infoLink}>
                        <button>View</button>
                      </a>
                      

                      
                    <button onClick={() => this.deleteBook(book.id)} />
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}

      </div>
    );
  }
}

export default Books;
