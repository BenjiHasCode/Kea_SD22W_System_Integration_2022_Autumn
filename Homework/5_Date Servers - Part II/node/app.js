import express from 'express';
import fetch from 'node-fetch';

const app = express();


app.get("/timestamp", (req, res) => {    
    res.send(new Date());
});

// calls other server and returns timestamp
app.get("/requestTimestamp", async (req, res) => {
    const response = await fetch("http://localhost:8080/timestamp");
    const data = await response.json();

    res.send(new Date(data));
});

app.listen(3000, () => {
    console.log("Server is running on", 3000);
});