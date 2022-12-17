class RecentProductsItems{
    constructor(src,mmin,mmax,href,content) {
        this.src = src;
        this.mmin = mmin;
        this.mmax = mmax;
        this.href=href;
        this.content=content;
    }
    /*product -ийн item бүрээ render-лэж буй функц*/ 
    render_a(){
        return `<a href="${this.href}">
        <article class="p-art" style="background-image:url(${this.src});">
       
        </article>
        <h2>${this.content}</h2>
        </a> `
    }
  
  }


export default class RecentProduct{

constructor(jsonUrl) {
   
    this.jsonUrl = jsonUrl;
    
}
/* Өгөгдлөө json файлаас fetch хийн авчраад 
тухайн өгөгдөл бүрийг агуулах RecentProductsItems-классын объектыг үүсгээд объект тус бүрийнхээ хуьвд рендерлэж байна.
*/
download(){
    fetch(`${this.jsonUrl}`,
    { mode: "no-cors" })
    .then(response=>{
        response.json()
        .then(jsob_data=>{
            document.getElementsByClassName("product")[0].innerHTML=jsob_data.map(products=>{
                const articleObj = new RecentProductsItems(products.src,products.min,products.max,products.href,products.content);
                return articleObj.render_a();
            })
            .reduce((prev,cur)=>prev+cur,"");;
            })
        })
    
    .catch(err => { console.log(err); });
}

}
