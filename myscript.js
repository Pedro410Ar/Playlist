/*document.getElementById('mostrar').addEventListener('click', function () {
  document.getElementById('playlist').style.display = 'block';
  document.getElementById('preguntas').style.display = 'none';
  document.getElementById('back').style.display = 'block';
  document.getElementById('mostrar').style.display = 'none';
});

document.getElementById('back').addEventListener('click', function () {
  document.getElementById('playlist').style.display = 'none';
  document.getElementById('preguntas').style.display = 'block';
  document.getElementById('back').style.display = 'none';
});
*/ 

document.getElementById('mostrar').addEventListener('click', function () {
  // Ocultamos el formulario de preguntas
  document.getElementById('preguntas').style.display = 'none';
  
  // Ocultamos el botón de búsqueda
  document.getElementById('mostrar').style.display = 'none';
  
  // Mostramos el botón de "BACK"
  document.getElementById('back').style.display = 'block';

  // Elegir una playlist aleatoria
  var playlists = ['playlist', 'playlist2', 'playlist3', 'playlist4', 'playlist5'];
  var randomIndex = Math.floor(Math.random() * playlists.length); // Índice aleatorio
  var selectedPlaylist = playlists[randomIndex]; // Playlist aleatoria
  
  // Ocultar todas las playlists
  playlists.forEach(function(playlist) {
    document.getElementById(playlist).style.display = 'none';
  });

  // Mostrar la playlist seleccionada
  document.getElementById(selectedPlaylist).style.display = 'block';
});

document.getElementById('back').addEventListener('click', function () {
  // Ocultamos la playlist
  var playlists = ['playlist', 'playlist2', 'playlist3', 'playlist4', 'playlist5'];
  playlists.forEach(function(playlist) {
    document.getElementById(playlist).style.display = 'none';
  });

  // Mostramos el formulario de preguntas nuevamente
  document.getElementById('preguntas').style.display = 'block';
  
  // Ocultamos el botón "BACK"
  document.getElementById('back').style.display = 'none';
  
  // Mostramos el botón "SEARCH"
  document.getElementById('mostrar').style.display = 'block';
});



