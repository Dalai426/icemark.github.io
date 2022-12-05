class RecentProductsItems{
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


export default class RecentProduct{

constructor(jsonUrl) {
   
    this.jsonUrl = jsonUrl;
    
}

download(){
    fetch(`${this.jsonUrl}`,
    { mode: "no-cors" })
    .then(response=>{
        response.json()
        .then(jsob_data=>{
            let retVal = "";
    
            for (const key of jsob_data){
        
                let articleObj = new RecentProductsItems(key.src,key.min,key.max,key.href,key.content);
                retVal += articleObj.render_a();
            }
        
            document.getElementsByClassName("product")[0].innerHTML=retVal;
            })
        })
    
    .catch(err => { console.log(err); });
}

}