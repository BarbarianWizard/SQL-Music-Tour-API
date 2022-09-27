// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
const eventController = require('./controllers/event_controller')
const stageController = require('./controllers/stage_controller')
app.use('/bands', bandsController)
app.use('/event', eventController)
app.use('/stage', stageController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

/*
sequelize model:generate --name Event --attributes "event_id:integer, name:string, date:date, start_time:date, end_time:date"
sequelize model:generate --name Stage --attributes "stage_id:integer, stage_name:string"
sequelize model:generate --name Stage_Events --attributes "stage_events_id:integer, stage_id:smallint, event_id:smallint"
sequelize model:generate --name Set_Time --attributes "event_id:smallint, stage_id:smallint, band_id:smallint, start_time:date, end_time:date, set_time_id:integer"
sequelize model:generate --name Meet_Greet --attributes "event_id:smallint, band_id:smallint, meet_start_time:date, meet_end_time:date, meet_greet_id:integer"
*/