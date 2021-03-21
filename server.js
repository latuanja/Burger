const express = require('express');
const PORT = process.env.PORT || 3306;
const app = express();
app.use(express.status('/public'));

app.use(bodyParser.urlendcoded({
    extended: true
}))

app.use(express.json());
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

const routes = require("./controllers/burgers_controller.js")
app.use(routes);

app.listen(PORT, () =>
console.log('Server listiening on: http://localhost:${PORT}')
);