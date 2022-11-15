let tap;
function MUNH(){
    tap=document.getElementById("MUNH");
    tap.parentNode.style.display="block";
    listener();
}
           
function TUNH(){
    tap=document.getElementById("TUNH");
    tap.parentNode.style.display="block";
    listener();
}

function MELLO(){
    tap=document.getElementById("MELLO");
    tap.parentNode.style.display="block";
    listener();
}
function VENUS(){
    tap=document.getElementById("VENUS");
    tap.parentNode.style.display="block";
    listener();
}
function IBERRY(){
    tap=document.getElementById("IBERRY");
    tap.parentNode.style.display="block";
    listener();
}
function MOCKTAIL(){
    tap=document.getElementById("mocktail_window");
    tap.parentNode.style.display="block";
    listener();
}

function BAMBAR(){
    tap=document.getElementById("BAMBAR");
    tap.parentNode.style.display="block";
    listener();
}
               
function TESO(){
    tap=document.getElementById("TESO");
    tap.parentNode.style.display="block";
    listener();
}
           
function ELITE(){
    tap=document.getElementById("ELITE");
    tap.parentNode.style.display="block";
    listener();
}
         
function MOCHA(){
    tap=document.getElementById("MOCHA");
    tap.parentNode.style.display="block";
    listener();
}
             
function YOGURT(){
    tap=document.getElementById("YOGURT");
    tap.parentNode.style.display="block";
    listener();
}
              
function ALYASKA(){
    tap=document.getElementById("ALYASKA");
    tap.parentNode.style.display="block";
    listener();
}
       
function STANDART(){
    tap=document.getElementById("STANDART");
    tap.parentNode.style.display="block";
    listener();
}
              
function PLOMBIR(){
    tap=document.getElementById("PLOMBIR");
    tap.parentNode.style.display="block";
    listener();
}
          
function IMPERIA(){
    tap=document.getElementById("IMPERIA");
    tap.parentNode.style.display="block";
    listener();
}
             
function MINI(){
    tap=document.getElementById("MINI_SHCOK");
    tap.parentNode.style.display="block";
    listener();

}
          
function ELITE(){
    tap=document.getElementById("ELITE");
    tap.parentNode.style.display="block";
    listener();
}
           
function ICEMARK(){
    tap=document.getElementById("ICEMARK");
    tap.parentNode.style.display="block";
    listener();
}

function listener(){
    tap.parentNode.addEventListener('click',function(e){
        if(!tap.contains(e.target)){
            tap.parentNode.style.display="none";
        }
    });
    tap.childNodes[1].childNodes[1].addEventListener('click',()=>{
        tap.parentNode.style.display="none";
    });
}