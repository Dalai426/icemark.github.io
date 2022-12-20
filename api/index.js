const express = require('express');
const app = express();
const port = 3000;
// import hiin oruulj irj baina ooriin bichsen moduliaa
const product=require('./routes/product.js')
const cors =require('cors');
app.use(cors());
const hostname = 'localhost';

// product js -ee modul-iig ashiglaj baina
app.use("/",product);
app.use("/products",product);
app.use("/:name",product);
// tuhain portoo sonsoh
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

