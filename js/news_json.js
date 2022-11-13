const news=[
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Монголын анхны 500 саяын үйлдвэр 2022 оны 3 сарын 12 ашиглалтад орлоо.Тус үйлдвэр нь үйл ажиллагаагаа явуулсанаар олон ашиг тустай төдийгүй ....",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
    {
    
            "href":"#",
            "src":"pictures/frame2.jpg",
            "min":"pictures/frame2.jpg",
            "max":"pictures/frame2.jpg",
            "h":"Үйлдвэр ашиглалтад орлоо",
            "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia soluta delectus ab, eveniet fugiat repellat dolor",
            "date":"2022.01.02"
    },
]

class MyA{
    constructor(src,mmin,mmax,href,h,content,date) {
        this.src = src;
        this.mmin = mmin;
        this.mmax = mmax;
        this.href=href;
        this.h=h;
        this.content=content;
        this.date=date;
    }
    render_a(){
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
function PList(products) {
    let retVal = "";
    
    for (const key of products){
  
        let articleObj = new MyA(key.src,key.min,key.max,key.href,key.h,key.content,key.date);
        retVal += articleObj.render_a();

      
    }
  
    document.getElementsByTagName("main")[0].innerHTML=retVal;
    
}
window.onload=()=>PList(news);