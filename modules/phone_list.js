export class phonelist{
    constructor(width,list,open) {
        this.width=window.matchMedia('(min-width:'+width+'px)');
        this.event_el=document.getElementById(list);
        this.open_el=document.getElementById(open);
        this.state="none";
        this.open_name=open;
    }
    mediaquery_event(){
        window.addEventListener("resize",(e)=>{
            if(this.width.matches){
                this.open_el.style.display="none";
            }
        });
    }
    event(){
        this.event_el.addEventListener("click",()=>{
            if(this.state.localeCompare("none")==0){
                this.open_el.style.display="block";
                this.state="block";
            }
            else{
                this.open_el.style.display="none";
                this.state="none";
            }
        });
    }

}