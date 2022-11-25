class RecentNewsItem { 
    //constructor
    constructor(news) {
        this.src = news.src;
        this.mmin = news.min;
        this.mmax = news.max;
        this.href=news.href;
        this.h=news.h;
        this.content=news.content;
        this.date=news.date;
    }
    //build and return html
    Render() {
        return ` <section class="news"><a href="${this.href}">
        <picture>
            <source media="(min-width: 1024px)" srcset="${this.mmin}">
            <source media="(max-width: 768px)" srcset="${this.mmax}">
            <img src="${this.src}" alt="Switch language icon" width="789px" height="526px">  
        </picture>
        <article>
            <h3>${this.h}</h3>
            <p>${this.content} </p>
            <div class="date">${this.date}</div>
        </article>
       </a></section>`
    }
}

export default class RecentNews{

    constructor(jsonUrl) {
        this.recentNewsList = [];
        this.jsonUrl = jsonUrl;
        this.jsobs;
        this.current_page=0;
        this.last_page=0;
    }
    
    download(){
        fetch(`${this.jsonUrl}`,
        { mode: "no-cors" })
        .then(response=>{
            response.json()
            .then(jsob_data=>{
                document.getElementsByTagName("main")[0].innerHTML=``;
                this.pages(jsob_data.length);
                const filteredArray=jsob_data.filter((news,index)=>{return this.current_page*10<=index && index<this.current_page*10+10});
                document.getElementsByTagName("main")[0].insertAdjacentHTML("afterbegin",
                    filteredArray.map(newNews=>{
                        const articleObj = new RecentNewsItem(newNews);
                        this.recentNewsList.push(articleObj);
                        return articleObj.Render();
                    })
                    .reduce((prev, cur)=>prev+cur,"")
                );
            })
        })
        .catch(err => { console.log(err); });
    }
    
    pages(data_len){
        data_len=Math.ceil(data_len/10);
        this.last_page=data_len-1;
        data_len*=10;
        let ret=`<a href="#" id="prv"> Previous </a>`
            let start=parseInt(this.current_page/3)*3;
            data_len=parseInt((data_len-(start+1)*10)/10);
            if(3<data_len){
                data_len=3;
            }
            for (let i=start;i<=start+data_len;i++) {
                ret+=`<a href="#" class="page"> ${i+1} </a>`;
            }
        ret+=`<a href="#" id="nex"> Next </a>`;
        let contain=document.querySelector(".link");
        contain.innerHTML=``;
        contain.innerHTML+=ret;
        document.getElementById("nex").addEventListener("click",()=>(this.page_p(1)));
        document.getElementById("prv").addEventListener("click",()=>(this.page_p(-1)));
        for (let i=start;i<=start+data_len;i++) {
            document.getElementsByClassName("page")[i-start].addEventListener("click",()=>{this.change_page(i)});
        }
    } 
    page_p(page){
        if(this.current_page==0 && page==-1){
        }
        else if(this.current_page==this.last_page && page==1){
        }
        else{
            this.current_page+=page;
            this.download();
        }
    }
    change_page(pno){
        this.current_page=pno;
        this.download();
    }
}


/*download(){
        this.jsobs=fetch(`${this.jsonUrl}`)
        .then(response=>{
            response.json()
            .then(
                jsob_data=>{
                            console.log(jsob_data);
                            jsob_data.map(newNews=>{
                                const articleObj = new RecentNewsItem(newNews);
                                this.recentNewsList.push(articleObj);});
                                console.log(this.recentNewsList.length);
                }
                
            )
        })
        .catch(err => { console.log(err) });
    }
    render(){
        console.log(this.recentNewsList.length);
 
            document.getElementsByTagName("main")[0].insertAdjacentHTML("afterbegin",
                this.recentNewsList.map(newNews=>{
                    const articleObj = new RecentNewsItem(newNews);
                    return articleObj.Render();
                })
                .reduce((pre, cur) => pre+cur, "")
            );
        
 
    }
*/

/*
constructor(jsonUrl) {
        this.recentNewsList = [];
        this.jsonUrl = jsonUrl;
        this.jsobs;
        this.current_page=4;
    }
    download(){
        this.jsobs=fetch(`${this.jsonUrl}`)
        .then(response=>{
            response.json()
            .then(jsob_data=>{
                this.len=jsob_data.length;
                const filteredArray=jsob_data.filter((news,index)=>{return this.current_page*10<=index && index<this.current_page*10+10});
                document.getElementsByTagName("main")[0].insertAdjacentHTML("afterbegin",
                    filteredArray.map(newNews=>{
                        const articleObj = new RecentNewsItem(newNews);
                        return articleObj.Render();
                    })
                    .reduce((prev, cur)=>prev+cur,"")
                );
            })
        })
        .catch(err => { console.log(err); });
    }
    render(){
    }
    pages(data_len){
        data_len=Math.ceil(data_len/10);
        data_len*=10;
        console.log(data_len);
        let ret=`<a href="#" onclick="recentNews.download()"> Previous </a>`
            let start=parseInt(this.current_page/3)*3;
            console.log(data_len);
            console.log(start);
            data_len=parseInt((data_len-(start+1)*10)/10);
            if(3<data_len){
                data_len=3;
            }
            for (let i=start;i<=start+data_len;i++) {
                ret+=`<a href="#" onclick="recentNews.download()"> ${i+1} </a>`;
            }
        
            
        
        ret+=`<a href="#" onclick=""> Next </a>`;
        document.querySelector(".link").innerHTML+=ret;
    }   
     */
