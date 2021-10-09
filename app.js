const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
// const routes = require('./routes/api/members');



app.use(express.static(path.join(__dirname, '/views')));



app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => res.render('index', {}));

app.get('/login', (req, res) => res.render('login', {}));

app.get('/blog', (req, res) => res.render('blog', {}));

app.get('/search', (req, res) => res.render('search', {}));

// app.use('/api/members', require('./routes/api/members'));


//setting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`server started o port ${PORT}`) })