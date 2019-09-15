import axios from "axios";

export default {
  // Gets all books
  getBooksFromGoogle: function(title) {
    // const authKey = "AIzaSyBdqkzDncgM4TgAkAjjzs5e2BZBO1RjMQY";
        // const queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + authKey + "&q="
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/googlebooks/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
