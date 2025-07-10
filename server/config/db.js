const mongoose = require('mongoose')


const ConnectDB = () =>{
    mongoose.connect(process.env.MONGO_DB_URI_DEVELOPMENT
    ).then(() => {
        console.log("Connection was Sucessfull")
    })
    .catch((error) =>{
        console.log("Error connection", error.message);
        process.exit(1);
    })
}

module.exports = ConnectDB;