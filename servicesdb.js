const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority;

let client;
let db;

async function connectToDb() {
  if (!client || !client.isConnected?.()) {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('Connected to MongoDB Atlas');
  }
  return db;
}

async function getDb() {
  if (!db) {
    await connectToDb();
  }
  return db;
}

module.exports = { getDb };
