// Created by Cody
import mongoose from 'mongoose'

const timeTableSchema =  new mongoose.Schema({
    station: { type: String, ref: 'Code' },
    StationTimes: [{
      Code: String,
      StationName: String,
      Monday: [{
        OpeningTime: String,
        FirstTrain: [{
          Time: String,
          DestinationStation: String
        }, {
        Time: String,
        DestinationStation: String
      }],
      LastTrain: [{
        Time: String,
        DestinationStation: String,
      }, {
        Time: String,
        DestinationStation: String,
      }]
      }],
      Tuesday: [{
        OpeningTime: String,
        FirstTrain: [{
          Time: String,
          DestinationStation: String
        }, {
        Time: String,
        DestinationStation: String
      }],
      LastTrain: [{
        Time: String,
        DestinationStation: String,
      }, {
        Time: String,
        DestinationStation: String,
      }]
      }],
      Wednesday: [{
        OpeningTime: String,
        FirstTrain: [{
          Time: String,
          DestinationStation: String
        }, {
        Time: String,
        DestinationStation: String
      }],
      LastTrain: [{
        Time: String,
        DestinationStation: String,
      }, {
        Time: String,
        DestinationStation: String,
      }]
      }],
      Thursday: [{
        OpeningTime: String,
        FirstTrain: [{
          Time: String,
          DestinationStation: String
        }, {
        Time: String,
        DestinationStation: String
      }],
      LastTrain: [{
        Time: String,
        DestinationStation: String,
      }, {
        Time: String,
        DestinationStation: String,
      }]
      }],
      Friday: [{
        OpeningTime: String,
        FirstTrain: [{
          Time: String,
          DestinationStation: String
        }, {
        Time: String,
        DestinationStation: String
      }],
      LastTrain: [{
        Time: String,
        DestinationStation: String,
      }, {
        Time: String,
        DestinationStation: String,
      }]
      }],
      Saturday: [{
        OpeningTime: String,
        FirstTrain: [{
          Time: String,
          DestinationStation: String
        }, {
        Time: String,
        DestinationStation: String
      }],
      LastTrain: [{
        Time: String,
        DestinationStation: String,
      }, {
        Time: String,
        DestinationStation: String,
      }]
      }],
      Sunday: [{
        OpeningTime: String,
        FirstTrain: [{
          Time: String,
          DestinationStation: String
        }, {
        Time: String,
        DestinationStation: String
      }],
      LastTrain: [{
        Time: String,
        DestinationStation: String,
      }, {
        Time: String,
        DestinationStation: String,
      }]
      }]
    }]
},{
  timestamp: true
})

const TimeTable = mongoose.model('TimeTable', timeTableSchema)

export {
  TimeTable
}