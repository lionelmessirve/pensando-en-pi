const jugadores = [
{
    nombre: "Lionel Messi",
    numero: 10,
    posicion: "Delantero",
    club: "Inter Miami",
    edad: 39,
    descripcion: "Capitán de la Selección Argentina, campeón del mundo en Qatar 2022 y considerado uno de los mejores futbolistas de la historia."
},
{
    nombre: "Emiliano 'Dibu' Martínez",
    numero: 23,
    posicion: "Arquero",
    club: "Aston Villa",
    edad: 33,
    descripcion: "Arquero titular de Argentina, destacado por sus atajadas en penales y por ganar el Mundial 2022."
},
{
    nombre: "Cristian Romero",
    numero: 13,
    posicion: "Defensor",
    club: "Tottenham Hotspur",
    edad: 28,
    descripcion: "Defensor central con gran capacidad para anticipar y recuperar balones."
},
{
    nombre: "Nicolás Otamendi",
    numero: 19,
    posicion: "Defensor",
    club: "Benfica",
    edad: 38,
    descripcion: "Experimentado defensor y líder de la defensa argentina."
},
{
    nombre: "Nahuel Molina",
    numero: 16,
    posicion: "Defensor",
    club: "Atlético de Madrid",
    edad: 28,
    descripcion: "Lateral derecho con velocidad y proyección ofensiva."
},
{
    nombre: "Enzo Fernández",
    numero: 24,
    posicion: "Mediocampista",
    club: "Chelsea",
    edad: 25,
    descripcion: "Centrocampista con gran visión de juego y precisión en los pases."
},
{
    nombre: "Rodrigo De Paul",
    numero: 7,
    posicion: "Mediocampista",
    club: "Atlético de Madrid",
    edad: 32,
    descripcion: "Motor del mediocampo argentino por su intensidad y recuperación."
},
{
    nombre: "Alexis Mac Allister",
    numero: 20,
    posicion: "Mediocampista",
    club: "Liverpool",
    edad: 27,
    descripcion: "Mediocampista creativo con excelente técnica y llegada al área."
},
{
    nombre: "Julián Álvarez",
    numero: 9,
    posicion: "Delantero",
    club: "Atlético de Madrid",
    edad: 26,
    descripcion: "Delantero rápido, goleador y campeón del mundo."
},
{
    nombre: "Lautaro Martínez",
    numero: 22,
    posicion: "Delantero",
    club: "Inter de Milán",
    edad: 29,
    descripcion: "Delantero con gran capacidad goleadora y capitán del Inter."
}
];

function mostrarJugadores(){

    let html = "<h2>🇦🇷 Jugadores de la Selección Argentina</h2>";

    jugadores.forEach(jugador=>{
        html += `
        <div style="border:1px solid #00d4ff; margin:15px; padding:15px; border-radius:10px;">
            <h3>${jugador.nombre}</h3>
            <p><b>Número:</b> ${jugador.numero}</p>
            <p><b>Posición:</b> ${jugador.posicion}</p>
            <p><b>Club:</b> ${jugador.club}</p>
            <p><b>Edad:</b> ${jugador.edad} años</p>
            <p>${jugador.descripcion}</p>
        </div>
        `;
    });

    document.getElementById("info").innerHTML = html;
}
