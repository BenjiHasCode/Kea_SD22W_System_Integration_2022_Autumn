import express from 'express';
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Can access this from a reverse proxy" });
});

app.post('/github', (req, res) => {
    console.log(req.body);
    res.send();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});