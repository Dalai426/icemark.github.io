class Box{
    constructor(href, h2,comment,view,date){
        this.href=href;
        this.h2=h2;
        this.comment=comment;
        this.view=view;
        this.date=date;
    }

    Render(){
        return ` <a href="${this.href}">
        <article class="img-1">
      
            
             <section class="text">  
               <h2> ${this.h2} </h2>

               <div class="icons">
                   <p>
                       <i class="fa-sharp fa-solid fa-comment"></i>

                       <span> ${this.comment} </span>
                       <i class="fa-solid fa-eye"></i>
                       <span> ${this.view} </span>
                   </p>
                   <div class="date"> ${this.date} </div>
               </div>
               
           </section> 
          </article>  
       </a>`
    }
}


export class Box{

constructor(jsonUrl) {
   
    this.jsonUrl = jsonUrl;
    
}

download(){
    fetch(`${this.jsonUrl}`,
    { mode: "no-cors" })
    .then(response=>{
        response.json()
        .then(jsob_data=>{
            let retVal="";
           
            for(let key in jsob_data){
                 let b=new Box(key.href, key.h2, 
                    key.comment,key.view ,key.date);
                    retVal+=b.Render();
            }
            document.getElementsByClassName("news")[0].innerHTML=retVal;
        })
    })
    .catch(err => { console.log(err); });
}

}