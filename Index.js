import express from "express"
import expressGraphQL from "express-graphql"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || "4000"
const db = "mongodb://<dbuser>:<dbpassword>@ds155073.mlab.com:55073/graphql-mongodb-server"

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
	  db,
	  {
		  useCreateIndex: true,
		  useNewUrlParser: true
	  }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));