document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = 'translateX(-' + index * 100 + '%)';
  }, 3000);

  const countdown = document.querySelector('.countdown');
  const targetDate = new Date('2025-08-01T20:00:00');
  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      countdown.innerHTML = "✨ Hoy es tu día, mi amor ✨";
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60))%24);
    const minutes = Math.floor((diff/(1000*60))%60);
    const seconds = Math.floor((diff/1000)%60);
    countdown.innerHTML = `Faltan ${days} días, ${hours}h ${minutes}m ${seconds}s para nuestra cena ❤️`;
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
            max-width: 500px;
            margin: auto;
          }
          h2 { color: #d6336c; font-size: 2em; }
          p { font-size: 1.1em; line-height: 1.6; margin: 12px 0; }
          .cerrar-btn {
            margin-top: 20px; padding: 10px 20px; font-size: 1em;
            background: #ff6f91; color: #fff; border: none;
            border-radius: 10px; cursor: pointer;
          }
          .cerrar-btn:hover { background: #ff3b75; }
        </style>
      </head>
      <body>
        <div class="carta">
          <h2>💌 Mi amor preciosa 💌</h2>
          <p>El 1 de agosto, se celebra el Día de la Novia, una fecha dedicada a consentir, demostrar amor y aprecio por ser la mejor novia del universo.</p>
          <p>Sé que eres mi novia todos los días, pero investigué que este día ha ganado popularidad en México gracias a TikTok y redes sociales como una ocasión para honrar a nuestras compañeras de vida.</p>
          <p>Quiero invitarte a cenar esta noche, yo paso por ti a tu trabajo para celebrarte en tu día.</p>
          <p>Y, mi amor, tú primero Dios serás mi compañera de toda la vida y algún día mi esposa.</p>
          <p>Con todo mi amor,<br>Tu bobio</p>
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

function confirmarAsistencia() {
  const message = encodeURIComponent("¡Hola mi amor! ❤️ Confirmo que estaré contigo este 1 de agosto a cenar. 🥂✨");
  window.open(`https://wa.me/525539501267?text=${message}`, '_blank');
  const title = encodeURIComponent("Cena Día de la Novia con Montse 💖");
  const details = encodeURIComponent("Cena especial en tu día 😊 Lugar: Sorpesa");
  const location = encodeURIComponent("CDMX");
  const start = "20250801T200000";
  const end = "20250801T213000";
  const guests = encodeURIComponent("vmontserrat.gg@gmail.com,gggandre08@gmail.com");
  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}&add=${guests}`;
  setTimeout(() => window.open(calendarLink, '_blank'), 1000);
  lanzarConfeti();
}

function agregarAlCalendario() {
  const title = encodeURIComponent("Cena Día de la Novia con Montse 💖");
  const details = encodeURIComponent("Cena especial en tu día 😊 Lugar: Sorpresa");
  const location = encodeURIComponent("CDMX");
  const start = "20250801T200000";
  const end = "20250801T213000";
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
