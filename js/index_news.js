//import "../modules/index_news_text.js"
class Text extends HTMLElement{

  constructor(json){
    super();
      this.id=this.getAttribute("id");
  
      this.products=[];
   
  }
 
  Render(){
      fetch(`./json/index_box.json`,
          { mode: "no-cors" })
          .then(response=>{
              response.json()
              .then(jsob=>{
              
              for(var j of jsob){
                 if(j.id==this.id){
                      var a=this.products.length+parseInt( j.view);
                      this.innerHTML=`
                      <h2> ${j.h2}  </h2>
                      <div class="icons">
                                      <p>
                                          <i class="fa-sharp fa-solid fa-comment"></i>
                  
                                          <span> ${j.comment} </span>
                                          <i class="fa-solid fa-eye"></i>
                                          <span>${a} </span>
                                      </p>
                                      <div class="date"> ${j.date}</div>
                      </div>`
              }
            }
               
              })
          })
          .catch(err => { console.log(err); 
          });
  
  }
  AddToCart(myProduct) {
      
      this.products.push(myProduct);
      this.Render();
  }
  connectedCallback(){
    
    
     this.Render();
  }

}
window.customElements.define('icemark-news-box-text', Text);


class News extends HTMLElement{

  constructor(obj){
    super();
    if(obj!=null){
      this.id=this.getAttribute("id");
    }

    
  }

  connectedCallback(){
  

 
        fetch(`./json/index_box.json`,
            { mode: "no-cors" })
            .then(response=>{
                response.json()
                .then(jsob=>{
                var ret="";
                
                for(const j of jsob) {
                  if(j.id==this.id){
                ret=`<a href="${j.href}">
                    <article class="${j.class}">
                        
                      <icemark-news-box-text class="text" id="${j.id}">
                      </icemark-news-box-text>
                   
                  </article>  
               </a>`
               break;
                  }
                } 
                this.innerHTML=ret;
                })
            })
            .catch(err => { console.log(err); 
            });
       
  }
}
window.customElements.define('icemark-news-box', News);



function addView(id){
  const mycart=document.getElementById(id).children[0].children[0].children[0];
  console.log(mycart);
  mycart.AddToCart(this);
  
}
/*document.querySelector("icemark-news-box").addEventListener("click", e=>{
  console.log(e.target)
  //const myCart = document.querySelector("icemark-news-box-text");
  const mycard= document.getElementById( e.getElementById);
  mycard.AddToCart(this);
})
/*
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
</section> */
