const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express()

//MiddleWare 
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i5oucvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      const jobsCollection = client.db('soloSphere').collection('jobs');
      const bidsCollection = client.db('soloSphere').collection('bids');

      // Get All data from DB
      app.get('/jobs', async (req, res) => {
         const result = await jobsCollection.find().toArray()

         res.send(result)
      })

      //get a single data from db using job id
      app.get('/job/:id', async (req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await jobsCollection.findOne(query)
        res.send(result)
      })
      
      //Save bid date in the db
      app.post('/bid', async(req, res) => {
        const bidData = req.body;
        // console.log(bidData);
        const result = await bidsCollection.insertOne(bidData);
        res.send(result)
      })

      //Save Job date in the db
      app.post('/jobs', async(req, res) => {
        const jobData = req.body;
        const result = await jobsCollection.insertOne(jobData);
        res.send(result)
      })

      //Get All posted data by a specific user
      app.get('/jobs/:email', async (req, res) => {
        const email = req.params.email;
        const query = {'buyer.email' : email}
        const result = await jobsCollection.find(query).toArray()
        res.send(result)
      })

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Hello....")
})

app.listen(port, () => console.log(`server is running on port number ${port}`))

