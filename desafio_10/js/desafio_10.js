const array_comidas=[];
const nombre=document.getElementById('nombre');
const precio=document.getElementById('precio');
class Comida{
    constructor(nombre,precio,disponible,grande,stock,date){
        this.nombre=nombre;
        this.precio=precio;
        this.disponible=disponible;
        this.grande=grande;
        this.stock=stock;
        this.date=date;
    }       
}
const milanesa=new Comida('milanesa',420,true,"si",5,new Date()) ;
const milanesa_napo= new Comida("milanesa_napo",490,true,"si",5,new Date());
const risotto= new Comida('risotto',420,true,"si",2,new Date());
const zapallito= new Comida('zapallito',350,true,"si",2,new Date());

array_comidas.push(milanesa,milanesa_napo,risotto,zapallito);
let alJson=JSON.stringify(array_comidas);
localStorage.setItem("productos",alJson);
//muestra los valores almacenados en el storage por consola
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
//detecta un evento y crea divs en el html
nombre.addEventListener("keyup",(e)=>{
    let existe=array_comidas.find((existe)=>existe.nombre==nombre.value)
    if (existe) {
        let padre=document.getElementById("nuevo");
        let div=document.createElement("div");
        div.innerHTML=`<h3> tu pedido de ${existe.nombre} ya fue procesado</h3>`;
        padre.appendChild(div);
    }
})
//detecta un evento y muestra por consola los platos de ese precio o menores
precio.addEventListener("keyup",(e)=>{
    let filtrar=array_comidas.filter((filtrar)=>filtrar.precio<=precio.value)
    if (filtrar) {
        console.log(filtrar);
    }
})
