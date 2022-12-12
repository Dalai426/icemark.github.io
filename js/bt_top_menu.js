//ene ni bvteegdehvvnii tanilcuulga hesgiin sublistiin bairlaliig olgoh js yum.
// scroll hiivel scroll gedeg function-iig duudaj sublist-iin  bairlaliig oorchlono.
class slist{
    constructor(sublist_media,header,sublist){
        this.mql = window.matchMedia('(min-width:'+sublist_media+'px)');
        this.header=document.querySelector(header);
        this.scroll_pos;
        this.elm=document.querySelector(sublist);
    }
    scroll() {
        // header hesgiin undriig avna
        let height=this.header.offsetHeight;
        // bvteegdehvvnii turul classtai sublist-iig tuhain header hesgiin door baihaar bairluulna
        this.elm.style.top=height+"px";
        // deeshee scroldohod omno hadgalj avsan scroll-iin hemjeenees ih mun screen hemjee tohirch baival
        if (document.documentElement.scrollTop > this.scroll_pos && this.mql.matches) {
            this.elm.style.display="block";   
        } else {
            this.elm.style.display="none";
        }
        this.scroll_pos=document.documentElement.scrollTop;
    }
};
// 691 px gedeg ni header heseg ni sublist alga boloh hemjee
const list=new slist(750,"header",".bvteegdehvvnii_turul");
window.onscroll=()=>{list.scroll()};
