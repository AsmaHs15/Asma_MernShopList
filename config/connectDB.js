// require mongoose
const mongoose = require('mongoose');

require('dotenv').config({ path:'./config/.env' });

const connectDB = async () => {
  try {
    console.log('MongoDB try to connect...');
    await mongoose.connect('mongodb+srv://HK:HK123456789@cluster0.zagdr.mongodb.net/Shopping?retryWrites=true&w=majority', {
        useUnifiedTopology:true , useNewUrlParser:true , useCreateIndex: true
    });
    
    // await mongoose.connect(process.env.MONGO_URI, {
    //     useUnifiedTopology:true , useNewUrlParser:true , useCreateIndex: true
    //});
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;