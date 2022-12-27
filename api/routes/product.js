const express = require('express');
const { Pool, Client } = require('pg');
// back end code-oo module-chlah
const router=express.Router();
// database-tei connect hiine
const pool = new Pool({
    host:"icemark.postgres.database.azure.com",
    port:5432,
    database:"icecreams",
    user:"icemark_admin@icemark",
    password:"Tulbaga@11"
}); 
// connect hiijj chadval can gedeg vgiig hevlene
pool.connect().then(()=> console.log("can"));
router.get('/',(req, res) => {
    res.setHeader('content-type', 'application/json');
    // ugugdul avchraad doorhi json bolgono. 
    // ...,
    // {
    //       "content":"ШОКОЛАДТАЙ ЗАЙРМАГ",
    //       "icecream":[
    //           {
    //               "img":"pictures_bvteegdehvvniitanilcuulga/IMG_8548.webp",
    //               "name":"VENUS",
    //               "descrip":"Хайр дурлалын амт VENUS"
    //           },
    //           {
    //               "img":"pictures_bvteegdehvvniitanilcuulga/3d,4d_icemarkzairmag.webp",
    //               "name":"ICEMARK",
    //               "descrip":"Төсөөллөөс ч илүү гүзээлзгэнэ, шоколадтай зайрмаг ICEMARK"
    //           }
    //       ]
    //   },
    //   {
    //       "content":"MOCKTAIL",
    //       "icecream":[
    //           {
    //               "img":"pictures_bvteegdehvvniitanilcuulga/mocktai;.webp",
    //               "name":"MOCKTAIL",
    //               "descrip":"Зөвхөн чамтай л энэ төгс амтыг хуваалцмаар MOCKTAIL"
    //           }
    //       ]
          
    //   },
    //   ...
      pool.query('select icecream_type,img_path,name,descr from category,icecreams where category.id=icecreams.category_id',(err,data)=>{
        // yerunhii jsonii bvtets
        console.log("getting....");
        var icecreams=[];
        var i=0;
        // zairmagnii neg turul bvr deerhi element
        var el={};
        var prv=data.rows[0].icecream_type;
        // creams ni zairmagnuudiiin medeelel
        var creams=[];
        var j=0;
        // database-ees irsen bvh elementiin moroon gvine
          for(const row of data.rows){
            var a_ice={};
            // content buyuu turul ni uur bol tuhain elementee haagad shine element vvsgene
            if(row.icecream_type!=prv){
              el.content=prv;
              el.icecream=creams;
              prv=row.icecream_type;
              icecreams[i++]=el;
              el={};
              creams=[];
              j=0;
            }
            a_ice.img=row.img_path;
            a_ice.name=row.name;
            a_ice.descrip=row.descr;
            creams[j++]=a_ice;
          }
          el.content=prv;
          el.icecream=creams;
          icecreams[i++]=el;
          // res ilgeene
          res.status(200).send(icecreams);
      });
    });

    router.get('/products', (req, res) => {
        res.setHeader('content-type', 'application/json');
        
        pool.query(`select imgs, turul,time,weight, info,name,icecream_type from icecreams, category where icecreams.category_id=category.id`,(err,data)=>{
         console.log(data);
         var retval=[];
         var i=0;
         for(const row of data.rows){
          retval[i++]=row;
         }
    
          //  [
          //   {
          //     "name":"",
          //     "info":"",
          //     "weight":"",
          //     "time":"",
          //     "brand":"",
          //     "imgs":[{},{},{}]
          //     "turul":[{},{},..]
    
          //   }
          //  ]
          res.status(200).json(retval);
        });
      });
    
      router.get('/:name', (req, res) => {
        res.setHeader('content-type', 'application/json');
        var str=req.params.name;
        str=str.toUpperCase();
        pool.query(`select imgs, turul,time,weight, info,name,icecream_type from icecreams, category where icecreams.category_id=category.id and name='${str}'`,(err,data)=>{
         console.log(data);
         var retval=[];
         var el=data.rows[0];
         retval[0]=el;
    
          //  [
          //   {
          //     "name":"",
          //     "info":"",
          //     "weight":"",
          //     "time":"",
          //     "brand":"",
          //     "imgs":[{},{},{}]
          //     "turul":[{},{},..]
    
          //   }
          //  ]
          res.status(200).json(retval);
        });
      });

      //router module-aa export hiij nguu talaas tuhain file-aa require hiin ajilluulna
      module.exports=router;
    
