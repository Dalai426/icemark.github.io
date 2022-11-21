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
        this.current_page=0;
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
            <h1>${this.h}</h1>
            <p>${this.content} </p>
            <div class="date">${this.date}</div>
        </article>
       </a></section>`
    }
}

export default class RecentNews {

    constructor(jsonUrl) {
        this.recentNewsList = [];
        this.jsonUrl = jsonUrl;
        this.jsobs;
    }

    download(){
        fetch(`${this.jsonUrl}`)
        .then(response=>{
            response.json()
            .then(
                jsob_data=>{
                    this.jsobs=jsob_data;
                    this.pages(jsob_data);
                        /*
                        document.getElementsByTagName("main")[0].insertAdjacentHTML("afterbegin",
                            jsob_data.map(newNews=>{
                                const articleObj = new RecentNewsItem(newNews);
                                return articleObj.Render();
                            })
                            .reduce((pre, cur) => pre+cur, "") 
                        );
                        */
                }
            )
        })
        .catch(err => { console.log(err) });
    }

    pages(jsob_data){
        alert("d");
        let ret=`<a href="#" onclick="recentNews.download()"> Previous </a>`
        if((jsob_data.length/10)>3){
            ret+=`<a href="#" onclick="recentNews.download()> 1 </a>
            <a href="#" onclick="recentNews.download()"> 2 </a>
            <a href="#" onclick="recentNews.download()"> 3 </a>
            <a href="#" onclick="recentNews.download()"> 4 </a>`;
        }
        else{
            for (let i=0;i<=jsob_data.length/10;i++) {
                ret+=`<a href="#" onclick="recentNews.download()"> ${i+1} </a>`;
            }
        }
        ret+=`<a href="#" onclick=""> Next </a>`;
        document.querySelector(".link").innerHTML+=ret;
    }   
}
