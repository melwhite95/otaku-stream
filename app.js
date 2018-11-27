//DECLERATIONS

const express = require('express');
const bodyParser = require('body-parser');
//const PORT = process.env.PORT || 2323;
const app = express();
const stream = require('getstream-node')

import mongoose from 'mongoose'

var client = stream.connect(wvtwpc6h66bm,zy7w2q5rc3ks8qwx9gdg4cc9redutsk8t99zz44sdazghfuz6fhyuvpt4wk9u9pm)
// Instantiate a new client (client side)
client = stream.connect('wvtwpc6h66bm', null, 'zy7w2q5rc3ks8qwx9gdg4cc9redutsk8t99zz44sdazghfuz6fhyuvpt4wk9u9pm');


//middleware
app.use(bodyParser.json());


var takuSchema = Schema({
    text: String,
    user: {ttype: Schema.Object.Id,ref: 'User'}
});

takuSchema.plugin(stream.mongoose.activity);

//register mongoose activity
stream.mongoose.setupMongoose(mongoose)


var userFeed= client.feed;
userFeed.addActivity({
    actor: 'user',
    taku: '',
    verb: taku,
    object: 1 
});



//app.listen(PORT, () => {
  //  console.log(`listening on port ${PORT}!`);
 // });

  app.listen(3000, () => {
    console.log("Listening on port 3000");
    )}