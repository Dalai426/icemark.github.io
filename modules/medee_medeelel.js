class RecentNewsItem { 
    constructor(news) {
        this.src = news.src;
        this.mmin = news.min;
        this.mmax = news.max;
        this.href=news.href;
        this.h=news.h;
        this.content=news.content;
        this.date=news.date;
    }
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
        fetch(`${this.jsonUrl}`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        mode:'no-cors'})
        .then(response=>{
            response.json()
            .then(jsob_data=>{
                document.getElementsByTagName("main")[0].innerHTML=``;
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
    
}

