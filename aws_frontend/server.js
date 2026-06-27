const express = require("express");
const path = require("path");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Backend URL (same EC2 instance)
const URL = process.env.BACKEND_URL || "http://127.0.0.1:5000/api";

// For Node.js 18+, you can use the built-in fetch.
// If you prefer node-fetch, keep your existing import instead.
// const fetch = (...args) =>
//     import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.get("/", async (req, res) => {
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`Backend returned ${response.status}`);
        }

        const result = await response.json();

        console.log(result);

        res.render("index", {
            data: result.data.data
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Error fetching data from backend");
    }
});

// Start Express server
app.listen(3000, "0.0.0.0", () => {
    console.log("Frontend running on port 3000");
});