const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', "ejs")
app.use(express.static('public'))

const User = require('./models/user')

// hnAS0Nwke94AKnHX

mongoose.connect('mongodb://127.0.0.1:27017/gogaga', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



app.get('/', (req, res) => {
    const tempUser1 = [], tempUser2 = [];
    try {
        res.status(200).render('home', { tempUser1: tempUser1, tempUser2: tempUser2 })
    }
    catch (e) {
        res.status(401).send('Something Went wrong ' + e)
    }
})

app.get('/add-user', (req, res) => {
    try {
        res.status(200).render('add')
    }
    catch
    {
        res.status(401).send('Something wrong in Adding User')
    }
})

app.post('/', async (req, res) => {
    try {
        const tempUser = new User({
            firstName: req.body.first.toLowerCase(),
            lastName: req.body.last.toLowerCase(),
            location: req.body.location.toLowerCase()
        })

        await tempUser.save()
            .then((result) => {
                res.redirect('/')
            }).catch((e) => {
                res.send("Something gone wrong during saving our data " + e)
            })

    } catch (e) {
        console.log(e)
    }

})

app.post('/search', async (req, res) => {
    try {
        console.log(req.body.search)
        const tempUser1 = await User.find({ firstName: req.body.search.toLowerCase() })

        const tempUser2 = await User.find({ location: req.body.search.toLowerCase() })

        res.render('home', { tempUser1: tempUser1, tempUser2: tempUser2 })

    }
    catch (e) {
        console.log("DUring Searching " + e);
    }
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

// git remote add origin https://github.com/Ankit8969/gogaga.git
// git branch - M main
// git push - u origin main