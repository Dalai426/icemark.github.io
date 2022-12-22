const express = require('express');
const nodemailer=require('nodemailer');
// back end code-oo module-chlah
const router=express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


router.post('/send_email',(req, res) => {
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



      //router module-aa export hiij nguu talaas tuhain file-aa require hiin ajilluulna
      module.exports=router;
    
