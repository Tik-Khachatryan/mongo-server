const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const Register = require('./controllers/auth/Register');
const Profile = require('./controllers/auth/Profile');
const Login = require('./controllers/auth/Login');
const ImgUpload = require('./controllers/auth/ImgUpload');
const Post = require('./controllers/auth/Posts');
const AllPosts = require('./controllers/auth/AllPosts');
const DeletePost = require('./controllers/auth/DeletePost');
const EditPost = require('./controllers/auth/EditPost');
const Search = require('./controllers/auth/Search');
const AddFriends = require('./controllers/auth/AddFriends');

const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/register',ImgUpload, Register);
app.post('/profile/:id', Profile);
app.post('/login',  Login);
app.post('/posts', Post);
app.post('/allposts', AllPosts);
app.post('/search', Search);
app.post('/friend/:id', AddFriends);
app.delete('/delete:id', DeletePost);
app.put('/edit/:id', EditPost);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));