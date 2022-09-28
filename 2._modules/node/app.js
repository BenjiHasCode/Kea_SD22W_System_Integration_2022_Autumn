import express from 'express';
import path from 'path';
import fetch from 'node-fetch';

const app = express();

app.use(express.static("public"));

app.get("/duck", (req, res) => {
    res.sendFile(path.resolve("./public/duck.html"));
});

app.get("/endpoint", (req, res) => {
    res.send({message: "OK OK OK"});
});

// task call /otherendpoint and use fetch
app.get("/", async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/otherendpoint");
    const data = await response.json();

    res.send({message: data});
});

app.listen(3000, () => {
    console.log("Server is running on", 3000);
});