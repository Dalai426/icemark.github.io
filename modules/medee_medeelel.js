class RecentNewsItem { 
    //constructor
    constructor(news) {
        this.src = news.src;
        this.h=news.h;
        this.content=news.content;
        this.date=news.date;
    }
    //build news
    Render() {
        return ` <section class="news"><a href="#">
        <picture>
            <source media="(min-width: 1024px)" srcset="${this.src}">
            <source media="(max-width: 768px)" srcset="${this.src}">
            <img src="${this.src}" alt="Switch language icon" width="1067px" height="923px">  
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
        this.jsonUrl = jsonUrl;
        this.jsobs;
        this.current_page=0;
        this.last_page=0;
    }
    download(){
        // url-aar ni fetch hiij avaad json() ashiglan json object bolgoson
        fetch(`${this.jsonUrl}`,
        { mode: "no-cors" })
        .then(response=>{
            response.json()
            .then(jsob_data=>{
                const main=document.getElementsByTagName("main")[0];
                main.innerHTML=``;
                // pages-d jsob data buyu news-iinhaa too, shirhegiig damjuulan dood taliin page-iin medeelliig renderlene (zurna)
                this.pages(jsob_data.length);
                // jsob data-daa filter hiine. Odoogiin baigaa page - ees hamaaran medeeleldeee filter hiine (if huudas 1 bol 1-10 medeelliig avna geh met)
                const filteredArray=jsob_data.filter((news,index)=>{return this.current_page*10<=index && index<this.current_page*10+10});
                main.insertAdjacentHTML("afterbegin",
                    filteredArray.map(newNews=>{
                        // filter hiisen array gishvvn bvr deer render hiigeed niilvvleed mainrvv hiine
                        const articleObj = new RecentNewsItem(newNews);
                        return articleObj.Render();
                    })
                    .reduce((prev, cur)=>prev+cur,"")
                );
            })
        })
        .catch(err => { console.log(err); });
    }

    pages(data_len){
        // medeelliin urtaa butarhai bolgoj (3.1->4 bolgono)
        data_len=Math.ceil(data_len/10);
        this.last_page=data_len-1;
        data_len*=10;
        // medeelliin urtaas hamaarch dood page list render hiigdene
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
        // listener-vvd taivj ugnu onclick ashiglaj boloh bolovch module hiij baigaa vyed onclick ashiglaj bolohgvi baisan
        document.getElementById("nex").addEventListener("click",()=>(this.page_p(1)));
        document.getElementById("prv").addEventListener("click",()=>(this.page_p(-1)));
        for (let i=start;i<=start+data_len;i++) {
            document.getElementsByClassName("page")[i-start].addEventListener("click",()=>{this.change_page(i)});
        }
    }
    page_p(page){
        if(!(this.current_page==0 && page==-1) && !(this.current_page==this.last_page && page==1)){
            this.current_page+=page;
            this.download();
        }
    }
    change_page(pno){
        // tuhain page deer darsan tohioldold current-page iig oorchlood medeellee tatna
        this.current_page=pno;
        this.download();
    }
}



