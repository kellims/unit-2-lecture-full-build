
// import mongoose
const mongoose = require('mongoose')

// database configuration 
// const DATABASE_URL =
	// "mongodb+srv://kellisimon18:hellomarie@cluster0.27rcunp.mongodb.net/?retryWrites=true&w=majority";

// mongoose connect to url
// mongoose.connect(DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to mongoDB")
})

mongoose.connection.on("error", (error) => {
    console.log("mongoDB Connection Error:", error)
})

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

// export mongoose 
module.exports = { mongoose }