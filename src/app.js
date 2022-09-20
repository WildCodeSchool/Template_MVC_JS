const express = require("express");
const path = require("path");
const layouts = require("express-ejs-layouts");
const router = require("./router");

const app = express();
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");
app.use(layouts);
app.set("layout", "./layouts/main.ejs");
app.use(express.json());

// API routes
app.use(router);

// ready to export
module.exports = app;
