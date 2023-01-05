//   fetch(`http://localhost:3000/products`,{   
//     method:'GET',
//     //servereeer localhost:3000 port iig ashiglan bvteegdehvvniii medeellee json-oor avchirna
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept':'application/json'
//     }
//   }).then(response=>{
//     console.log(response);
//     response.json()
//     .then(jsob_data=>{
//         console.log(jsob_data);
//         const bd=document.getElementsByTagName("body")[0];
//         // body dotor hiine
//         bd.insertAdjacentHTML("beforeend",
//                     jsob_data.map(data=>{
//                       // zurguud bolon delgerengvi medeelel baihgvi bol render hiihgvi
//                         if(data.imgs!=null && data.info!=null){
//                           // map ashiglan zairmag tus bvr deer render hiine
//                           const mdl=new modal(data.name,data.imgs,data.icecream_type,data.weight,data.time,data.info,data.turul);
//                           return mdl.render();
//                         }
//                     })
//                     .reduce((prev, cur)=>prev+cur,"")
//         );
//     })
//   })
//   .catch(err => { console.log(err); });
// class Carousel{ 
//         constructor(items){
//           // zurguudiig aguulsan elementvvd
//           const galleryItems=items.querySelectorAll('.frame');
//           this.id=items;
//           this.carouselArray=[...galleryItems];
//         }
//         updateGallery(){
//           // zurguudaa switch hiine
//           this.carouselArray.forEach(el=>{
//             // element bvr iin hoid { frame-1, frame-2 ..} ustgana
//             for(var i=0; i<this.carouselArray.length; i++){
//               el.classList.remove(`frame-${i+1}`);
//             }
//           });
//           this.carouselArray.slice(0,this.carouselArray.length ).forEach((el,i)=>{
//             el.classList.add(`frame-${i+1}`);
//           });
//         }
//         setCurrentState(direction){
//           if(direction==1){
//             // 1 buyuu baruun tiish bol pop hiij avaad urdaas ni hiine
//             this.carouselArray.unshift(this.carouselArray.pop());
//           }else{
//             // urdaas ni hasaj avaad hoinoos ni hiine
//             this.carouselArray.push(this.carouselArray.shift());
//           }
//           this.updateGallery();
//         }
//         useControls(){
//           // hervee baruul tal-iin sum deer daragdval
//           const next=this.id.querySelector(".right")
//           next.addEventListener('click',e=>{
//             e.preventDefault();
//             this.setCurrentState(1);
//           });
//           // herev zvvn taliin sum deer daragdval
//           const prv=this.id.querySelector(".left");
//           prv.addEventListener('click',e=>{
//             e.preventDefault();
//             this.setCurrentState(2);
//           });
//         }
// }



// class modal{
//   constructor(name,imgs,brand,weight,time,info,turul){
//     // modal buyuu zairmag tus bvr deerhi tsonhiig render hiine
//     this.name=name;
//     this.imgs=imgs;
//     this.brand=brand;
//     this.weight=weight;
//     this.time=time;
//     this.info=info;
//     this.turul=turul;
//   }
//   render(){
//     let retVal=`
//     <section class="modal">
//     <article class="bvteegdehvvn_tus" id="${this.name}">
//         <section class="head">
//             <i class="fa-solid fa-x"></i>
//             <article class="tus_zurag">
//                 <span class="left">❮</span>`;
//     // bvh zurgiig render hiine
//     for(var i=0; i<this.imgs.length; i++){
//       retVal+=`<article class="frame frame-${i+1}"><img src="${this.imgs[i]}" alt="${this.name} зайрмаг" loading="lazy">
//       </article>`;
//     }
//     retVal+=`<span class="right">❯</span></article>
//         </section>
//         <footer class="foot">
//             <h2>${this.name}</h2>
//             <hr>
//             <section class="tus_bvr">
//                 <article class="contain_turlvvd_window">
//                     <h2>ТӨРӨЛ</h2>
//                     <ul>`;
//       for(var i=0; i<this.turul.length; i++){
//         retVal+=`<li>${this.turul[i]}</li>`;
//       }
//       retVal+=`</ul></article>
//                 <article class="tailbar">${this.info}</article>
//                 <ul class="bvteegdehvvn_medeelel">
//                     <li>БРЭНД:<span>${this.brand}</span></li>
//                     <li>БҮТЭЭГДЭХҮҮНИЙ ЖИН:<span>${this.weight}.00 ГР</span></li>
//                     <li>ХАДГАЛАХ ХУГАЦАА:<span>${this.time} САР</span></li>
//                 </ul>
//             </section>
//         </footer>
//     </article> </section>`;
//     return retVal;
//   }
// }

var tap;
// tuhain duudagdsan elementiig render hiine
function display(param){
  tap=document.getElementById(`${param}`);
  tap.parentNode.style.display="block";
  listener();
}

function listener(){
  tap.parentNode.addEventListener('click',function(e){
    // click hiihed tuhain modalaas oor gazar click hiivel
      if(!tap.contains(e.target)){
          tap.parentNode.style.display="none";     
      }

  });
  tap.childNodes[1].childNodes[1].addEventListener('click',()=>{
    // x deer click hiivel
    tap.parentNode.style.display="none";     
  });
  // 3d carousel
  const ec=new Carousel(tap.parentNode);
  ec.useControls();
}
let tap;
class Carousel{ 
        constructor(items){
          // zurguudiig aguulsan elementvvd
          const galleryItems=items.querySelectorAll('.frame');
          this.id=items;
          this.carouselArray=[...galleryItems];
        }
        updateGallery(){
          // zurguudaa switch hiine
          this.carouselArray.forEach(el=>{
            // element bvr iin hoid { frame-1, frame-2 ..} ustgana
            for(var i=0; i<this.carouselArray.length; i++){
              el.classList.remove(`frame-${i+1}`);
            }
          });
          this.carouselArray.slice(0,this.carouselArray.length ).forEach((el,i)=>{
            el.classList.add(`frame-${i+1}`);
          });
        }
        setCurrentState(direction){
          if(direction==1){
            // 1 buyuu baruun tiish bol pop hiij avaad urdaas ni hiine
            this.carouselArray.unshift(this.carouselArray.pop());
          }else{
            // urdaas ni hasaj avaad hoinoos ni hiine
            this.carouselArray.push(this.carouselArray.shift());
          }
          this.updateGallery();
        }
        useControls(){
          // hervee baruul tal-iin sum deer daragdval
          const next=this.id.querySelector(".right")
          next.addEventListener('click',e=>{
            e.preventDefault();
            this.setCurrentState(1);
          });
          // herev zvvn taliin sum deer daragdval
          const prv=this.id.querySelector(".left");
          prv.addEventListener('click',e=>{
            e.preventDefault();
            this.setCurrentState(2);
          });
        }
}

function MUNH(){
    tap=document.getElementById("MUNH");
    tap.parentNode.style.display="block";
    listener();
}
           
function TUNH(){
    tap=document.getElementById("TUNH");
    tap.parentNode.style.display="block";
    listener();
}

function MELLO(){
    tap=document.getElementById("MELLO");
    tap.parentNode.style.display="block";
    listener();
}
function VENUS(){
    tap=document.getElementById("VENUS");
    tap.parentNode.style.display="block";
    listener();
}
function IBERRY(){
    tap=document.getElementById("IBERRY");
    tap.parentNode.style.display="block";
    listener();
}
function MOCKTAIL(){
    tap=document.getElementById("mocktail_window");
    tap.parentNode.style.display="block";
    listener();
}

function BAMBAR(){
    tap=document.getElementById("BAMBAR");
    tap.parentNode.style.display="block";
    listener();
}
               
function TESO(){
    tap=document.getElementById("TESO");
    tap.parentNode.style.display="block";
    listener();
}
           
function ELITE(){
    tap=document.getElementById("ELITE");
    tap.parentNode.style.display="block";
    listener();
}
         
function MOCHA(){
    tap=document.getElementById("MOCHA");
    tap.parentNode.style.display="block";
    listener();
}
             
function YOGURT(){
    tap=document.getElementById("YOGURT");
    tap.parentNode.style.display="block";
    listener();
}
              
function ALYASKA(){
    tap=document.getElementById("ALYASKA");
    tap.parentNode.style.display="block";
    listener();
}
       
function STANDART(){
    tap=document.getElementById("STANDART");
    tap.parentNode.style.display="block";
    listener();
}
              
function PLOMBIR(){
    tap=document.getElementById("PLOMBIR");
    tap.parentNode.style.display="block";
    listener();
}
          
function IMPERIA(){
    tap=document.getElementById("IMPERIA");
    tap.parentNode.style.display="block";
    listener();
}
             
function MINI(){
    tap=document.getElementById("MINI_SHCOK");
    tap.parentNode.style.display="block";
    listener();

}
          
function ELITE(){
    tap=document.getElementById("ELITE");
    tap.parentNode.style.display="block";
    listener();
}
           
function ICEMARK(){
    tap=document.getElementById("ICEMARK");
    tap.parentNode.style.display="block";
    listener();
}

function listener(){
    tap.parentNode.addEventListener('click',function(e){
        if(!tap.contains(e.target)){
            tap.parentNode.style.display="none";
        }
    });
    tap.childNodes[1].childNodes[1].addEventListener('click',()=>{
        tap.parentNode.style.display="none";
    });
    const ec=new Carousel(tap.parentNode);
    ec.useControls();
}
