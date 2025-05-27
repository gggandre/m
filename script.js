document.addEventListener('DOMContentLoaded', function () {
  // —— Carrusel automático —— 
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = 'translateX(-' + index * 100 + '%)';
  }, 3000);

  // —— Popup tipo boleto de cine —— 
  const btn = document.getElementById('mensajeBtn');
  btn.addEventListener('click', function () {
    const popup = window.open('', '_blank', 'width=600,height=700');

    const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>🎟️ Boleto de Cine 🎟️</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
      <body class="popup-cine">
        <div class="boleto">
          <h2>🎬 Entrada al Cine</h2>
          <p><strong>Película:</strong> Lilo & Stitch 💙</p>
          <p><strong>Cuándo:</strong> Jueves</p>
          <p><strong>Con quién:</strong> Con tu fan número uno <3</p>
          <p><strong>Plan:</strong> Ir juntitos al cine, reírnos y abrazarnos mucho.</p>
          <img src="assets/fotos/stitch.jpg" class="stitch-img" alt="Lilo y Stitch">
          <p class="detalle">*Este boleto es válido solo para la persona más linda del universo*</p>
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
