const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const animalController = require('./controllers/animals')

const app = express()

//routes
app.use('/animals', animalController)


// db connection 
mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log('DB connected')) 
 .catch(err => console.error(err));

const PORT = process.env.PORT || 7070

app.listen(PORT, console.log(`listening on port ${PORT}`))















// JASKIS
// paste the MongoDB commands you use underneath each prompt


// GETTING STARTED
// 1. Create a database called jaskis


// 2. Create a collection called bounties


// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object


// 2. Query for all bounties in the bounties collection


// 3. Insert many bounties at once using the given objects

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands

// 2. Query for all bounties with a reward worth 10000 or more

// 3. Query for all bounties, but exclude the client attribute from being shown

// 4. Query for a Groundhog in the Woodlands

// Update and Delete
// 1. Update the reward for Polarwind to 10000

// 2. Remove Lokinkajou

// 3. Delete all bounties sent by Songbird

// 4. Update all captured statuses to true