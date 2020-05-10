const express = require("express");
const path = require("path");
const noteData = require("./db/db.json");
const fs = require("fs");
let dbJSON = noteData;

// set up express app and port
const app = express();
const PORT = process.env.PORT || 3000;

// handle parsing data for POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving static files, i.e. CSS and JS
app.use(express.static('public'));

// Route Handling: HTML
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });

// Route Handling: API
// GET:
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// POST:
app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    dbJSON.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(dbJSON), function (err) {
        if (err) throw err;
        console.log("Successfully added data to db.json")
    });

    res.json("Success");
});

// Initialize Server
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}...`)
});