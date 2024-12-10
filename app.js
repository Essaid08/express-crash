const express = require("express");
const path = require("node:path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

const links = [
	{ href: "/", text: "Home" },
	{ href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];
const tags = ["About", "Contact", "Github"];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index", { links: links, users: users , tags : tags});
});

app.get("/about", function (req, res) {
	res.render("about", { message: "About Page." });
});

app.use("/authors", authorRouter);
app.use("/", indexRouter);
app.use("/books", bookRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
	console.log(`Express app is running on port : ${PORT}`);
});
