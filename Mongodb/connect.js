const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myDatabase';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to MongoDB
async function run() {
    try {
        await client.connect();
        console.log('Connected correctly to MongoDB server');
    } catch (err) {
        console.log(err.stack);
    }

    // Close connection
    client.close();
}

run().catch(console.dir);