const mongoose = require("mongoose");

// Connection of mongoDB and node js  // name of the collection in database is Ecomm1

const url =
  "mongodb+srv://swapnilwalhekar1999:VJbRQgS6GOiclrdK@cluster.ihmi2nm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";
mongoose.connect(url, () => {
  console.log("ok DB Connected:");
});

// VJbRQgS6GOiclrdK;
// swapnilwalhekar1999;
// mongodb+srv://swapnilwalhekar1999:VJbRQgS6GOiclrdK@cluster.ihmi2nm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
