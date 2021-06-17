// express backend, after the build
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
// instead of using the default of 3000, using 3001 to avoid collision with the react dev server
const port = process.env.PORT || 3001
const app = express();

app.use(logger("dev"));

// this lets us submit json instead of form data for the req.body
app.use(express.json())
app.use(cors());

// hardcoded scores later to be taken care of with mongoose 

const scores = [{
    numGuesses: 2,
    initials: 'AC',
    seconds: 33
},
{
    numGuesses: 1,
    initials:'SOS',
    seconds: 1
},
{
    numGuesses: 55,
    initals: 'MAD',
    seconds: 378
}]

// for making this route named /api/blahblah is for convention
app.get('/api/scores', function(req, res) {
    res.json(scores);
})

app.listen(port, function() {
    console.log(`express app is listening on port: ${port}`)
});

