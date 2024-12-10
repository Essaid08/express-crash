const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", function (req, res) {
	res.send("All books are here.");
});

bookRouter.get("/:bookId", (req, res) => {
	const { bookId } = req.params;
    res.send(`this book have an ID of : ${bookId}`)
});

bookRouter.post("/:bookId" , (req , res) => {
	const {newBookId} = req.params
	res.send("new book ID is : " + newBookId)
})

module.exports = bookRouter