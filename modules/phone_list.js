export class phonelist{
    constructor(width,list,open) {
        this.width=window.matchMedia('(min-width:'+width+'px)');
        this.event_el=document.getElementById(list);
        this.open_el=document.querySelector("."+open);
        this.state="none";
        this.open_name=open;
    }
    mediaquery_event(){
        window.addEventListener("resize",(e)=>{
            if(this.width.matches){
                this.open_el.classList.remove("active");
            }
        });
    }
    event(){
        this.event_el.addEventListener("click",()=>{
            this.open_el.classList.toggle("active");
        });
    }

}