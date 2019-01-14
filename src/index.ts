import express from "express";

const port = 3000;

const app = express();

app.get("/", (req, res) => {
    // render the index template
    res.send("Hello World!!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});