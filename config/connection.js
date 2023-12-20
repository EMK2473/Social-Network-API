const { connect, connection } = require('mongoose');
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONOGDB_URI || 'mongodb://localhost:27017/Thomas&Friends',
  {
    useNewUrlParser: true, // configure the Mongoose connection to use the new URL parser
    useUnifiedTopology: true, // configure the Mongoose connection to use the new server discovery and monitoring engine
  }
);

module.exports = mongoose.connection;
