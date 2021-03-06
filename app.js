const express = require("express");
const app = express();
const weatherRoute = require("./routes/weather");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


app.get("/", weatherRoute);
app.post("/", weatherRoute);



const port = process.env.PORT || '3000';
app.listen(port, ()=>{
    console.log(`Server is listening in port ${port}`);
})