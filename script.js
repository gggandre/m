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
  const countdownEl = document.getElementById("countdown");
  const eventDate = new Date("June 12, 2025 18:00:00").getTime();

  const countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(countdownTimer);
      countdownEl.innerHTML = "¡Es hoy! 💘";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `⏳ Faltan ${days}d ${hours}h ${minutes}m ${seconds}s para nuestra cita 💖`;
  }, 1000);

  // Popup con la invitación
  const btn = document.getElementById('mensajeBtn');
  btn.addEventListener('click', function () {
    const popup = window.open('', '_blank', 'width=600,height=700');

    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🌟 Invitación Especial 🌟</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
      <body class="popup-cine">
        <div class="boleto">
          <h2>🌹 Invitación a una noche especial 🌹</h2>
          <p><strong>Cuándo:</strong> Jueves 12 de Junio - 6:00 PM</p>
          <p><strong>Dónde:</strong> Es Sorpresa jiji  🍝</p>
          <p><strong>Plan:</strong> Paso por ti a tu trabajo, y cenamos con música en vivo 🎶</p>
          <p><strong>Dress code:</strong> Formal casual, ponte bonita como siempre 😍</p>
          <img src="assets/fotos/15.jpg" class="stitch-img" alt="Nosotros">
          <p class="detalle">Es una noche especial, como tú...</p>
          <button class="cerrar-btn" onclick="window.close()">Cerrar 💌</button>
        </div>
      </body>
      </html>
    `;

    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  });
});
