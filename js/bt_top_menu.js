resize_top_menu();
let mql = window.matchMedia('(min-width: 691px)');
let scroll_pos;
window.onscroll=()=>{scroll()};
function scroll() {
let elm=document.querySelector(".bvteegdehvvnii_turul");
    if (document.documentElement.scrollTop > scroll_pos && mql.matches) {
        elm.style.display="block";   
    } else {
        elm.style.display="none";
    }
    scroll_pos=document.documentElement.scrollTop;
}
function resize_top_menu(){
    const elmnt = document.querySelector("header");
    let height=elmnt.offsetHeight;
    document.querySelector(".bvteegdehvvnii_turul").style.top=height+"px";
}