const array_comidas=[];
const carrito=[];
const nombre=document.getElementById('nombre');
const precio=document.getElementById('precio');
class Comida{
    constructor(id,nombre,precio,stock,cantidad){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
        this.cantidad=cantidad||0;
    } 
    aumentarCantidad(){
        this.cantidad++
    }
}
const milanesa=new Comida(1,'milanesa',420,5);
const milanesa_napo= new Comida(2,"milanesa_napo",490,2);
const canelon= new Comida(3,'canelon',420,10);
const albondiga= new Comida(4,'albondiga',440,5);

array_comidas.push(milanesa,milanesa_napo,canelon,albondiga);
const clase= document.getElementById('menu');
for(const comida of array_comidas){
    const contenedor = document.createElement('div')
    contenedor.className='card'
    contenedor.innerHTML=`
                        <img src="img/img_${comida.id}.jpg" class="card-img-top" alt=${comida.nombre}>
                        <div class="card-body">
                            <h5 class="card-title">${comida.nombre}</h5>
                            <p class="card-text">precio: ${comida.precio}</p>
                            <button id=${comida.id} class="btn btn-primary comprar">Comprar</button>
                        </div>`
    clase.append(contenedor)
    
    document.getElementById(`${comida.id}`).addEventListener('click', () => comprar(comida))
}

function comprar(producto){
    console.log(producto)
    let compra = carrito.find(el=> el.nombre=== producto.nombre)
    if(compra){
        if(compra.cantidad < producto.stock){
            compra.aumentarCantidad();
            console.log("se aumento la cantidad")
        }else{
            alert('no hay mas stock')
        }
    }else{
        carrito.push(producto);
        producto.aumentarCantidad();
    }
    let total = 0;
    for(let i=0; i<carrito.length;i++){
        total += carrito[i].cantidad;
    }
    const contador = document.getElementById('contador');
    contador.innerHTML = total;
    localStorage.setItem('carrito', JSON.stringify(carrito));

}
function cargarLocalStorage(){
    let carro = JSON.parse(localStorage.getItem('carrito'))
    if(carro){
        for(let i = 0; i < carro.length; i++){
            carrito.push(new Comida(carro[i].id, carro[i].nombre, carro[i].precio, carro[i].stock, carro[i].cantidad))
        }
    }
}