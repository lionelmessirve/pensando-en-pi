const fenomenos = {
    dia: `
    <h2>🌞 Día y Noche</h2>
    <p>
    Ocurren debido a la rotación de la Tierra sobre su eje.
    Se repiten aproximadamente cada 24 horas.
    </p>
    `,

    mareas: `
    <h2>🌊 Mareas</h2>
    <p>
    Son cambios periódicos del nivel del mar provocados por la gravedad
    de la Luna y el Sol.
    </p>
    `,

    ondas: `
    <h2>📡 Ondas</h2>
    <p>
    Las ondas son fenómenos periódicos que transportan energía mediante
    oscilaciones repetitivas.
    </p>
    `,

    vibracion: `
    <h2>🎵 Vibraciones</h2>
    <p>
    Una vibración consiste en un movimiento repetitivo alrededor de un
    punto de equilibrio. Es la base del sonido y de muchos fenómenos físicos.
    </p>
    `
};

function mostrar(tipo){
    document.getElementById("info").innerHTML = fenomenos[tipo];
}
