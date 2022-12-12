export class phonelist{
    // phone list
    constructor(screen,list,open) {
        this.width=window.matchMedia('(min-width:'+screen+'px)');
        this.event_el=document.getElementById(list);
        this.open_el=document.querySelector("."+open);
    }
    mediaquery_event(){
        window.addEventListener("resize",(e)=>{
            if(this.width.matches){
                this.open_el.classList.remove("active");
            }
        });
    }
    event(){
        // hervee darval toggle hiij active class iig zalgana
        this.event_el.addEventListener("click",()=>{
            this.open_el.classList.toggle("active");
        });
    }
}
