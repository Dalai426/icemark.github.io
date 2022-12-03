
   /* fetch('../json/index_box.json', { mode: 'no-cors'}).then(res => res.json()).then(res => console.log);*/

   const products=[
    {
      "href":"#",
      "src":"../index_pictures/mello.webp",
      "min":"../index_pictures/mello.webp",
      "max":"../index_pictures/mello.webp",
      "content":"Жимстэй <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"../index_pictures/choco.jpg",
      "min":"../index_pictures/choco.jpg",
      "max":"../index_pictures/choco.jpg",
      "content":"<span> Шоколадтай</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"../index_pictures/tus_bambar3.webp",
      "min":"../index_pictures/tus_bambar3.webp",
      "max":"../index_pictures/tus_bambar3.webp",
      "content":"<span> Аарцтай</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"../index_pictures/teso_ice.webp",
      "min":"../index_pictures/teso_ice.webp",
      "max":"../index_pictures/teso_ice.webp",
      "content":"<span> Аягатай</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"../index_pictures/vannila.webp",
      "min":"../index_pictures/vannila.webp",
      "max":"../index_pictures/vannila.webp",
      "content":"<span>Цөцгийтэй</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"../index_pictures/cake.webp",
      "min":"../index_pictures/cake.webp",
      "max":"../index_pictures/cake.webp",
      "content":"<span>Гэр бүлийн</span><br>зайрмаг"
    },
    {
      "href":"#",
      "src":"../index_pictures/tus_mock.webp",
      "min":"../index_pictures/tus_mock.webp",
      "max":"../index_pictures/tus_mock.webp",
      "content":"<span> Моктайл</span><br> зайрмаг"
    },
    {
      "href":"#",
      "src":"../index_pictures/tus_tunh2.webp",
      "min":"../index_pictures/tus_tunh2.webp",
      "max":"../index_pictures/tus_tunh2.webp",
      "content":"<span> Мөнх тунх</span><br> зайрмаг"
    }
]
 class News extends HTMLElement{
   connectedCallback(){
    fetch(`../json/index_box.json`,
        { mode: "no-cors" })
        .then(response=>{
            response.json()
            .then(jsob=>{
            var ret="";
            for(const j of jsob) {
            ret+=`<a href="${j.href}">
                <article class="${j.class}">
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

class MyA{
    constructor(src,mmin,mmax,href,content) {
        this.src = src;
        this.mmin = mmin;
        this.mmax = mmax;
        this.href=href;
        this.content=content;
    }
    render_a(){
        return `<a href="${this.href}">
        <article class="p-art">
       
        </article>
        <h2>${this.content}</h2>
        </a> `
    }
  
  }
  
  function PList(products) {
    let retVal = "";
    
    for (const key of products){
  
        let articleObj = new MyA(key.src,key.min,key.max,key.href,key.content);
        retVal += articleObj.render_a();
  
      
    }
  
    document.getElementsByClassName("product")[0].innerHTML=retVal;
    
  }
  window.onload=()=>PList(products);

  /*<picture>
  <source media="(min-width: 1024px)" srcset="${this.mmin}">
  <source media="(max-width: 768px)" srcset="${this.mmax}">
  <img src="${this.src}" alt="" width="100px" height="100px
  ">
</picture>*/