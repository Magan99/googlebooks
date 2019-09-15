const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
const booksController = require('./controllers/booksController');
const router = new express.Router();
// Get saved articles from db
router.get('/api/books', booksController.find);
// Save articles to db
router.post('/api/books', booksController.insert);
// Delete articles to db
router.delete('/api/books', booksController.remove);

// Catch all, send other requests to react app 
router.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

  app.get('/', function(req,res){
      res.send('Hello world')
      // console.log('Hello world');
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
