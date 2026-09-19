const mongoose  = require("mongoose");
const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/notebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("MongoDB connection error:", error))
}

module.exports = connectToMongo