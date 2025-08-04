document.addEventListener('DOMContentLoaded', function () {
  const countdown = document.querySelector('.countdown');
  const intro = document.querySelector('.intro');
  const targetDate = new Date('2025-08-09T14:00:00');

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdown.innerHTML = "🎉 Hoy es nuestro día, amor. ¡Vamos a vivirlo al máximo! 💛💙";
      intro.innerText = "¡Hoy vamos juntos al cine y al estadio! 😍";
      return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60))%24);
    const minutes = Math.floor((diff/(1000*60))%60);
    const seconds = Math.floor((diff/1000)%60);

    countdown.innerHTML = `Faltan ${days} días, ${hours}h ${minutes}m ${seconds}s para nuestra cita legendaria 💘`;
  };

  setInterval(updateCountdown, 1000);
  updateCountdown();

  const estrellas = document.querySelector('.estrellas');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'estrella';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = (Math.random() * 10 + 5) + 's';
    estrellas.appendChild(star);
  }

  const balon = document.querySelector('.balon');
  const audioGol = document.getElementById('gol-audio');
  balon.addEventListener('animationiteration', () => {
    audioGol.currentTime = 0;
    audioGol.play();
  });

  const btn = document.getElementById('mensajeBtn');
  btn.addEventListener('click', function () {
    const popup = window.open('', '_blank', 'width=600,height=700');
    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Para ti 💌</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <style>
          body {
            background: #fffce6;
            color: #0d47a1;
            font-family: 'Roboto', sans-serif;
            padding: 30px;
            text-align: center;
          }
          .carta {
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(13, 71, 161, 0.2);
            max-width: 500px;
            margin: auto;
          }
          h2 { color: #ffc107; font-size: 2em; }
          p { font-size: 1.1em; line-height: 1.6; margin: 12px 0; }
          .cerrar-btn {
            margin-top: 20px; padding: 10px 20px; font-size: 1em;
            background: #0d47a1; color: #fff; border: none;
            border-radius: 10px; cursor: pointer;
          }
          .cerrar-btn:hover { background: #1565c0; }
        </style>
      </head>
      <body>
        <div class="carta">
          <h2>🎬⚽ ¡Sábado de ver al América, al Tanjiro y a mi amor (Mon mía de mí)! 💛💙</h2>
          <p>Mi niña hermosa, te invito este sábado a una cita increíble:</p>
          <p>Primero iremos a ver Demon Slayer en el cine 🍿, y después nos lanzamos juntos al Estadio Azulcrema a apoyar a las poderosas águilas del América.</p>
          <p>Lleva tu playera con orgullo, muchas ganas de gritar goles y, sobre todo, tu sonrisa preciosa.</p>
          <p>¡Este día será inolvidable porque estaré contigo!</p>
          <p>Con todo mi amor,<br>Tu bobio 💘</p>
          <button class="cerrar-btn" onclick="window.close()">Cerrar 💛</button>
        </div>
      </body>
      </html>
    `;
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  });

  const hora = new Date().getHours();
  if (hora >= 19 || hora <= 6) {
    document.body.classList.add('noche');
  }
});

function confirmarAsistencia() {
  const message = encodeURIComponent("¡Confirmo la cita corazón Vamos con todo este sábado, arriba el América 💛💙🦅");
  window.open(`https://wa.me/525539501267?text=${message}`, '_blank');
  setTimeout(() => agregarAlCalendario(), 1000);
}

function agregarAlCalendario() {
  const title = encodeURIComponent("Cita con Montse – Demon Slayer y Club América 💛💙");
  const details = encodeURIComponent("Vamos al cine a ver Demon Slayer y luego al Estadio Azteca a apoyar al América juntos.");
  const location = encodeURIComponent("CDMX");
  const start = "20250809T140000";
  const end = "20250809T220000";
  const guests = encodeURIComponent("vmontserrat.gg@gmail.com,gggandre08@gmail.com");
  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}&add=${guests}`;
  window.open(calendarLink, '_blank');
}

function mostrarChecklist() {
  alert("✔️ Playera del América\n✔️ Ganas de gritar goles\n✔️ Amor para tu bobio\n✔️ ¡Tu hermosa sonrisa!");
}
