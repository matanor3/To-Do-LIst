const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extened: true}));
app.use(express.static("public"));

let items =["Buy food", "Cook food", "Eat food"] ;


app.get("/", function(req, res) {
  let today = new Date;
let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleString("en-US", options);

res.render("list", {day: day, newListItems: items});
});

app.post("/", function(req, res){
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");

})


app.listen(3000, function (){
  console.log("server started on port 3000");
});
