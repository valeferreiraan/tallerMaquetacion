/*Menu*/
const ham=document.getElementById("ham")
const men=document.querySelector(".menu")
const main=document.querySelector(".main")

ham.addEventListener('click',() =>{
    //console.log("entro");
    men.classList.remove('menu');
    men.classList.add('menu2'); 
})

main.addEventListener('click',() =>{
    men.classList.remove('menu2');
    men.classList.add('menu'); 
})



const comentarios=document.querySelector(".comentarios")
const punto=document.querySelectorAll(".punto")


punto.forEach( ( cadaPunto , i) =>{ 
    punto[i].addEventListener('click',()=>{

        let posi= i
        let ope= posi * -29
        comentarios.style.transform= `translateX(${ope}%)`
    
        punto.forEach(( cadaPunto, i )=>{

            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})

//Registrar

const abrir=document.getElementById("abriNodal")
const cerrar=document.getElementById("cerrar")
const nodal=document.querySelector(".nodal2")


abrir.addEventListener('click',() =>{
    //console.log("entro");
    nodal.classList.remove('nodal2');
    nodal.classList.add('nodal'); 
})

cerrar.addEventListener('click',() =>{
    nodal.classList.remove('nodal');
    nodal.classList.add('nodal2'); 
})


