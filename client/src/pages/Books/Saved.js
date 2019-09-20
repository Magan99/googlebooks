import React, { Component } from 'react'
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Header} from "../../components/Header";

export default class Saved extends Component {

  state = {
    books: [],
  };


  componentDidMount() {
  this.loadBooks();
}

loadBooks = () => {
  API.getBooks()
    .then(res =>
      this.setState({ books: res.data })
    )
    .catch(err => console.log(err));
}

  render() {

    const books = this.state
    console.log(books)
    return (
      <div className="container">
        {this.state.books.length > 0 ? (
              <ul>
                {this.state.books.map(book => (
                  <li key={book._id}>
                    {book.image && <img src={book.image}/>}
                      <p>{book.title}</p>
                      <p>{book.description}</p>
                      <p>{book.link}</p>
                      
                  
                  
                      
                
                  </li>
                  
                ))}
              </ul>
              
            ):
            (
              

              <h3>No Results to Display</h3>
            )}
        
      </div>
    )
  }
}


