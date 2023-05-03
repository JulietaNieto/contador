let increment = 0;

let show = document.querySelector(".show")

let cuerpo = document.querySelector(".container")
 
document.addEventListener("click",(e)=>{
    console.log(e)
    if(e.target.matches("#decrecer")){
        increment--
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(255, 37, 71)";
        document.getElementById("#img1").src="../"
        
    } 
     if (e.target.matches("#borrar")){
        increment = 0
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(20, 255, 8)";
    } 
     if (e.target.matches("#crecer")){
        increment++
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(70, 192, 183)";
        
    }

})




