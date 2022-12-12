
class RecentSliderItems{
    constructor(src, max_src, min_src) {
        this.src = src;
        this.max_src=max_src;
        this.min_src=min_src;
    }
    render_a(){
        return `<div class="slide" style="background-image:url(${this.src});"></div>  `;
    }
  
  }
function download(jsonUrl){
    fetch(jsonUrl,
    { mode: "no-cors" })
    .then(response=>{
        response.json()
        .then(jsob_data=>{
            let retVal = "";
    
            for (const key of jsob_data){
        
                let articleObj = new RecentSliderItems(key.src,key.max_src,key.min_src);
                retVal += articleObj.render_a();
            }
        
            document.getElementsByClassName("slider")[0].innerHTML=retVal;
            sliding()
            })
        })
    
    .catch(err => { console.log(err); });
}

window.onload=()=>download("./json/index_slider.json");

function sliding(){
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000);
    }
}