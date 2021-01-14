const express = require("express");
const app = express();
const path = require("path");

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(process.env.PORT || 3000, () => {
    console.log("servidor mercadoliebre funcionando ok")
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))

});
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))

});
app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))

});