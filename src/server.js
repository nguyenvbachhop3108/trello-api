const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Trello API")
});

const PORT = 1235

app.listen(PORT, ()=>{
  console.log(`Express running on Port ${PORT}`)
})
