let ligth_of = document.querySelector(".ligth-off");
let ligth__on = document.querySelector(".ligth__on");
let ligth_on = document.querySelector("body")

ligth_of.addEventListener("click", () => {
 ligth_on.style.backgroundColor = "white";
 ligth_of.style.display = "none";
document.getElementById("l1").style.backgroundColor = "rgb(0 , 0, 0)";
document.getElementById("l2").style.backgroundColor = "rgb(0 , 0, 0)";
document.getElementById("l3").style.backgroundColor = "rgb(0 , 0, 0)";
function menu_transition(){
    document.getElementById("l2").style.position ="relative"
    document.getElementById("l2").style.bottom = "0px"
    document.getElementById("l2").style.transition ="1s";
    document.querySelector("nav").style.outline = "solid"
}
menu_transition()
});


ligth__on.addEventListener("click", () => {
    ligth_of.style.display = "initial";
    ligth_on.style.backgroundColor = "black";
    document.getElementById("l1").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("l2").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("l3").style.backgroundColor = "rgb(255,255,255)";
    document.querySelector("nav").style.outline = "none"
    function mostrar_ligth_off(){
        ligth__on.style.position ="absolute";
        ligth__on.style.rigth ="0"
        document.getElementById("l1").style.transition ="1s";
    }
    mostrar_ligth_off()
});


// function orientetion(){
//     let largura = document.querySelector("body").clientWidth
//     console.log(largura)
//     if(largura < "915"){
//         document.querySelector("nav").style.color = "red"
        
//     }
// }
// orientetion();
