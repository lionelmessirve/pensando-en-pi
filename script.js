html += `
<div class="tarjeta">
    <div class="numero">#${jugador.numero}</div>
    <h3>${jugador.nombre}</h3>
    <p><span class="posicion">Posición:</span> ${jugador.posicion}</p>
    <p><span class="club">Club:</span> ${jugador.club}</p>
    <p><strong>Edad:</strong> ${jugador.edad} años</p>
    <p>${jugador.descripcion}</p>
</div>
`;
