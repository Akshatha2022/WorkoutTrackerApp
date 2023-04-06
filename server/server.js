require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("");
const userRoutes = require("");
const path = require("path");


// express app
const app = express();

app.use(express.static(path.resolve(__dirname, "")));

