const express = require('express');
const app = express();
const port = 3000;
var http = require('http')
const hostname = 'localhost';
const { Pool, Client } = require('pg');
// database-tei connect hiine
const pool = new Pool({
            host:"localhost",
            port:"5432",
            database:"icecream",
            user:"test",
            password:"123456"
}); 
// connect hiijj chadval can gedeg vgiig hevlene
pool.connect().then(()=> console.log("can"));
app.get('/', (req, res) => {  
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
      console.log("dalai");
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
        // res ilgeene
        res.status(200).send(JSON.stringify(icecreams));
    });
  });

  app.get('/product/:name', (req, res) => {
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
      res.status(200).send(retval);
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

