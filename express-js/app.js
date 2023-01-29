var express = require("express");
var bodyParser = require("body-parser");
var faker = require("faker");

var routes = function (app) {

    //GET
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    // /user
    app.get("/user", function (req, res) {
        var data = ({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email()
        });
        res.status(200).send(data);
      });

      //get /user/123
      app.get("/users/:num", function (req, res) {
        var users = [];
        var num = req.params.num;
     
        if (isFinite(num) && num  > 0 ) {
          for (i = 0; i <= num-1; i++) {
            users.push({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                username: faker.internet.userName(),
                email: faker.internet.email()
             });
          }
     
          res.status(200).send(users);
         
        } else {
          res.status(400).send({ message: 'invalid number supplied' });
        }
     
      });
  };

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});