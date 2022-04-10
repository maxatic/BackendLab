const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', ((req, res) => {
    res.sendFile(__dirname + '/about.html');
}))

app.get('/features', (req, res) => {
    res.sendFile(__dirname + '/features.html');
})

app.get('/favicon', (req, res) => {
    res.sendFile(__dirname + '/src/favicon.ico')
})

app.get('/logo', (req, res) => {
    res.sendFile(__dirname + "/src/logo_white.png")
})

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);