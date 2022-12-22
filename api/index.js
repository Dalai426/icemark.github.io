const express = require('express');
// import hiin oruulj irj baina ooriin bichsen moduliaa
const product=require('./routes/product.js')
const cors =require('cors');


const app = express();
const port = 3000;
const hostname = 'localhost';
const nodemailer=require('nodemailer');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// product js -ee modul-iig ashiglaj baina
app.use("/",product);
app.use("/products",product);
app.use("/:name",product);

// mail sonsoh
app.post('/send_email', (req, res) => {
  console.log("name:",req.body.name);
  console.log("name:",req.body.email);
  console.log("title:",req.body.subject);
  console.log("text:",req.body.medeelel);
  console.log("back",req.body.call);
 // mail-teigee holbogodoh
  let mailTransporter=nodemailer.createTransport({
      service:"gmail",
      auth:{
          user:"Gtsog321@gmail.com",
          pass:"jdnykyzqphgwqfli"
      }
  })

      // mail content
      let details={
          from:"Gtsog321@gmail.com",
          to:"GaDalai426@gmail.com",
          subject:`${req.body.subject}`,
          text:`EMAIL:${req.body.email}\nНЭР:${req.body.name}\nМЭДЭЭЛЭЛ:${req.body.medeelel}\nБУЦАЖ ХОЛБОГДОХ:${req.body.call}`
      }
      // mail ilgeeh
      mailTransporter.sendMail(details,(err)=>{
          if(err){
              console.log("Error occured",err);

          }
          else{
              console.log("Email has sent");
          }
      })
});


// tuhain portoo sonsoh
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

