import express from 'express'
import expressGraphQL from 'express-graphql'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = process.env.PORT || '4000'

const db =
	'mongodb://ecorea:P4$$w0rd@ds155073.mlab.com:55073/graphql-mongodb-server'
const schema = ''

// Connect to MongoDB with Mongoose.
mongoose
	.connect(
		db,
		{
			useCreateIndex: true,
			useNewUrlParser: true,
		},
	)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err))

app.use(
	'/graphql',
	cors(),
	bodyParser.json(),
	expressGraphQL({
		schema,
		graphiql: true,
	}),
)

// Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
	// Set static folder.
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
