const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const authRoute = require("./router/auth");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz ExpressJS API by kukingkux \n Halo dunia <3')
})

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use(authRoute);

app.listen(port, () => console.log(`App mendengarkan pada port http://localhost:${port}!`))