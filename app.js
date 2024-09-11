const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

// Set up Handlebars engine
app.engine('handlebars',handlebars.engine());
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Minecraft Home'
    });
});

app.get('/single', (req, res) => {
    res.render('single', {
        title: 'Single Player',
        message: 'Explore single-player Minecraft adventures!'
    });
});

app.get('/multi', (req, res) => {
    res.render('single', {
        title: 'Multiplayer',
        message: 'Join multiplayer Minecraft games!'
    });
});

app.get('/texture', (req, res) => {
    res.render('single', {
        title: 'Texture Packs',
        message: 'Customize your Minecraft with texture packs!'
    });
});

app.get('/options', (req, res) => {
    res.render('single', {
        title: 'Options',
        message: 'Adjust your game settings!'
    });
});

app.get('/quit', (req, res) => {
    res.render('single', {
        title: 'Quit Game',
        message: 'Quit the game and return to the main menu.'
    });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
