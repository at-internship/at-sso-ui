const express = require('express');
const path = require("path");
const exphbs = require("express-handlebars");

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        extname:".hbs",
    })
);

app.set("view engine", ".hbs");

app.engine('.hbs', exphbs({
    defaultLayout:"main",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({ extended: false })); 

//Global variables

//Routes
app.use(require("./routes/users.routes"));


//Static files
//app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
