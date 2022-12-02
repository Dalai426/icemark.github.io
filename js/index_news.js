
   /* fetch('../json/index_box.json', { mode: 'no-cors'}).then(res => res.json()).then(res => console.log);*/

 class News extends HTMLElement{
   connectedCallback(){
    fetch(`./json/index_box.json`,
        { mode: "no-cors" })
        .then(response=>{
            response.json()
            .then(jsob=>{
            var ret="";
            for(const j of jsob) {
            ret+=`<a href="${j.href}">
                <article class="img-1">
                  <section class="text">  
                   <h2> ${j.h2} </h2>
  
                   <div class="icons">
                       <p>
                           <i class="fa-sharp fa-solid fa-comment"></i>
    
                           <span> ${j.comment} </span>
                           <i class="fa-solid fa-eye"></i>
                           <span> ${j.view} </span>
                       </p>
                       <div class="date"> ${j.date} </div>
                   </div>
                   
               </section> 
              </article>  
           </a>`
            } 
            this.innerHTML=ret;
            })
        })
        .catch(err => { console.log(err); 
        });
   }
}


customElements.define("icemark-news-box",News);
