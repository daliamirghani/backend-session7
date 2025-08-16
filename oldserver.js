const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 

let books = [
  { id: 1, title: "Pride and Prejudice", author: { name: "Jane Austen", nationality: "British", birthYear: 1775 }, year: 1813 },
  { id: 2, title: "1984", author: { name: "George Orwell", nationality: "British", birthYear: 1903 }, year: 1949 },
  { id: 4, title: "The Great Gatsby", author: { name: "F. Scott Fitzgerald", nationality: "American", birthYear: 1896 }, year: 1925 }
];

// get all books
app.get("/books/all", (req, res) => {
  const { nationality } = req.query;
  let result = books;
  if (nationality) {
    result = books.filter(book => book.author.nationality.toLowerCase() === nationality.toLowerCase());
  }
  res.status(200).json(result);
});

//create book
app.post("/books", (req, res) => {
  const newBook = {id: books.length+1 , ...req.body};
  books.push(newBook);
  res.status(201).json({
    status: 201,
    data: newBook});
})

//update book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return res.status(404).send("Book not found");
  books[index] = { ...books[index], ...req.body };
  res.status(200).json(books[index]);
});

//delete
app.delete("/books/:id", (req, res) => {
const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
    res.status(200).json({
      msg: "Book deleted successfully",
      data :books
    });
});


app.listen(port, () => console.log(`Server running on port ${port}`));
