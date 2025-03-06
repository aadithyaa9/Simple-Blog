import express from "express";
import bodyParser from "body-parser";
import blogroutes from "./routes/blogroutes.js";

const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("/", blogroutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
