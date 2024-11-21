const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'Public/images')));

const chars = {
    mario: {
        name: "Mario",
        role: "Plumber",
        image: "/static/mario1.jpg",
        image1: "/static/mario2.jpg",
        description: "Mario is Italian and he is a Plumber. He is the Older Brother, little Older than Luigi and he has been around for more than Forty Years Now."
    },
    luigi: {
        name: "Luigi",
        role: "Plumber",
        image: "/static/luigi2.jpg",
        image1: "/static/luigi1.jpg",
        description: "Luigi is Italian and he is a Plumber like his Brother. He is the Younger One and he has been around for Thirty Five Years Maybe."
    },
    peach: {
        name: "Peach",
        role: "Princess",
        image: "/static/peach1.jpg",
        image1: "/static/peach2.jpg",
        description: "Peach is Princess of another Kingdom. She is Younger than Mario and Luigi and She has been around just know."
    },
    extra: {
        image: "/static/together.jpg"
    }    
};

app.get('/', (req, res) => {
    res.json(chars);
});

app.get('/mario', (req, res) => {
    res.json(chars.mario);
});

app.get('/luigi', (req, res) => {
    res.json(chars.luigi);
});

app.get('/peach', (req, res) => {
    res.json(chars.peach);
});

app.get('/signup', (req, res) => {
    res.json(chars.extra);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});