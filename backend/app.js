
const express = require('express');
const dotenv = require('dotenv');
const connection = require('./config/db');
const router = require('./routes/user.routes');
const statementRouter = require('./routes/statement.routes');
const likedRouter = require('./routes/shortList.routes');
const cors = require('cors');


connection();

dotenv.config();

const app = express();


// Applying CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router)
app.use("/",statementRouter)
app.use("/", likedRouter)

app.get('/', (req, res) => {
    res.send("Hello")
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server is running on port 3000");
})