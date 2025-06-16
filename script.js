document.addEventListener('DOMContentLoaded', function () {
  // Carrusel automático
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = 'translateX(-' + index * 100 + '%)';
  }, 3000);

  // Popup con la invitación abierta
  const btn = document.getElementById('mensajeBtn');
  btn.addEventListener('click', function () {
    const popup = window.open('', '_blank', 'width=600,height=700');

    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🌟 Invitación 🌟</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
      <body class="popup-cine">
        <div class="boleto">
          <h2>💌 Una invitación para ti 💌</h2>
          <p>Hola novia preciosa :)</p>
          <p>Me encantaría que nos viéramos cuando tú puedas y estes mas tranqui 🌷</p>
          <p>Sin presión ni fecha exacta, solo cuando tu puedas 💕</p>
          <p>Tengo ganas de compartir un momento contigo, tranquilo y bonito como tú ✨</p>
          <img src="assets/fotos/15.jpg" class="stitch-img" alt="Nosotros">
          <p class="detalle">Tú dime cuándo, y ahí estaré. 💖</p>
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
