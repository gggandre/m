document.addEventListener('DOMContentLoaded', function () {
  // Carrusel automático
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = 'translateX(-' + index * 100 + '%)';
  }, 3000);

  // Contador regresivo
  const countdown = document.querySelector('.countdown');
  const targetDate = new Date('2025-07-12T14:00:00');
  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      countdown.innerHTML = "✨ Ya es nuestra cita, amor ✨";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdown.innerHTML = `Faltan ${days} días, ${hours}h ${minutes}m ${seconds}s para vernos ❤️`;
  };
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Estrellas animadas
  const estrellas = document.querySelector('.estrellas');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'estrella';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = (Math.random() * 10 + 5) + 's';
    estrellas.appendChild(star);
  }

  // Botón de invitación
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
            background: #fff0f6;
            color: #5c0a27;
            font-family: 'Roboto', sans-serif;
            padding: 30px;
            text-align: center;
          }
          .carta {
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(255, 111, 145, 0.3);
            animation: aparecer 1s ease-in;
            max-width: 500px;
            margin: auto;
          }
          @keyframes aparecer {
            from { opacity: 0; transform: scale(0.95); }
            to   { opacity: 1; transform: scale(1); }
          }
          h2 {
            color: #d6336c;
            font-size: 2em;
          }
          p {
            font-size: 1.1em;
            line-height: 1.6;
            margin: 12px 0;
          }
          .cerrar-btn {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1em;
            background: #ff6f91;
            color: #fff;
            border: none;
            border-radius: 10px;
            cursor: pointer;
          }
          .cerrar-btn:hover {
            background: #ff3b75;
          }
        </style>
      </head>
      <body>
        <div class="carta">
          <h2>💌 Mi amor hermosa 💌</h2>
          <p>Este sábado 12 de julio a las 2:00 p.m. quiero verte.</p>
          <p>Me haces demasiada falta, Montse. No dejo de pensar en ti, en tu sonrisa, tu risa y tu forma de mirarme.</p>
          <p>Quiero abrazarte fuerte y celebrar que llevamos un mes llenando de amor nuestras vidas.</p>
          <p>¿Vendrías a verme? Te prometo besos, abrazos y muchos “te amo” más.</p>
          <p>Con todo mi amor,<br>Tu novio 🐻</p>
          <button class="cerrar-btn" onclick="window.close()">Cerrar 🌸</button>
        </div>
      </body>
      </html>
    `;
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  });
});

function abrirVideo() {
  const win = window.open('', '_blank');
  win.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>🎥 Nuestro momento 🎥</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          background: black;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        video {
          width: 90vw;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(255,255,255,0.5);
        }
      </style>
    </head>
    <body>
      <video controls autoplay>
        <source src="assets/video/nosotros.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </body>
    </html>
  `);
  win.document.close();
}

function confirmarAsistencia() {
  const message = encodeURIComponent("¡Hola amor! ❤️ Te confirmo que sí estaré contigo este sábado 12 de julio a las 2:00 p.m. 🥹✨");
  window.open(`https://wa.me/525539501267?text=${message}`, '_blank');

  const title = encodeURIComponent("Primer mes con Montse 💖");
  const details = encodeURIComponent("Celebrar nuestro primer mes de novios ✨\nLugar: donde tú y yo seamos felices ❤️");
  const location = encodeURIComponent("CDMX");
  const start = "20250712T140000";
  const end = "20250712T153000";
  const guests = encodeURIComponent("vmontserrat.gg@gmail.com,gggandre08@gmail.com");

  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}&add=${guests}`;

  setTimeout(() => {
    window.open(calendarLink, '_blank');
  }, 1000);

  lanzarConfeti();
}

function agregarAlCalendario() {
  const title = encodeURIComponent("Primer mes con Montse 💖");
  const details = encodeURIComponent("Celebrar nuestro primer mes de novios ✨\nLugar: donde tú y yo seamos felices ❤️");
  const location = encodeURIComponent("CDMX");
  const start = "20250712T140000"; // 2:00 p.m.
  const end = "20250712T210000";   // 9:00 p.m.
  const guests = encodeURIComponent("vmontserrat.gg@gmail.com,gggandre08@gmail.com");

  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}&add=${guests}`;

  window.open(calendarLink, '_blank');
}


function lanzarConfeti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettis = [];
  const colores = ['#ff6f91', '#fce38a', '#f38181', '#a8edea', '#d6a4a4'];

  for (let i = 0; i < 150; i++) {
    confettis.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      c: colores[Math.floor(Math.random() * colores.length)],
      d: Math.random() * 10 + 10
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.c;
      ctx.fill();
    });
    update();
  }

  function update() {
    confettis.forEach(c => {
      c.y += Math.sin(c.d / 2);
      c.x += Math.sin(c.d / 3);
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  const interval = setInterval(draw, 30);
  setTimeout(() => {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 6000);
}
