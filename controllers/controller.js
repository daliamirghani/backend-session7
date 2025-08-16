
let books = [
  { id: 1, title: "Pride and Prejudice", author: { name: "Jane Austen", nationality: "British", birthYear: 1775 }, year: 1813 },
  { id: 2, title: "1984", author: { name: "George Orwell", nationality: "British", birthYear: 1903 }, year: 1949 },
  { id: 4, title: "The Great Gatsby", author: { name: "F. Scott Fitzgerald", nationality: "American", birthYear: 1896 }, year: 1925 }
];

const getBooks= (req, res) => {
  const { nationality } = req.query;
  const result = books;
  if (nationality) {
    result = books.filter(book => book.author.nationality.toLowerCase() === nationality.toLowerCase());
  }
  res.status(200).json(result);
}

const addBook= (req, res) => {

  const newBook = {id: books.length+1 , ...req.body};
  books.push(newBook);
  res.status(201).json({
    status: 201,
    data: newBook});
}
const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return res.status(404).send("Book not found");
  books[index] = { ...books[index], ...req.body };
  res.status(200).json(books[index]);
}

const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
    res.status(200).json({
      msg: "Book deleted successfully",
      data :books
    });
}

const testfunc1 = (req, res) => {console.log("hello world 1")};

const testfunc2 = (req, res) => {
  const { name }= req.params;
  console.log(`hello world ${name} from ${process.env.variable} `)};

module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    testfunc1,
    testfunc2
}
