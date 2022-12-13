// bvteegdehvvnii tanilcuulga page -> json vriable
const sublist=[
    {
        "content":"МӨНХ ТУНХ",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/м.webp",
                "name":"MUNH",
                "descrip":"Анх хараад л идэх хүсэл төрүүлнэ шоколад, цөцгийтэй MUNH"
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/tus_tunh.webp",
                "name":"TUNH",
                "descrip":"Солонго шиг амттай гүзээлзгэнэ, цөцгийтэй сахарын агууламжгүй TUNH"
            }
        ]
    },
    {
        "content":"ЖИМСТЭЙ ЗАЙРМАГ",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/iberry.webp",
                "name":"IBERRY",
                "descrip":"Инээмсэглэл бэлэглэх амт, байгалийн зэрлэг жимс IBERRY."
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/mello1.webp",
                "name":"MELLO",
                "descrip":"MELLO киви, гүзээлзгэнэ, черриний дур булаам амт."
            }
        ]
    },
    {
        "content":"ШОКОЛАДТАЙ ЗАЙРМАГ",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/IMG_8548.webp",
                "name":"VENUS",
                "descrip":"Хайр дурлалын амт VENUS"
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/3d,4d_icemarkzairmag.webp",
                "name":"ICEMARK",
                "descrip":"Төсөөллөөс ч илүү гүзээлзгэнэ, шоколадтай зайрмаг ICEMARK"
            }
        ]
    },
    {
        "content":"MOCKTAIL",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/mocktai;.webp",
                "name":"MOCKTAIL",
                "descrip":"Зөвхөн чамтай л энэ төгс амтыг хуваалцмаар MOCKTAIL"
            }
        ]
        
    },
    {
        "content":"ААРЦТАЙ ЗАЙРМАГ",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/бамбар.webp",
                "name":"BAMBAR",
                "descrip":"Дархлаа дэмжигч аарцтай, чацарганатай, гүзээлзгэнэтэй BAMBAR"
            }
        ]
    },
    {
        "content":"АЯГАТАЙ ЗАЙРМАГ",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/teso_ice.webp",
                "name":"TESO",
                "descrip":"Иристэй цөцгий аягатай TESO"
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/элитэ.webp",
                "name":"ELITE",
                "descrip":"Дур булаам амт, аягатай ELITE."
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/mocha.webp",
                "name":"MOCHA",
                "descrip":"Ногоон цайтай зайрмаг таныг таргалуулахгүй"
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/иогурт.webp",
                "name":"YOGURT ICECREAM",
                "descrip":"Эрүүл мэндийн зайрмаг YOGURT ICECREAM"
            }
        ]
    
    },
    {
        "content":"ЦӨЦГИЙТЭЙ ЗАЙРМАГ",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/alyaskaface.webp",
                "name":"ALYASKA",
                "descrip":"Амтат цөцгий эрүүл амттан ALYASKA"
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/standartface.webp",
                "name":"STANDART",
                "descrip":"Уруул дурлам аз жаргалын амт STANDART"
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/тус_.webp",
                "name":"PLOMBIR",
                "descrip":"Цөцгий, самар, ирсисний төгс хослол PLOMBIR"
            }
        ]
    
    },
    {
        "content":"ГЭР БҮЛИЙН",
        "icecream":[
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/империа.webp",
                "name":"IMPERIA CAKE ICECREAM",
                "descrip":"Хайртдаа өгөх хамгийн гоё бэлэг IMPERIA зайрмаган бялуу."
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/IMG_8549.webp",
                "name":"MINI SHOCK",
                "descrip":"Аз жаргалын амтаа хамтдаа хуваалцах хамгийн шилдэг амттан бол MINI SHOCK"
            },
            {
                "img":"pictures_bvteegdehvvniitanilcuulga/eliteice.webp",
                "name":"ELITE",
                "descrip":"Гэр бүлээрээ идэхэд хамгийн тохиромжтой ELITE"
            }
        ]
    }
];

class MySubList{
    // content ni zairmagnii turul, link ni section id baina, label ni tailbar, icecream dotor zairmagnuudiin medeelel
    constructor(content,link,label,icecream) {
        this.content = content;
        this.link = link;
        this.label = label;
        this.icecream=icecream;
    }
    // Zairmagnuudiin turliig haruulah sublist dotrohi medeelliig render hiine
    render_menu() {
        return `<li><a href="#${this.link}" aria-label="${this.label}">${this.content}</a>
        <div class="line"></div>
        </li>`;
    }
    // Turul bvr deer tvvnd hamaarah zairmagnuudiin medeelliig zurna
    render_tanilcuulga(){
        // mocktail-iih bish bol
        if(this.content!="MOCKTAIL"){
            let cont="";
            // tuhain turliin zairmag bolgonii medeelleer gvine
            for(const ics of this.icecream){
                cont+=`<article class="zairmag">
                <section зайрмагны дэлгэрэнгүй мэдээлэл" onclick="${ics.name.split(" ")[0]}()">
                <div class="zurag">
                    <img src="${ics.img}" alt="${ics.name} зайрмаг" width="100%" height="100%">
                </div>
                <h1>${ics.name}</h1>
                <div class="bvteegdehvvn_tailbar">
                    <span>${ics.descrip}</span>
                    <div><svg viewBox="0 0 137.83 38.81" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            class="c-icon-text-link__icon">
                            <path
                                d="M137.1 17.64L120.2.73a2.5 2.5 0 00-3.54 3.54l12.15 12.14c-15.28-2.12-21 1.19-25.63 3.88-2.73 1.58-4.88 2.82-8.78 2.82-3.18 0-4.87-2-7.38-5.23s-5.53-7.19-11.34-7.19-8.79 4-11.16 7.23-4 5.19-7.13 5.19-4.77-2-7.14-5.19-5.32-7.23-11.16-7.23-8.79 4-11.16 7.23-4 5.19-7.13 5.19-4.77-2-7.14-5.19-5.32-7.23-11.16-7.23a2.5 2.5 0 000 5c3.15 0 4.76 2 7.13 5.2S15 28.11 20.8 28.11s8.79-4 11.16-7.22 4-5.2 7.13-5.2 4.77 2 7.14 5.2 5.32 7.22 11.16 7.22 8.79-4 11.16-7.22 4-5.2 7.13-5.2 4.88 2 7.38 5.24 5.54 7.18 11.34 7.18c5.24 0 8.31-1.78 11.28-3.5 4.33-2.5 9.22-5.33 23.94-3l-13 13a2.5 2.5 0 003.54 3.54l16.9-16.91a2.49 2.49 0 00.04-3.6z">
                            </path>
                        </svg><em>дэлгэрэнгүй</em></div>
                </div>
                </section>
                </article>`;
            }
            return`<section id="${this.link}" class="turul">
            <h1>${this.content}</h1>
            </section>
            <section class="tanilcuulga_icecream">`+cont+`</section>`;
        }
        else{
            let cont="";
            // mocktail bol arai oor baidlaar render hiine
            for(const ics of this.icecream){
                cont+=`<article class="zairmag">
                <section onclick="${ics.name.split(" ")[0]}()">
                <div class="zurag">
                    <img src="${ics.img}" alt="${ics.name} зайрмаг" width="100%" height="100%">
                </div>
                <h1 id="Mocktail_h1">${ics.name}</h1>
                <div class="bvteegdehvvn_tailbar" id="mocktail_foot">
                    <span>${ics.descrip}</span>
                    <div><svg viewBox="0 0 137.83 38.81" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            class="c-icon-text-link__icon">
                            <path
                                d="M137.1 17.64L120.2.73a2.5 2.5 0 00-3.54 3.54l12.15 12.14c-15.28-2.12-21 1.19-25.63 3.88-2.73 1.58-4.88 2.82-8.78 2.82-3.18 0-4.87-2-7.38-5.23s-5.53-7.19-11.34-7.19-8.79 4-11.16 7.23-4 5.19-7.13 5.19-4.77-2-7.14-5.19-5.32-7.23-11.16-7.23-8.79 4-11.16 7.23-4 5.19-7.13 5.19-4.77-2-7.14-5.19-5.32-7.23-11.16-7.23a2.5 2.5 0 000 5c3.15 0 4.76 2 7.13 5.2S15 28.11 20.8 28.11s8.79-4 11.16-7.22 4-5.2 7.13-5.2 4.77 2 7.14 5.2 5.32 7.22 11.16 7.22 8.79-4 11.16-7.22 4-5.2 7.13-5.2 4.88 2 7.38 5.24 5.54 7.18 11.34 7.18c5.24 0 8.31-1.78 11.28-3.5 4.33-2.5 9.22-5.33 23.94-3l-13 13a2.5 2.5 0 003.54 3.54l16.9-16.91a2.49 2.49 0 00.04-3.6z">
                            </path>
                        </svg><em>дэлгэрэнгүй</em></div>
                </div>
                </section>
                </article>`;
            }
            return`<section id="${this.link}" class="turul">
            <h1>${this.content}</h1>
            </section>
            <section class="tanilcuulga_icecream" id="mocktail_page">`+cont+`
            </section>`;
        }
    }
}

function App(SList) {
    let retVal = "<ul>";
    let retVal_tanilcuulga="";
    // i ni section index (section1, section2, ... ) gej uguh zoriulalttai
    let i=1;
    // json objectiin element bvreer gvine
    for (const key of SList){
        console.log(key.content);
        let articleObj = new MySubList(key.content,"section"+i,key.content+" мэдээлэл",key.icecream);
        i++;
        // json objectoos zairmagnuudiin turliig haruulah sublist bolon, tvvnd hamaarah zairmagnuudiiin medeelliig haruulah ssection-iig render hiine
        retVal += articleObj.render_menu();
        retVal_tanilcuulga+=articleObj.render_tanilcuulga();
    }
    retVal+="</ul>";
    const turul=document.getElementsByClassName("bvteegdehvvnii_turul")[0];
    turul.innerHTML=retVal;
    turul.insertAdjacentHTML("afterend",retVal_tanilcuulga);
}
window.onload=()=>App(sublist);
