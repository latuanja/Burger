const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3306;

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, () =>
console.log(`Server listening on: http://localhost:${PORT}`)
);

// module.exports = app;