/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/


/* 
Almacenamiento Local (LocalStorage)

La informacion que pongamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: Articulos de un carrito de compras, cuando guardamos un perfil de configuracion, historial de uso.


La informacion que se guarda en LocalStorage no se comparte con otras pantallas, se liga solo con la direccion con la que estamos trabajando.

- Cada almacenamiento va con su pagina.

*/


//Guardando mi primer dato en LocalStorage
//localstorage.setItem(key, value)


localStorage.setItem("Nombre", "Fatima");
localStorage.setItem("Apellido", "Fernandez");
localStorage.setItem("Edad", "26");


//Guardamos un carrito de compras
let carritoComprasFatima = ["Falda", "Pantalon", "Blusa", "Tenis"];

localStorage.setItem("CarritoCompras", carritoComprasFatima);

//Obtener la informacion almacenada en lo localstorage

//Solo se necesita la llave, no el valor
//localstorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//Recuperando el carrito de compras
let carrito = localStorage.getItem("CarritoCompras")
console.log(carrito);


//Borrar un elemento del localstorage
//localstorage.removeItem(key)
localStorage.removeItem("CarritoCompras");

//Conocer el largo o longitud del localstorage (es para conocer la cantidad de elementos, no de indices)
//localstorage.lenght

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
//Si no se escribe com estaba la key, hace una nueva key con el nuevo valor que queriamos modificar.
localStorage.setItem("Apellido", "Ruiz");
