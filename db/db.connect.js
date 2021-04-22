const mongoose = require("mongoose")

async function initializeDBConnection() {

  try{
    const dbConnectionResponse = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
  });
  console.log("DB connection successful!")
  }
  catch(error){
    console.error("Connection to DB failed: ", error)
  }
}

module.exports = {initializeDBConnection}