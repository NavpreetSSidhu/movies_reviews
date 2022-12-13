import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient;
const db_user = process.env.db_user;
const db_password = process.env.db_password;

const uri = `mongodb+srv://${"nav_nappa"}:${"hello222617"}@cluster0.8nrh0uf.mongodb.net/?retryWrites=true&w=majority`;

const port = 8000;

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    })
  });