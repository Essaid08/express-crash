const db = require("../db");
const CustomNotFoundEroor = require("../errors/CustomNotFoundError");
const asyncHandler = require("express-async-handler");

const getAuthorById = asyncHandler(async (req, res) => {
	const { authorId } = req.params;

	const author = await db.getAuthorById(Number(authorId));

	if (!author) {
		throw new CustomNotFoundEroor("Author not found");
	}

	res.send(`Author names is : ${author.name}`);
});

module.exports = { getAuthorById };
