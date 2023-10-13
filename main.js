const juegos = [
    {
        id: 0,
        nombre: 'Elden Ring',
        categoria: 'RPG',
        precio: 12000,
        stock: true
    },
    {
        id:1,
        nombre:'Hogwarts Legacy',
        categoria:'RPG',
        precio:9000,
        stock: true
    },
    {
        id:2,
        nombre:'Sons of the Forest',
        categoria:'Aventura',
        precio: 2100,
        stock: true
    },
    {
        id:3,
        nombre:'Shadow of the Tomb Rider',
        categoria:'Aventura',
        precio: 6000,
        stock: true
    }
];


const user = {
    user: "admin",
    password: "1234"
};

const mostrarJuegos = () => {
    let mensaje = '\n Juegos disponibles: \n';

    juegos.forEach((juego) => {
        mensaje += `\n Nombre: ${juego.nombre}\n Categoria: ${juego.categoria}\n Precio: $ ${juego.precio}
         pesos ars. \n--------------------------------\n`;
    });
    
    alert(mensaje);
}

mostrarJuegos();

const pedirJuego = () => {
    const username = prompt("Ingrese nombre de usuario.");
    const password = prompt("Ingrese contraseña.");

if (username === user.user && password === user.password){
    alert(`Bienvenido de nuevo usuario ${user}`);

    const pedirJuego = () => {
        let Juego = prompt ('Ingrese el juego que desea que consigamos. ');
        if (Juego === '') {
            alert('Debes ingresar un juego para que te lo consigamos!');
            return pedirJuego()
        }
        return pedirJuego;
    }
    const pedirCategoria = () => {
        let Categoria = prompt ('Ingrese la categoria del juego que desea. ');
        if (Categoria === '') {
            alert('Debes ingresar una categoria de juego!');
            return pedirCategoria()
        }
        return pedirCategoria;
    }
    // let Juego = pedirJuego();
    // let Categoria = pedirCategoria();
}

}

const opcionesMenu = [
    {numero: "1", nombre: "Pedir Juego", function: pedirJuego },
    {numero: "2", nombre: "Ver Juegos Disponibles", function: verJuegosDispo},
    {numero: "3", nombre: "Salir", function: null}
]

menu();
const menu = () => {
    let opciones = "";
    for (const option of opcionesMenu){
        opciones += `${option.numero} - ${option.nombre}\n`;
    }

    const seleccionarOpcion = prompt (opcion => opcion.numero === seleccionarOpcion);

    if (seleccion) {
        if (seleccion.function){
            seleccion.function();
        } else{
            alert (`Seleccionaste: ${seleccion.nombre}`);
        }
        if (seleccion.numero !== "3"){
            menu();
        } else{
            alert('Nos re vimos Boo');
        }
    } else{
        alert('Por favor,selecciona una opcion valida.');
        menu();
    }
}



