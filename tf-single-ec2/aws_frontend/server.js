//express app that serves html pages
var  express = require("express");
var app = express();
var path = require("path");

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || "http://43.204.102.54:8000/api";

const fetch = (...args) => 
    import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get("/", async function (req, res) {
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        console.log(data);

        res.render("index", {
            data: data.data.data
        });

    } catch (error) {
        console.log("error:", error);
        res.status(500).send("Error fetching data from backend");
    }
});     

app.listen(3000,"0.0.0.0", function () {
    console.log("Frontend running on port 3000");
});
