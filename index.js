//console.log("hello abinash");
const express = require('express')
const mongoose = require('mongoose');
const Product=require('./models/product.model.js');
const productRoute= require('./route/product.route.js')
const app = express()

const port = 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extanded:false}));


//routes
app.use('/api/products',productRoute);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});




app.get('/', function (req, res) {
    res.send('Hello from node api node my name is  abinash Chourasia');
  });


  mongoose.connect("mongodb+srv://abinash:abinash1795@cluster1.nzyxkyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
  .then(() => {console.log('Connected!');

  })

.catch(() =>{
    console.log("connection failed");
});


