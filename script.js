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
        <title>Carta para ti 💖</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
      <body class="popup-cine">
        <div class="boleto">
          <h2>💌 Para mi novia hermosa 💌</h2>
          <p>Hola amor,</p>
          <p>Solo quería decirte, con el corazón en la mano, que te amo profundamente.</p>
          <p>Te extraño muchísimo, a veces más de lo que puedo explicar. Siento un huequito en el pecho que solo tú puedes llenar, te amo.</p>
          <p>No dejo de pensar en ti, en tu voz, tu risa, tu forma de mirar. Me haces mucha falta, Montse.</p>
          <p>Ya quiero verte. Verte y abrazarte fuerte, quedarme ahí contigo sin preocuparme por nada más que por ese momento.</p>
          <p>Ojalá podamos vernos pronto, ándale por favor. Yo estaré esperándote con todo mi amor y te daré muchos besos y abrazos porque te exytaño como no tienes idea .</p>
          <img src="assets/fotos/16.jpg" class="stitch-img" alt="Nosotros">
          <p class="detalle">Con todo mi amor, siempre tuyo 💖</p>
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
