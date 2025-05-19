// JavaScript en archivo externo para evitar inyección de Live-Server
document.addEventListener('DOMContentLoaded', function() {
  // —— Carrusel automático cada 3 segundos —— 
  var slider = document.querySelector('.slider');
  var slides = document.querySelectorAll('.slide');
  var index = 0;
  setInterval(function() {
    index = (index + 1) % slides.length;
    slider.style.transform = 'translateX(-' + (index * 100) + '%)';
  }, 3000);

  // —— Popup de invitación —— 
  var btn = document.getElementById('mensajeBtn');
  btn.addEventListener('click', function() {
    var popup = window.open('', '_blank', 'width=600,height=700');

    // 1) Generar corazones animados
    var hearts = '';
    for (var i = 0; i < 30; i++) {
      var left  = (Math.random() * 100).toFixed(2);
      var delay = (Math.random() * 10).toFixed(2);
      var size  = (15 + Math.random() * 15).toFixed(2);
      hearts +=
        '<div class="corazon" ' +
          'style="left:' + left + '%; ' +
                 'width:' + size + 'px; ' +
                'height:' + size + 'px; ' +
        'animation-delay:' + delay + 's;"></div>';
    }

    // 2) Construir HTML completo del popup
    var html = ''
      + '<!DOCTYPE html>'
      + '<html lang="es">'
      + '<head>'
      +   '<meta charset="UTF-8">'
      +   '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      +   '<title>Invitación para mi futura novia Mon mía de mi 💖</title>'
      +   '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">'
      +   '<link rel="stylesheet" href="style.css">'
      + '</head>'
      + '<body style="overflow-y:auto; overflow-x:hidden;">'  // habilita scroll vertical sólo en popup
      +   hearts
      +   '<div class="tarjeta">'
      +     '<h2> ¡Invitación para el 25 de mayo! <3</h2>'
      +     '<p><span class="emoji">🌷</span> Este 25 de mayo quiero invitarte a celebrar tu día, el día de la contadora más preciosa del universo.</p>'
      +     '<p><span class="emoji"></span> Podemos armar tus flores de Lego<3,</p>'
      +     '<p><span class="emoji">🍝</span> ir a comer lo que quieras (es tu día),</p>'
      +     '<p><span class="emoji">💫</span> y pasar un día lleno de amor, risas y paz juntos, te adoro.</p>'
      +     '<p><strong>Te quiero mucho, muchísimo.</strong> Me haces feliz y nada me haría más ilusión que compartir este día especial contigo.</p>'
      +     '<p><span class="emoji">🐌</span> Si quieres, me encantaría verte para ver <em>Memorias de un caracol</em> entre semana o inventarnos algún plan.</p>'
      +     '<p><strong>Gracias por ser tú, mi niña bonita. 💖</strong></p>'
      +     '<a class="agendar-btn" href="https://ui.nimblr.co/self/6683/Andre" target="_blank">📅 Agendar con Holly para el mimingo</a><br>'
      +     '<button class="cerrar-btn" onclick="window.close()">Cerrar 💌</button>'
      +   '</div>'
      + '</body>'
      + '</html>';

    // 3) Escribir y cerrar
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  });
});
