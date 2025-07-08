document.addEventListener('DOMContentLoaded', function () {
  // Carrusel automático
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = 'translateX(-' + index * 100 + '%)';
  }, 3000);

  // Contador regresivo al 12 de julio 14:00
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
    countdown.innerHTML = `Faltan ${days} días, ${hours}h ${minutes}m ${seconds}s para cumplir un mes de bobios ❤️`;
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

  // Mostrar carta amorosa en popup
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
          <p>Me gustas mucho, Montse. No dejo de pensar en ti, en tu sonrisa, tu risa y tu forma de mirarme.</p>
          <p>Quiero abrazarte fuerte y celebrar que llevamos un mes llenando de amor nuestras vidas.</p>
          <p>¿Pero si nos vamos a veeer o nada? Te prometo besos, abrazos y muchos “te amo” más.</p>
          <p>Con todo mi amor,<br>Tu novio André Gaytán <3</p>
          <button class="cerrar-btn" onclick="window.close()">Cerrar</button>
        </div>
      </body>
      </html>
    `;
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  });
});

// Pantalla completa para el video
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
