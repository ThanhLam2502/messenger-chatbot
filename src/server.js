import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/view-engine";
import initWebRoute from "./routes/web";
require("dotenv").config();

let app = express();

// config view engine
viewEngine(app);

// parse request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// init web router
initWebRoute(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Chat bot is running on port ${port}`);
});