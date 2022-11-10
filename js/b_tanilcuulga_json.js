const sublist=[
    {
        "content":"МӨНХ ТУНХ",
        "link":"#section1",
        "label":"Мөнх тунх бүтээгдэхүүний мэдээлэл"},
    {
        "content":"ЖИМСТЭЙ ЗАЙРМАГ",
        "link":"#section1",
        "label":"Жимстэй зайрмагнуудын мэдээлэл"},
    {
        "content":"ШОКОЛАДТАЙ ЗАЙРМАГ",
        "link":"#section1",
        "label":"Шоколадтай зайрмагнуудын мэдээлэл"},
    {
        "content":"MOCKTAIL",
        "link":"#section1",
        "label":"Mocktail брендийн зайрмагнуудын мэдээлэл"},
    {
        "content":"ААРЦТАЙ ЗАЙРМАГ",
        "link":"#section1",
        "label":"аарцтай зайрмагнуудын мэдээлэл"},
    {
        "content":"АЯГАТАЙ ЗАЙРМАГ",
        "link":"#section1",
        "label":"Аягатай зайрмагнуудын танилцуулга"},
    {
        "content":"ЦӨЦГИЙТЭЙ ЗАЙРМАГ",
        "link":"#section1",
        "label":"Цөцгийтэй зайрмагнуудын танилцуулга"},
    {
        "content":"ГЭР БҮЛИЙН",
        "link":"#section1",
        "label":"гэр бүлийн зайрмагнуудын танилцуулга"}
];

class MySubList{
    constructor(content,link,label) {
        this.content = content;
        this.link = link;
        this.label = label;
    }

    render() {
        return `<li><a href="${this.link}" aria-label="${this.label}">${this.content}</a>
        <div class="line"></div>
        </li>`;
    }
}
App(sublist);
function App(SList) {
    
    let retVal = "<ul>";
    for (const key in SList) {
        console.log(key.content);
        let articleObj = new MySubList(key.content,key.link,key.label);
        retVal += articleObj.render();
    }
    retVal+="</ul>";
    document.querySelector(".bvteegdehvvnii_turul").innerHTML=retVal;
}




