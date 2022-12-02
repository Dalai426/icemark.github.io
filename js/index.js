const slider=[
  {
      "src":"index_pictures/iberry_purvee.png",
      "min":"index_pictures/iberry_purvee.png",
      "max":"index_pictures/iberry_purvee.png"
  }

]

const products=[
    {
      "href":"#",
      "src":"./index_pictures/mello.jpg",
      "min":"./index_pictures/mello.jpg",
      "max":"./index_pictures/mello.jpg",
      "content":"Жимстэй <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"./index_pictures/choco.jpg",
      "min":"./index_pictures/choco.jpg",
      "max":"./index_pictures/choco.jpg",
      "content":"<span> Шоколадтай</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"index_pictures/tus_bambar3.jpg",
      "min":"index_pictures/tus_bambar3.jpg",
      "max":"index_pictures/tus_bambar3.jpg",
      "content":"<span> Аарцтай</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"index_pictures/teso_ice.jpg",
      "min":"index_pictures/teso_ice.jpg",
      "max":"index_pictures/teso_ice.jpg",
      "content":"<span> Аягатай</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"index_pictures/vannila.jpg",
      "min":"index_pictures/vannila.jpg",
      "max":"index_pictures/vannila.jpg",
      "content":"<span>Цөцгийтэй</span> <br> зайрмаг"
    },
    {
      "href":"#",
      "src":"index_pictures/cake.jpg",
      "min":"index_pictures/cake.jpg",
      "max":"index_pictures/cake.jpg",
      "content":"<span>Гэр бүлийн</span><br>зайрмаг"
    },
    {
      "href":"#",
      "src":"index_pictures/tus_mock.jpg",
      "min":"index_pictures/tus_mock.jpg",
      "max":"index_pictures/tus_mock.jpg",
      "content":"<span> Моктайл</span><br> зайрмаг"
    },
    {
      "href":"#",
      "src":"index_pictures/tus_tunh2.jpg",
      "min":"index_pictures/tus_tunh2.jpg",
      "max":"index_pictures/tus_tunh2.jpg",
      "content":"<span> Мөнх тунх</span><br> зайрмаг"
    }
]



class MySubList{
  constructor(src,mmin,mmax) {
      this.src = src;
      this.mmin = mmin;
      this.mmax = mmax;
   
  }
  render_picture() {
      return    `<picture class="mySlides">
          <source media="(min-width: 1024px)" srcset="${this.mmin}">
          <source media="(max-width: 768px)" srcset="${this.mmax}">
          <img src="${this.src}" alt="Icemark" loading="lazy" >
      </picture>`
  }
}
class MyA{
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
function App(products) {
  let retVal = "";
  
  for (const key of products){

      let articleObj = new MySubList(key.src,key.min,key.max);
      retVal += articleObj.render_picture();

    
  }

  document.getElementsByClassName("slider")[0].innerHTML=retVal;
  
}
function PList(products) {
  let retVal = "";
  
  for (const key of products){

      let articleObj = new MyA(key.src,key.min,key.max,key.href,key.content);
      retVal += articleObj.render_a();

    
  }

  document.getElementsByClassName("product")[0].innerHTML=retVal;
  
}
window.onload=()=>App(slider);
window.onload=()=>PList(products);