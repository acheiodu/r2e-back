"use strict";

var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');

var natural_language_classifier = watson.natural_language_classifier({
  url: "https://gateway.watsonplatform.net/natural-language-classifier/api",
  username: "d17904d1-6f95-4783-8f59-3722e58a1893",
  password: 'PykA1Bvy2i3A',
  version: 'v1'
});

var mydb;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/dist"));

app.get("/api/clientes/001", function (request, response) {
  let clientData =
    {
      name: "João Oliveira",
      gender: "Male",
      cpf: 34823654786,
      birthday: "01/05/1982",
      phone: "(11) 34567823",
      caseNumber: 3654782369,
      address: "Av Paulista, 1000",
      addressComplement: "Ap 53",
      zipCode: "46578-150",
      city: "São Paulo",
      state: "São Paulo",
      country: "Brazil"
    };
  response.send(clientData);
});

app.post("/db/clientes/001", function (request, response) {
  let client =
    {
      name: "João Oliveira",
      gender: "Male",
      cpf: 34823654786,
      birthday: "01/05/1982",
      phone: "(11) 34567823",
      caseNumber: 3654782369,
      address: "Av Paulista, 1000",
      addressComplement: "Ap 53",
      zipCode: "46578-150",
      city: "São Paulo",
      state: "São Paulo",
      country: "Brazil"
    };
  if(!mydb) {
    return console.log(client.name + ' not added to the database.');;
  }
  mydb.insert(client, function(err, body, header) {
    if (err) {
      return console.log('[mydb.insert] ', err.message);
    }
    response.send(cfenv);
  });
});

/* Endpoint to greet and add a new visitor to database.
* Send a POST request to localhost:3000/api/visitors with body
* {
* 	"name": "Bob"
* }
*/
app.post("/api/visitors", function (request, response) {
  var userName = request.body.name;
  if(!mydb) {
    console.log("No database.");
    response.send("Hello " + userName + "!");
    return;
  }
  // insert the username as a document
  mydb.insert({ "name" : userName }, function(err, body, header) {
    if (err) {
      return console.log('[mydb.insert] ', err.message);
    }
    response.send("Hello " + userName + "! I added you to the database.");
  });
});

/**
 * Endpoint to get a JSON array of all the visitors in the database
 * REST API example:
 * <code>
 * GET http://localhost:3000/api/visitors
 * </code>
 *
 * Response:
 * [ "Bob", "Jane" ]
 * @return An array of all the visitor names
 */
app.get("/api/visitors", function (request, response) {
  var names = [];
  if(!mydb) {
    response.json(names);
    return;
  }

  mydb.list({ include_docs: true }, function(err, body) {
    if (!err) {
      body.rows.forEach(function(row) {
        if(row.doc.name)
          names.push(row.doc.name);
      });
      response.json(names);
    }
  });
});

app.post("/classify", function(request, response){
  natural_language_classifier.classify({
    text: request.body.input,
    classifier_id: '90e7acx197-nlc-4599' },
  function(err, res) {
    if (err) response.json(err);
    else response.json(res.classes);
  });
});

// load local VCAP configuration  and service credentials
var vcapLocal;
try {
  vcapLocal = require('./vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) { }

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

const appEnv = cfenv.getAppEnv(appEnvOpts);

if (appEnv.services['cloudantNoSQLDB']) {
  // Load the Cloudant library.
  var Cloudant = require('cloudant');

  // Initialize database with credentials
  var cloudant = Cloudant(appEnv.services['cloudantNoSQLDB'][0].credentials);

  //database name
  var dbName = 'r2e-db';

  // Create a new "mydb" database.
  cloudant.db.create(dbName, function(err, data) {
    if(!err) //err if database doesn't already exists
      console.log("Created database: " + dbName);
  });

  // Specify the database we are going to use (mydb)...
  mydb = cloudant.db.use(dbName);
}

//serve static file (index.html, images, css)
//app.use(express.static(__dirname + '/views'));



var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
