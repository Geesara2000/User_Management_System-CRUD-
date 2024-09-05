const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router =require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://geesaraimal12:wh2dEMxkUb4JAV8n@cluster0.oqyom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connect = async () => {
  try{
    await mongoose.connect(uri);
    console.log('Connect to MongoDB');
  }
  catch(error) {
    console.log('MongoDB Error: ', error);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listenning to ${server.address().port}`)
});

app.use('/api',router);
